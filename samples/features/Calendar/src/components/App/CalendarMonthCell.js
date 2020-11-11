import React from 'react';
import { Box, Text } from 'grommet';

import CalendarEvent from './CalendarEvent';

export default function CalendarMonthCell({
  date,
  day,
  isInRange,
  isSelected,
  agenda,
  today,
}) {
  const hasRightBorder = date?.getDay() < 7;
  const border = [{ side: 'bottom' }, hasRightBorder && { side: 'right' }];
  const weight = today.isSame(date, 'day') ? 'bold' : 'normal';
  return (
    <Box
      className="CalendarMonthCell"
      pad="small"
      border={border}
      gap="xsmall"
      fill
    >
      <Box direction="row" justify="end">
        <Text weight={weight}>{day}</Text>
      </Box>
      <Box gap="xsmall">
        {agenda?.map((event) => {
          if (!event.date.isSame(date, 'day')) {
            return null;
          }
          return <CalendarEvent key={event?.id} event={event} />;
        })}
      </Box>
    </Box>
  );
}
