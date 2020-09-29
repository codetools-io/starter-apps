import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'internal/components/Docs';
import Chat from './Chat';
const usage = `
const createRecord = (payload) => fetch(\`https://api.codetools.io/messages/\${id}\`)
const findRecord = (id) => fetch(\`https://api.codetools.io/messages/\${id}\`)
const updateRecord = (id, payload) => fetch(\`https://api.codetools.io/messages/\${id}\`)
const deleteRecord = (id) => fetch(\`https://api.codetools.io/messages/\${id}\`)
const serialize = (payload) => JSON.stringify(payload)
const deserialize = (payload) => payload

<Chat
  createRecord={createRecord}
  findRecord={findRecord}
  updateRecord={updateRecord}
  deleteRecord={deleteRecord}
  serialize={serialize}
  deserialize={deserialize}
/>
`;
const ChatWithSchema = describe(Chat)
  .description('An app for facilitating real-time text communication.')
  .usage(usage);

ChatWithSchema.displayName = 'Chat';

ChatWithSchema.propTypes = {
  createRecord: PropTypes.func.description({
    overview: 'Creates a single record at the external source.',
    args: [
      {
        name: 'payload',
        type: 'any',
        description: 'The payload to send to the external service.',
      },
    ],
    returnValue: 'Promise',
  }),
  findRecord: PropTypes.func.description({
    overview: 'Gets a single record by id from the external source',
    args: [
      {
        name: 'id',
        type: 'string',
        description:
          'The id to use when requesting the record from the external service.',
      },
    ],
    returnValue: 'Promise',
  }),
  updateRecord: PropTypes.func.description({
    overview:
      'Updates a single record by id at the external source. Returns a promise.',
    args: [
      {
        name: 'id',
        type: 'string',
        description:
          'The id of the record to be updated on the external service.',
      },
      {
        name: 'payload',
        type: 'any',
        description: 'The payload to send to the external service.',
      },
    ],
    returnValue: 'Promise',
  }),
  deleteRecord: PropTypes.func.description(
    'Deletes a single record by id at the external source. Returns a promise.'
  ),
  serialize: PropTypes.func.description(
    'Formats the local data to the format needed for the external source.'
  ),
  deserialize: PropTypes.func.description(
    'Formats the data returned from the external source to the format needed by the application.'
  ),
};

export default () => {
  return <DocsPage category="apps" component={ChatWithSchema} />;
};
