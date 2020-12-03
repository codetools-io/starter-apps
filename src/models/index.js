// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bookmark } = initSchema(schema);

export {
  Bookmark
};