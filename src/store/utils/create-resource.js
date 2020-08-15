import { action, computed, thunk, thunkOn } from 'easy-peasy';
import axios from 'axios';
import { pluralize } from 'inflection';
import { filter, orderBy, isArray, isObject } from 'lodash';

function getService(resourceName) {
  const baseURL =
    process.env[`REACT_APP_${pluralize(resourceName).toUpperCase()}_SERVICE`];
  const service = axios.create({
    baseURL,
    timeout: 1000,
  });

  service.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.error(error);
      return Promise.reject(error);
    }
  );

  return service;
}

function deepQuery(value, q) {
  if (value && q) {
    if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        if (deepQuery(value[i], q)) {
          return true;
        }
      }
    } else if (isObject(value) && !isArray(value)) {
      for (const k in value) {
        if (deepQuery(value[k], q)) {
          return true;
        }
      }
    } else if (value.toString().toLowerCase().indexOf(q) !== -1) {
      return true;
    }
  }
}

function searchRecords(records, searchTerm) {
  return records.filter((obj) => {
    for (const key in obj) {
      const record = obj[key];
      if (deepQuery(record, searchTerm)) {
        return true;
      }
    }
  });
}

export default function createResource(resourceName) {
  const service = getService(resourceName);
  const collectionsKey = pluralize(resourceName).toLowerCase();

  return {
    data: {},
    errors: [],
    filters: null,
    sorts: null,
    search: null,
    loading: false,
    writing: false,
    record: null,
    records: computed(
      [
        (state) => state.filters,
        (state) => state.data,
        (state) => state.sorts,
        (state) => state.search,
      ],
      (filters, data = {}, sorts, search) => {
        const filteredData = filters
          ? filter(Object.values(data), filters)
          : Object.values(data);
        const orderedFilteredData = sorts
          ? orderBy(filteredData, Object.keys(sorts), Object.values(sorts))
          : filteredData;
        const searchTerm = search?.toLowerCase?.();
        const searchedOrderedFilteredData = searchTerm
          ? searchRecords(orderedFilteredData, searchTerm)
          : orderedFilteredData;

        return searchedOrderedFilteredData;
      }
    ),
    ids: computed([(state) => state.data], (data) => {
      return Object.keys(data);
    }),
    created: action((state, data) => {
      state.record = { ...data };
    }),
    errored: action((state, error) => {
      state.errors.push(error);
    }),
    filtered: action((state, filters) => {
      state.filters = filters;
    }),
    loaded: action((state, data) => {
      if (Array.isArray(data)) {
        data.forEach((item) => {
          state.data[item?.id] = item;
        });
      } else {
        state.data[data.id] = data;
      }
    }),
    selected: action((state, data) => {
      state.record = { ...data };
    }),
    sorted: action((state, sorts) => {
      state.sorts = sorts;
    }),
    updated: action((state, data) => {
      state.record = { ...state.record, ...data };
    }),
    searched: action((state, searchTerm) => {
      state.search = searchTerm;
    }),

    // API operation statuses
    loadErrored: action((state) => {
      state.loading = false;
    }),
    loadStarted: action((state) => {
      state.loading = true;
    }),
    loadSucceeded: action((state) => {
      state.loading = false;
    }),

    writeErrored: action((state) => {
      state.writing = false;
    }),
    writeStarted: action((state) => {
      state.writing = true;
    }),
    writeSucceeded: action((state) => {
      state.writing = false;
    }),

    // API operations
    createRecord: thunk(async (actions, payload) => {
      actions.writeStarted();
      // response props: data, status, statusText, headers, config
      try {
        const { data } = await service.post('', payload);
        actions.loaded(data);
        actions.writeSucceeded();

        return data;
      } catch (err) {
        actions.errored(err);
        actions.writeErrored();

        throw err;
      }
    }),
    crupdateRecord: thunk(async (actions, payload) => {
      actions.writeStarted();
      // response props: data, status, statusText, headers, config
      try {
        if (payload?.id) {
          const { data } = await service.patch(`/${payload.id}`, payload);
          actions.loaded(data);
          actions.writeSucceeded();

          return data;
        } else {
          const { data } = await service.post(``, payload);
          actions.loaded(data);
          actions.writeSucceeded();

          return data;
        }
      } catch (err) {
        actions.errored(err);
        actions.writeErrored();

        throw err;
      }
    }),
    findRecord: thunk(async (actions, id) => {
      // response props: data, status, statusText, headers, config
      actions.loadStarted();
      try {
        const { data } = await service.get(`/${id}`);
        actions.loaded(data);
        actions.loadSucceeded();

        return data;
      } catch (err) {
        actions.errored(err);
        actions.loadErrored();

        throw err;
      }
    }),
    findRecords: thunk(async (actions) => {
      // response props: data, status, statusText, headers, config
      actions.loadStarted();

      try {
        const { data } = await service.get('');

        actions.loaded(data[collectionsKey]);
        actions.loadSucceeded();

        return data;
      } catch (err) {
        actions.errored(err);
        actions.loadErrored();

        throw err;
      }
    }),
    queryRecords: thunk(async (actions, queryParams) => {
      actions.loadStarted();
      // response props: data, status, statusText, headers, config
      try {
        const { data } = await service.get('', {
          params: queryParams,
        });

        actions.loaded(data[collectionsKey]);
        actions.loadSucceeded();

        return data;
      } catch (err) {
        actions.errored(err);
        actions.loadErrored();

        throw err;
      }
    }),
    updateRecord: thunk(async (actions, payload) => {
      actions.writeStarted();
      // response props: data, status, statusText, headers, config
      try {
        const { data } = await service.patch(`/${payload.id}`, payload);
        actions.loaded(data);
        actions.writeSucceeded();

        return data;
      } catch (err) {
        actions.errored(err);
        actions.writeErrored();

        throw err;
      }
    }),
    onFiltered: thunkOn(
      (actions) => actions.filtered,
      (actions, target) => {
        actions.queryRecords(target.payload);
      }
    ),
    onSearched: thunkOn(
      (actions) => actions.searched,
      (actions, target) => {
        actions.queryRecords({ q: target.payload });
      }
    ),
    onSorted: thunkOn(
      (actions) => actions.sorted,
      (actions, target) => {
        actions.queryRecords(target.payload);
      }
    ),
  };
}
