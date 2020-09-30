import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'internal/components/Docs';
import Notes from './Notes';

const NotesWithSchema = describe(Notes).description('An app for taking notes.');

NotesWithSchema.displayName = 'Notes';

NotesWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Notes.'
  ),
};

export default () => {
  return <DocsPage category="apps" component={NotesWithSchema} />;
};
