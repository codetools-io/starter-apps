import { find as _find, keyBy, reject, orderBy } from 'lodash';
import dotProp from 'dot-prop-immutable';

// Collection Operations
export function create(collection, payload) {
  return [...collection, payload];
}
export function update(collection, payload) {
  return collection.map((item) => {
    if (item.id !== payload.id) {
      return item;
    }

    return payload;
  });
}
export function remove(collection, payload) {
  return reject(collection, payload);
}
export function patch(collection, payload) {
  return collection.map((item) => {
    if (item.id !== payload.id) {
      return item;
    }

    return {
      ...item,
      ...payload,
    };
  });
}

export function find(collection, payload) {
  return _find(collection, payload);
}

export function insertBefore(collection, index, payload) {}
export function insertAfter(collection, index, payload) {}
export function moveBefore(collection, index, payload) {}
export function moveAfter(collection, index, payload) {}
