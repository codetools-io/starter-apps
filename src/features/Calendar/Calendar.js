import React from 'react';
import { Box } from 'grommet';

import CalendarMonth from './CalendarMonth';
import CalendarWeek from './CalendarWeek';
import useCalendar from './useCalendar';

export default function Calendar({ children, ...props }) {
  const calendar = useCalendar();

  return (
    <Box
      className="Calendar"
      pad={{ vertical: 'medium' }}
      overflow={{ horizontal: 'hidden' }}
      fill
      {...props}
    >
      {calendar?.viewKey === 'month' && <CalendarMonth {...calendar} />}
      {calendar?.viewKey === 'week' && <CalendarWeek {...calendar} />}
    </Box>
  );
}
