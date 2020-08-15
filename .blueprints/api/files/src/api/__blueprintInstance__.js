import axios from 'axios';
import queryString from 'query-string';

const service = axios.create({
  baseURL: '/api/{{blueprintInstance_DashedFormat}}',
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

export function getAll() {
  return service.get('').then((res) => {
    return res.data;
  });
}

export function getByQuery(queryParams) {
  const query = queryString.stringify(queryParams);

  return service.get(`?${query}`).then((res) => {
    return res.data;
  });
}

export function getById(id) {
  return service.get(`/${id}`).then((res) => {
    return res.data;
  });
}

export function create({{blueprintInstance}}) {
  return service.post('', {{blueprintInstance}}).then((res) => {
    return res.data;
  });
}

export function update({{blueprintInstance}}) {
  return service.patch(`/${{{blueprintInstance}}.id}`, {{blueprintInstance}}).then((res) => {
    return res.data;
  });
}
