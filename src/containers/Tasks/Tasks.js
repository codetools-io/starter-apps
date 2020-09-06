import React from 'react';
import {
  Box,
  Button,
  Card,
  CheckBox,
  DropButton,
  Paragraph,
  Select,
  Text,
  TextInput,
} from 'grommet';
import { More, MoreVertical, Search } from 'grommet-icons';
import useTasks from './useTasks';
import ButtonGroup from 'components/ButtonGroup';

function TaskShort({ id, title, description, status, category }) {
  const StatusIcon = status?.icon;
  return (
    <Card background="white" elevation="none">
      <Box
        direction="row"
        align="center"
        pad={{ vertical: 'medium', horizontal: 'medium' }}
        gap="medium"
      >
        <Box>
          <CheckBox />
        </Box>
        <Box gap="xxsmall" flex>
          <Text color="light-6" size="xsmall">
            {category.name}
          </Text>
          <Box direction="row" align="center" justify="between" gap="small">
            <Paragraph margin="none" fill>
              {title}
            </Paragraph>
          </Box>
        </Box>
        <StatusIcon color={status?.color} />
      </Box>
    </Card>
  );
}

function TaskResourceList({ children }) {
  return (
    <Box gap="medium">
      <Box>
        <TextInput icon={<Search size="small" />} />
      </Box>
      <Box direction="row" justify="between" align="center">
        <CheckBox />
        <Box direction="row" justify="between">
          <ButtonGroup
            buttons={[
              { key: 'start-button', label: 'Start' },
              { key: 'stop-button', label: 'Stop' },
              { key: 'complete-button', label: 'Complete' },
            ]}
          >
            <Button label="Start" />
            <Button label="Stop" />
            <Button label="Complete" />
          </ButtonGroup>
        </Box>
      </Box>
      <Box gap="medium">{children}</Box>
    </Box>
  );
}

export default function Tasks() {
  const { tasks, statusesById, categoriesById } = useTasks();
  return (
    <Box className="Tasks" pad="medium" gap="medium" fill>
      <TaskResourceList>
        {tasks.map((task) => {
          return (
            <TaskShort
              key={task?.id}
              {...task}
              status={statusesById[task?.status]}
              category={categoriesById[task?.category]}
            />
          );
        })}
      </TaskResourceList>
    </Box>
  );
}
