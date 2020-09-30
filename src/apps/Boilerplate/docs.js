import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'internal/components/Docs';
import Boilerplate from './Boilerplate';

const BoilerplateWithSchema = describe(Boilerplate).description(
  'An app for showing live social media Boilerplates.'
);

BoilerplateWithSchema.displayName = 'Boilerplate';

BoilerplateWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Boilerplate.'
  ),
};

export default () => {
  return <DocsPage category="apps" component={BoilerplateWithSchema} />;
};
