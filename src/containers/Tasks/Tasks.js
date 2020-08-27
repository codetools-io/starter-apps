import React from 'react';
import { Box, Card, Heading, Paragraph, Text } from 'grommet';
import { Next } from 'grommet-icons';
import useTasks from './useTasks';

function TaskShort({ id, title, description, status, project, context }) {
  const StatusIcon = status?.icon;
  return (
    <Card background="white">
      <Box pad="medium" gap="small">
        <Box direction="row" align="center" gap="small">
          <StatusIcon size="16px" />
          <Text weight="bold">{title}</Text>
        </Box>

        <Box direction="row" gap="small" align="center">
          <Text color="light-6" size="small">
            {context.name}
          </Text>
          <Next size="12px" color="light-6" />
          <Text color="light-6" size="small">
            {project.name}
          </Text>
        </Box>
      </Box>
    </Card>
  );
}
export default function Tasks() {
  const { tasks, statusesById, contextsById, projectsById } = useTasks();
  return (
    <Box className="Tasks" pad="medium" gap="medium" fill>
      {tasks.map((task) => {
        return (
          <TaskShort
            key={task?.id}
            {...task}
            status={statusesById[task?.status]}
            project={projectsById[task?.project]}
            context={contextsById[task?.context]}
          />
        );
      })}
    </Box>
  );
}
