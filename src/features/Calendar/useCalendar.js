import { useMemo, useState } from 'react';
import { filter, find, times } from 'lodash';
import moment from 'moment';
import * as config from './config';

export default function useCalendar() {
  const [today] = useState(moment().local());
  const [currentDate, setCurrentDate] = useState(moment().local());
  const [initialDate, setInitialDate] = useState();
  const [events] = useState(
    config?.events?.map((event) => {
      return { ...event, date: moment(event?.date).local() };
    })
  );
  const [views] = useState([
    { key: 'month', title: 'Month' },
    { key: 'week', title: 'Week' },
  ]);
  const [viewKey, setViewKey] = useState('month');
  const [timeLabels] = useState(config?.timeLabels);
  const view = useMemo(() => find(views, ['key', viewKey]), [views, viewKey]);
  const startDate = useMemo(() => currentDate?.clone()?.startOf?.(viewKey), [
    currentDate,
    viewKey,
  ]);
  const endDate = useMemo(() => currentDate?.clone()?.endOf?.(viewKey), [
    currentDate,
    viewKey,
  ]);
  const dates = useMemo(() => {
    const diff = endDate?.diff(startDate, 'days');
    if (diff <= 1) {
      return [startDate, endDate];
    }

    const others = times(diff - 1, (index) =>
      startDate?.clone()?.add(index + 1, 'day')
    );
    return [startDate, ...others, endDate];
  }, [startDate, endDate]);
  const agenda = useMemo(() => {
    return filter(events, (event) =>
      event.date.isBetween(startDate, endDate)
    )?.sort((a, b) => {
      return a?.date?.valueOf() - b?.date?.valueOf();
    });
  }, [startDate, endDate, events]);
  const columnLabels = useMemo(() => {
    if (viewKey === 'month') {
      return [`Sun`, `Mon`, `Tues`, `Wed`, `Thu`, `Fri`, `Sat`];
    }

    if (viewKey === 'week') {
    }
  }, [viewKey]);

  return useMemo(() => {
    function changeView(viewKey) {
      setViewKey(viewKey);
    }
    function goToNext() {
      if (!initialDate) {
        setInitialDate(currentDate?.clone());
      }
      setCurrentDate(currentDate?.clone()?.add(1, viewKey));
    }
    function goToPrevious() {
      if (!initialDate) {
        setInitialDate(currentDate?.clone());
      }
      setCurrentDate(currentDate?.clone()?.subtract(1, viewKey));
    }
    function goToToday() {
      if (initialDate) {
        setCurrentDate(initialDate);
      }
    }

    function searchAgendaByDate(terms) {
      return filter(agenda, (item) => {
        return Object.entries(terms)?.every(([key, value]) => {
          return item?.date?.get(key) === value;
        });
      });
    }

    return {
      // actions
      changeView,
      goToNext,
      goToPrevious,
      goToToday,
      searchAgendaByDate,
      // state
      agenda,
      columnLabels,
      currentDate,
      dates,
      events,
      initialDate,
      startDate,
      endDate,
      timeLabels,
      today,
      view,
      viewKey,
      views,
    };
  }, [
    agenda,
    columnLabels,
    currentDate,
    dates,
    events,
    startDate,
    endDate,
    initialDate,
    today,
    timeLabels,
    view,
    viewKey,
    views,
  ]);
}
