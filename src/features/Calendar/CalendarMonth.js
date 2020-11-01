import React from 'react';
import { Box, Button, Calendar, Tabs, Tab, Text } from 'grommet';
import { Previous, Next } from 'grommet-icons';

import CalendarMonthCell from './CalendarMonthCell';

function CalendarMonthHeader({
  date,
  locale,
  onPrevious,
  onNext,
  onToday,
  views,
  onChangeView,
  viewKey,
}) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const options = { month: 'long', year: 'numeric' };
  const dateFormatter = new Intl.DateTimeFormat(locale, options);

  return (
    <Box className="CalendarMonth">
      <Box
        direction="row"
        justify="between"
        align="center"
        pad={{ horizontal: 'medium', bottom: 'medium' }}
      >
        <Tabs
          activeIndex={views.findIndex((v) => v.key === viewKey)}
          onActive={(viewKey) => onChangeView(views[viewKey]?.key)}
        >
          {views?.map((view) => {
            return <Tab key={view?.key} title={view?.title}></Tab>;
          })}
        </Tabs>

        <Box direction="row" align="center">
          <Text size="xlarge" weight="bold">
            {dateFormatter.format(date)}
          </Text>
        </Box>
        <Box direction="row" align="center" gap="small">
          <Button icon={<Previous />} onClick={onPrevious} plain />
          <Button
            label={<Text size="xlarge">Today</Text>}
            onClick={onToday}
            plain
          />
          <Button icon={<Next />} onClick={onNext} plain />
        </Box>
      </Box>
      <Box direction="row" align="center" border="bottom">
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
              {d}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
export default function CalendarMonth({
  changeView,
  agenda,
  currentDate,
  goToNext,
  goToPrevious,
  goToToday,
  today,
  view,
  viewKey,
  views,
}) {
  return (
    <Box pad={{ vertical: 'medium' }} overflow={{ horizontal: 'hidden' }} fill>
      <Calendar
        header={(props) => (
          <CalendarMonthHeader
            date={props.date}
            onChangeView={changeView}
            onNext={(e) => {
              props.onNextMonth(e);
              goToNext();
            }}
            onPrevious={(e) => {
              props.onPreviousMonth(e);
              goToPrevious();
            }}
            onToday={goToToday}
            view={view}
            viewKey={viewKey}
            views={views}
          />
        )}
        animate={false}
        date={currentDate.toISOString()}
        fill
      >
        {({ date, day }) => {
          return (
            <CalendarMonthCell
              date={date}
              day={day}
              agenda={agenda}
              today={today}
            />
          );
        }}
      </Calendar>
    </Box>
  );
}
