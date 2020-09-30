import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'internal/components/Docs';
import ProjectManager from './ProjectManager';

const ProjectManagerWithSchema = describe(ProjectManager).description(
  'An app for managing team projects.'
);

ProjectManagerWithSchema.displayName = 'ProjectManager';

ProjectManagerWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the ProjectManager.'
  ),
};

export default () => {
  return <DocsPage category="apps" component={ProjectManagerWithSchema} />;
};
