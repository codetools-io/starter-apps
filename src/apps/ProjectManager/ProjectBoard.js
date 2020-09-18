import React, { useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  DropButton,
  Heading,
  Paragraph,
  Text,
} from 'grommet';
import {
  Attachment,
  Chat,
  Clock,
  FormAdd,
  More,
  Trash,
  UserAdd,
} from 'grommet-icons';
import moment from 'moment';
import useProjectManager from './useProjectManager';
function ProjectBoardStatusColumn({ id, name, tasks }) {
  return (
    <Card background="light-3" elevation="none" pad="medium" gap="medium" fill>
      <Box direction="row" justify="between" align="center" gap="medium">
        <Heading level={4} margin="none" flex>
          {name}
        </Heading>
        <Box direction="row" gap="small">
          <Button icon={<FormAdd />} plain />
          <DropButton icon={<More />} plain />
        </Box>
      </Box>
      <Box gap="medium">
        {tasks?.map((task) => {
          return <ProjectBoardTask key={task?.id} {...task} />;
        })}
      </Box>
    </Card>
  );
}

function ProjectBoardTask({
  attachments,
  comments,
  dueDate,
  labels,
  owner,
  title,
}) {
  return (
    <Card background="white" elevation="none">
      <CardHeader pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Box direction="row" justify="between" align="center" gap="small">
          <Clock size="small" />
          <Text>{moment(dueDate).format('MMM Do')}</Text>
        </Box>

        <Button label={<Trash size="small" />} plain />
      </CardHeader>
      <CardBody pad={{ horizontal: 'medium', bottom: 'small' }} gap="small">
        <Heading level={5} margin="none">
          {title}
        </Heading>
        <Box direction="row" gap="xsmall">
          {labels.map((label) => (
            <Text key={label?.id} size="xsmall">
              {label?.name}
            </Text>
          ))}
        </Box>
      </CardBody>
      <CardFooter
        pad={{ horizontal: 'medium', vertical: 'small' }}
        background="light-1"
      >
        <Box direction="row" align="baseline" justify="start" gap="small">
          <Text size="small">
            <Attachment size="small" /> {attachments?.length}
          </Text>
          <Text size="small">
            <Chat size="small" /> {comments?.length}
          </Text>
        </Box>
        <Box>
          {owner ? (
            <Avatar src={owner?.profile} size="small" />
          ) : (
            <Button icon={<UserAdd size="small" />} plain />
          )}
        </Box>
      </CardFooter>
    </Card>
  );
}

export default function ProjectBoard({
  match: {
    params: { projectId },
  },
}) {
  const { project, projectTasksByStatusId, openProject } = useProjectManager();

  useEffect(() => {
    openProject(projectId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  if (!project) {
    return <Paragraph>Loading…</Paragraph>;
  }

  return (
    <Box
      className="ProjectBoard"
      direction="row"
      justify="stretch"
      pad="medium"
      gap="large"
      fill
    >
      {project?.statuses?.map((status) => {
        return (
          <ProjectBoardStatusColumn
            key={status?.id}
            {...status}
            tasks={projectTasksByStatusId[status?.id]}
          />
        );
      })}
    </Box>
  );
}
