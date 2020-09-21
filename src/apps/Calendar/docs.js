import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'components/Docs';
import Calendar from './Calendar';
const usage = `
<Calendar>
  // ...rest of the app.
<Calendar>
`;
const CalendarWithSchema = describe(Calendar)
  .description('An app for managing dates, events, and reminders.')
  .usage(usage);

CalendarWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Calendar.'
  ),
};

CalendarWithSchema.displayName = 'Calendar';

export default () => {
  return <DocsPage component={CalendarWithSchema} />;
};
