import { useMemo, useState } from 'react';
import groupBy from './utils/groupBy';
import * as config from './config';
export default function useCalendar() {
  const [events] = useState(config?.events);
  const [currentDate] = useState(new Date());
  const eventsByDate = useMemo(() => {
    return groupBy(
      events?.map((event) => {
        const eventDate = new Date(event?.date);
        return {
          ...event,
          date: event,
          _dateKey: eventDate?.toDateString(),
        };
      }),
      '_dateKey'
    );
  }, [events]);

  return useMemo(() => {
    return { currentDate, events, eventsByDate };
  }, [currentDate, events, eventsByDate]);
}
