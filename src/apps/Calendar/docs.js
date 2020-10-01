import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'internal/components/Docs';
import Calendar from './Calendar';

const CalendarWithSchema = describe(Calendar).description(
  'A feature for managing dates, events, and reminders.'
);

CalendarWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Calendar.'
  ),
};

CalendarWithSchema.displayName = 'Calendar';

export default () => {
  return <DocsPage category="apps" component={CalendarWithSchema} />;
};
