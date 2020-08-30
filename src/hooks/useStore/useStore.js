import { useCallback, useMemo, useState } from 'react';
import { reject, orderBy, keyBy } from 'lodash';
import * as util from 'utils/collection';

export default function useStore(initialState = []) {
  const [state, setState] = useState(initialState);
  const [sorts, setSorts] = useState();
  const [filters, setFilters] = useState();

  const sorted = useMemo(() => orderBy(state, sorts), [state, sorts]);

  const filtered = useMemo(() => reject(state, filters), [state, filters]);

  const groupedById = useMemo(() => keyBy(state, 'id'), [state]);

  const load = useCallback((payload) => setState(payload), []);

  const create = useCallback(
    (payload) => setState(util.create(state, payload)),
    [state]
  );

  const update = useCallback(
    (payload) => setState(util.update(state, payload)),
    [state]
  );

  const patch = useCallback((payload) => setState(util.patch(state, payload)), [
    state,
  ]);

  const remove = useCallback(
    (payload) => setState(util.remove(state, payload)),
    [state]
  );

  const insert = useCallback(
    (payload) => {
      return {
        before(index) {
          setState(util.insertBefore(state, index, payload));
        },
        after(index) {
          setState(util.insertAfter(state, index, payload));
        },
      };
    },
    [state]
  );

  const move = useCallback(
    (payload) => {
      return {
        before(index) {
          setState(util.moveBefore(state, index, payload));
        },
        after(index) {
          setState(util.moveAfter(state, index, payload));
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
