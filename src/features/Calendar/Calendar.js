import React from 'react';
import {
  Box,
  Button,
  Calendar as GrommetCalendar,
  DropButton,
  Heading,
  Markdown,
  Paragraph,
  Text,
} from 'grommet';
import { format as timeAgo } from 'timeago.js';
import { Previous, Next } from 'grommet-icons';
import useCalendar from './useCalendar';

function CalendarHeader({
  date,
  locale,
  onPreviousMonth,
  onNextMonth,
  previousInBound,
  nextInBound,
}) {
  const options = { month: 'long', year: 'numeric' };
  const dateFormatter = new Intl.DateTimeFormat(locale, options);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <Box>
      <Box
        direction="row"
        justify="between"
        align="center"
        pad={{ horizontal: 'medium', bottom: 'medium' }}
      >
        {/* <Box direction="row" align="center" gap="small">
          <Button label="Month" primary />
          <Button label="Week" secondary disabled />
          <Button label="Day" secondary disabled />
        </Box> */}
        <Box direction="row" align="center">
          <Text size="xlarge" weight="bold">
            {dateFormatter.format(date)}
          </Text>
        </Box>
        <Box direction="row" align="center" gap="small">
          <Button icon={<Previous />} onClick={onPreviousMonth} plain />
          <Button label={<Text size="xlarge">Today</Text>} plain />
          <Button icon={<Next />} onClick={onNextMonth} plain />
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

function CalendarDay({
  date,
  day,
  isInRange,
  isSelected,
  events,
  isToday,
  ...props
}) {
  const hasRightBorder = date.getDay() < 7;
  const border = [{ side: 'bottom' }, hasRightBorder && { side: 'right' }];

  return (
    <Box pad="small" border={border} gap="xsmall" fill {...props}>
      <Box direction="row" justify="end">
        <Text weight={isToday ? 'bold' : 'normal'}>{day}</Text>
      </Box>
      <Box>
        {events?.map((event) => {
          return (
            <DropButton
              key={event?.id}
              label={
                <Box
                  background="brand"
                  pad={{ vertical: 'xsmall', horizontal: 'small' }}
                  round="xsmall"
                >
                  <Text truncate>{event?.name}</Text>
                </Box>
              }
              dropContent={<CalendarEvent {...event} />}
              plain
            />
          );
        })}
      </Box>
    </Box>
  );
}

function CalendarEvent({ id, name, date, description }) {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'long',
  });

  return (
    <Box pad="large" width={{ max: 'large' }}>
      <Paragraph margin="none">
        <Text>{timeAgo(date)}</Text>
      </Paragraph>
      <Heading level={4} margin="none">
        {name}
      </Heading>
      <Text size="xsmall">{dateFormatter.format(date)}</Text>

      <Box margin={{ top: 'medium' }}>
        <Markdown>{description}</Markdown>
      </Box>
    </Box>
  );
}

export default function Calendar({ children, ...props }) {
  const { currentDate, eventsByDate } = useCalendar();

  return (
    <Box
      pad={{ vertical: 'medium' }}
      overflow={{ horizontal: 'hidden' }}
      fill
      {...props}
    >
      <GrommetCalendar
        header={(props) => <CalendarHeader {...props} />}
        animate={false}
        fill
      >
        {(props) => {
          const eventsKey = props?.date?.toDateString();
          const events = eventsByDate[eventsKey] || [];
          const isToday =
            props?.date?.toDateString() === currentDate?.toDateString();
          return <CalendarDay events={events} isToday={isToday} {...props} />;
        }}
      </GrommetCalendar>
    </Box>
  );
}
