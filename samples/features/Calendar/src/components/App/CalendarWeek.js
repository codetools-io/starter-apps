import React from 'react';
import { Box, Button, Tabs, Tab, Text } from 'grommet';
import { Previous, Next } from 'grommet-icons';

import CalendarEvent from './CalendarEvent';

function CalendarWeekHeader({
  startDate,
  endDate,
  onPrevious,
  onNext,
  onToday,
  views,
  onChangeView,
  viewKey,
}) {
  return (
    <Box
      className="CalendarWeek"
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

      <Box direction="row" align="center" gap="small">
        <Text size="xlarge" weight="bold">
          {startDate.format('MMM. D, YYYY')}
        </Text>
        <Text size="xlarge">-</Text>
        <Text size="xlarge" weight="bold">
          {endDate.format('MMM. D, YYYY')}
        </Text>
      </Box>
      <Box direction="row" align="center" gap="small">
        <Button icon={<Previous />} onClick={onPrevious} plain />
        <Button
          label={
            <Text size="xlarge" onClick={onToday}>
              Today
            </Text>
          }
          plain
        />
        <Button icon={<Next />} onClick={onNext} plain />
      </Box>
    </Box>
  );
}

function CalendarWeekBody({
  startDate,
  endDate,
  dates,
  searchAgendaByDate,
  timeLabels,
}) {
  const days = new Array(7)?.fill(null)?.map((val, index) => index);
  const hours = new Array(24)?.fill(null)?.map((val, index) => index);

  return (
    <Box pad="medium">
      <Box direction="row" align="center" flex={false}>
        <Box
          direction="row"
          justify="center"
          align="center"
          pad="small"
          width="small"
        ></Box>
        <Box direction="row" align="center" justify="start" width="100%">
          {dates?.map((date, dateIndex) => {
            return (
              <Box
                key={`week-column-${dateIndex}`}
                direction="row"
                justify="center"
                pad="xsmall"
                width={`14.3%`}
                height={{ min: 'xxsmall' }}
                border={dateIndex ? 'left' : null}
                flex={false}
              >
                <Text>{date.format('ddd')}</Text>
                <Text>-</Text>
                <Text>{date.format('D')}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      {hours?.map((hour, hourIndex) => {
        const row = days?.map((day) => {
          const result = searchAgendaByDate({ hour, weekday: day });

          return result;
        });

        return (
          <Box key={`hour-${hour}`} direction="row" align="center" flex={false}>
            <Box
              direction="row"
              justify="center"
              align="center"
              pad="small"
              width="small"
              height="100%"
              border={[
                {
                  side: 'bottom',
                },
              ]}
            >
              <Text size="small" wordBreak="keep-all">
                {timeLabels[hourIndex]}
              </Text>
            </Box>
            <Box direction="row" align="center" border="bottom" width="100%">
              {row?.map((rowItems, rowIndex) => {
                if (!rowItems?.length) {
                  return (
                    <Box
                      key={`hour-${hour}-${rowIndex}`}
                      pad="xsmall"
                      width={`14.3%`}
                      height={{ min: 'xxsmall' }}
                      border={rowIndex ? 'left' : null}
                      flex={false}
                    ></Box>
                  );
                }
                return (
                  <Box
                    key={`hour-${hour}-${rowIndex}`}
                    pad="xsmall"
                    width={`14.3%`}
                    height={{ min: 'xxsmall' }}
                    border={rowIndex ? 'left' : null}
                    flex={false}
                  >
                    {rowItems?.map((rowItem) => {
                      return (
                        <Box key={rowItem.id} flex={false}>
                          <CalendarEvent event={rowItem} />
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
export default function CalendarWeek({
  agenda,
  startDate,
  endDate,
  changeView,
  dates,
  goToNext,
  goToPrevious,
  goToToday,
  searchAgendaByDate,
  timeLabels,
  view,
  viewKey,
  views,
}) {
  return (
    <Box pad={{ vertical: 'medium' }} overflow={{ horizontal: 'hidden' }} fill>
      <CalendarWeekHeader
        onChangeView={changeView}
        view={view}
        viewKey={viewKey}
        views={views}
        onNext={goToNext}
        onPrevious={goToPrevious}
        onToday={goToToday}
        startDate={startDate}
        endDate={endDate}
      />
      <CalendarWeekBody
        agenda={agenda}
        startDate={startDate}
        endDate={endDate}
        searchAgendaByDate={searchAgendaByDate}
        timeLabels={timeLabels}
        dates={dates}
      />
    </Box>
  );
}
