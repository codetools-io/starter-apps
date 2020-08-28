import { useMemo, useState } from 'react';
export default function useCalendar() {
  const events = useState([
    { id: 'event-1', name: 'Some event', date: '2020-08-28T13:40:33.729Z' },
  ]);

  const calendar = useMemo(() => {
    return { events };
  }, [events]);

  return calendar;
}
