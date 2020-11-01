import React from 'react';
import { Box, DropButton, Heading, Markdown, Paragraph, Text } from 'grommet';

export default function CalendarEvent({ event }) {
  return (
    <DropButton
      className="CalendarEvent"
      label={
        <Box
          background="brand"
          pad={{ vertical: 'xsmall', horizontal: 'small' }}
          round="xsmall"
        >
          <Text truncate>{event?.name}</Text>
        </Box>
      }
      dropContent={
        <Box pad="large" width={{ max: 'large' }}>
          <Paragraph margin="none">
            <Text>{event?.date?.fromNow?.()}</Text>
          </Paragraph>
          <Heading level={4} margin="none">
            {event?.name}
          </Heading>
          <Text size="xsmall">
            {event?.date?.format?.('dddd, MMMM Do YYYY @ h:mm a')}
          </Text>

          <Box margin={{ top: 'medium' }}>
            <Markdown>{event?.description}</Markdown>
          </Box>
        </Box>
      }
      plain
    />
  );
}
