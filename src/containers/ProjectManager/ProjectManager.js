import React from 'react';
import {
  Avatar,
  Box,
  Button,
  CheckBox,
  DropButton,
  Grid,
  Heading,
  Image,
  Meter,
  Select,
  Text,
  TextInput,
} from 'grommet';
import { More, Star, Search } from 'grommet-icons';

import useProjectManager from './useProjectManager';

function ProjectBoard() {}
function ProjectLane() {}
function ProjectItem() {}
function ProjectShort({ id, name, type, category, progress, ...props }) {
  return (
    <Box {...props}>
      <Grid
        pad="medium"
        gap="medium"
        columns={['auto', 'flex', 'medium', 'small', 'small', 'xxsmall']}
        align="center"
      >
        <Box>
          <Avatar background="brand-alt-1" height="12px" width="24px">
            {name[0]}
          </Avatar>
        </Box>
        <Box>
          <Text weight="bold">{name}</Text>
        </Box>
        <Box>
          <Meter type="bar" values={[{ value: progress }]} />
        </Box>
        <Box>{category?.name}</Box>
        <Box>{type}</Box>
        <Box>
          <DropButton
            icon={<More />}
            dropAlign={{ top: 'bottom', right: 'right' }}
            dropContent={<Box pad="large" background="light-2" />}
          />
        </Box>
      </Grid>
    </Box>
  );
}
function ProjectsDashboard() {
  const {
    projects,
    categories,
    categoriesById,
    projectTypes,
  } = useProjectManager();
  const currentType = 'All';
  const onCreate = () => {};
  return (
    <Box>
      <Box direction="row" justify="between" align="center" pad="medium">
        <Heading level={4} margin="none">
          Projects
        </Heading>
        <Button label="Create" onClick={onCreate} primary />
      </Box>
      <Box direction="row" justify="between" pad="medium">
        <Box flex>
          <TextInput placeholder="Search…" icon={<Search />} plain />
        </Box>
        <Box direction="row">
          <Select options={['All', ...projectTypes]} value={currentType} />
        </Box>
      </Box>
      <Box>
        {projects.map((project, index) => {
          return (
            <ProjectShort
              key={project.id}
              {...project}
              category={categoriesById[project?.category]}
              border={index ? { side: 'top' } : null}
            />
          );
        })}
      </Box>
    </Box>
  );
}
export default function ProjectManager() {
  return (
    <Box className="ProjectManager" pad="medium" fill>
      <ProjectsDashboard />
    </Box>
  );
}
