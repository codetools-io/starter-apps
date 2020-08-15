import { createStore } from 'easy-peasy';
import createResource from './utils/create-resource';
import app from './app';
const store = createStore({
  app,
  tasks: createResource('Task'),
});

export default store;
