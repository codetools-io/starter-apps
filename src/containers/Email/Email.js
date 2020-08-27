import React from 'react';
import moment from 'moment';
import { Avatar, Box, Button, Card, Heading, Text, TextInput } from 'grommet';
import { StatusGoodSmall } from 'grommet-icons';
import ThreadLayout from 'components/ThreadLayout';
import ColumnLayout from 'components/ColumnLayout';

import useEmail from './useEmail';

function EmailShort({
  id,
  subject,
  body,
  sender,
  recipients,
  attachments,
  folder,
  labels,
  sent,
  ...props
}) {
  return (
    <Box direction="row" pad="medium" gap="small" {...props}>
      <Avatar src={sender?.profile} />
      <Box flex>
        <Box>
          <Box direction="row" justify="between" fill="horizontal">
            <Text color="dark-2" size="xsmall">
              {sender?.firstName} {sender?.lastName}
            </Text>

            <Text color="dark-6" size="xsmall">
              {moment(sent).format('ll')}
            </Text>
          </Box>
          <Text weight="bold" truncate>
            {subject}
          </Text>
        </Box>
        <Box direction="row" gap="xxsmall" margin={{ top: 'xsmall' }}>
          {labels.map((label) => (
            <Box
              key={`${label.id}`}
              background={label.color}
              round
              pad="xsmall"
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function () {
  const {
    emails,
    inbox,
    sent,
    drafts,
    trash,
    important,
    spam,
    starred,
    labels,
    activeEmailId,
    activeEmail,
    emailsByFolder,
    activeFolder,
    updateByFolder,
    labelsById,
  } = useEmail();

  return (
    <Box pad="medium" fill>
      <Card background="white">
        <ThreadLayout>
          <ColumnLayout gridArea="menu">
            <Box
              gridArea="header"
              pad="medium"
              border={[{ side: 'bottom' }, { side: 'right' }]}
              height="xsmall"
              justify="center"
            >
              <Button label="Compose" primary />
            </Box>
            <Box gridArea="main" border="right">
              <Box pad="medium" gap="small">
                {Object.entries(emailsByFolder).map(([folder, emails]) => (
                  <Box key={folder} direction="row" justify="between">
                    <Text>{folder}</Text>
                    <Text>{emails?.length}</Text>
                  </Box>
                ))}
              </Box>
              <Box pad="medium" gap="small">
                {labels.map((label) => (
                  <Box key={label?.id} direction="row" justify="between">
                    <StatusGoodSmall color={label?.color} />
                    <Text>{label?.name}</Text>
                  </Box>
                ))}
              </Box>
            </Box>
          </ColumnLayout>
          <ColumnLayout gridArea="threads">
            <Box
              gridArea="header"
              direction="row"
              pad="medium"
              border={[{ side: 'bottom' }, { side: 'right' }]}
              height="xsmall"
              align="center"
            >
              <Heading level="4" margin="none">
                {activeFolder}
              </Heading>
            </Box>
            <Box gridArea="main" gap="small" border="right">
              <Box
                pad={{ vertical: 'xsmall', horizontal: 'small' }}
                border="bottom"
              >
                <TextInput placeholder="Search Email" plain />
              </Box>
              <Box>
                {emailsByFolder[activeFolder].map((email, index) => (
                  <EmailShort
                    key={email.id}
                    {...email}
                    labels={email.labels.map((label) => labelsById[label])}
                    border={index ? 'top' : null}
                  />
                ))}
              </Box>
            </Box>
          </ColumnLayout>
          <ColumnLayout gridArea="thread">
            <Box
              gridArea="header"
              direction="row"
              justify="between"
              height="xsmall"
              pad="medium"
              border="bottom"
            >
              <Box>actions</Box>
              <Box>toolbar</Box>
            </Box>
            <Box gridArea="main" pad="medium">
              sidebar main
            </Box>
          </ColumnLayout>
        </ThreadLayout>
      </Card>
    </Box>
  );
}
