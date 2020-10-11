import React from 'react';
import { Box, Text } from 'grommet';

import CalendarEvent from './CalendarEvent';
export default function CalendarAgenda({
  start,
  end,
  dates,
  eventsByHour,
  events,
}) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const timeFormatter = new Intl.DateTimeFormat('en', {
    timeStyle: 'short',
  });
  return (
    <Box className="CalendarAgenda" pad={{ top: 'small' }} fill>
      <Box direction="row" align="center" flex={false}>
        <Box width="xsmall"></Box>
        <Box direction="row" align="center" fill="horizontal">
          {days?.map((d, index) => {
            return (
              <Box
                key={d}
                width={`${(1 / 7) * 100}%`}
                direction="row"
                justify="center"
                align="center"
                pad={{ top: 'medium', bottom: 'medium' }}
              >
                <Text wordBreak="keep-all" weight="bold">
                  {d} {dates[index]?.getDate()}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      {eventsByHour?.map((hour, hourIndex) => {
        const timestamp = new Date();
        timestamp.setHours(hourIndex);
        timestamp.setMinutes(0);

        return (
          <Box
            key={`hour-${hourIndex}`}
            className="CalendarAgendaHour"
            direction="row"
            align="center"
            flex={false}
          >
            <Box width="xsmall" align="center" justify="center" flex={false}>
              {timeFormatter.format(timestamp)}
            </Box>
            <Box direction="row" align="center" fill="horizontal">
              {hour?.map((day, dayIndex) => {
                return (
                  <Box
                    key={`hour-${hourIndex}-${dayIndex}`}
                    direction="row"
                    justify="center"
                    align="center"
                    fill="horizontal"
                  >
                    {day?.map((events, eventsIndex) => {
                      return (
                        <Box
                          key={`hour-${hourIndex}-${dayIndex}-${eventsIndex}`}
                          className="CalendarAgendaEvents"
                          width={`${(1 / 7) * 100}%`}
                          height={{ min: 'xsmall' }}
                          pad="xsmall"
                          border
                        >
                          {events?.map((event, eventIndex) => {
                            return (
                              <Box
                                key={`hour-${hourIndex}-${dayIndex}-${eventsIndex}-${eventIndex}`}
                              >
                                <CalendarEvent event={event} />
                              </Box>
                            );
                          })}
                        </Box>
                      );
                    })}
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
