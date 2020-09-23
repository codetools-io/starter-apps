import { useCallback, useMemo, useState } from 'react';
import { reject, orderBy, keyBy } from 'lodash';
import * as collections from 'utils/collections';

export default function useStore(initialState = []) {
  const [state, setState] = useState(initialState);
  const [sorts, setSorts] = useState();
  const [filters, setFilters] = useState();

  const sorted = useMemo(() => orderBy(state, sorts), [state, sorts]);

  const filtered = useMemo(() => reject(state, filters), [state, filters]);

  const groupedById = useMemo(() => keyBy(state, 'id'), [state]);

  const load = useCallback((payload) => setState(payload), []);

  const create = useCallback(
    (payload) => setState(collections.append(state, payload)),
    [state]
  );

  const update = useCallback(
    (payload) => setState(collections.update(state, payload)),
    [state]
  );

  const patch = useCallback(
    (payload) => setState(collections.patch(state, payload)),
    [state]
  );

  const remove = useCallback(
    (payload) => setState(collections.remove(state, payload)),
    [state]
  );

  const insert = useCallback(
    (payload) => {
      return {
        before(index) {
          setState(collections.insertBefore(state, index, payload));
        },
        after(index) {
          setState(collections.insertAfter(state, index, payload));
        },
      };
    },
    [state]
  );

  const move = useCallback(
    (payload) => {
      return {
        before(index) {
          setState(collections.moveBefore(state, index, payload));
        },
        after(index) {
          setState(collections.moveAfter(state, index, payload));
        },
      };
    },
    [state]
  );

  const sortBy = useCallback((rules) => setSorts(rules), []);

  const filterBy = useCallback((rules) => setFilters(rules), []);

  const store = useMemo(() => {
    return {
      state,
      sorts,
      sorted,
      filters,
      filtered,
      load,
      create,
      update,
      patch,
      remove,
      insert,
      move,
      sortBy,
      filterBy,
      groupedById,
    };
  }, [
    state,
    sorts,
    sorted,
    filters,
    filtered,
    load,
    create,
    update,
    patch,
    remove,
    insert,
    move,
    sortBy,
    filterBy,
    groupedById,
  ]);

  return store;
}
