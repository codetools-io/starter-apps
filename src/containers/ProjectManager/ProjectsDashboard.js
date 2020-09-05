import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Card,
  DropButton,
  Grid,
  Heading,
  Meter,
  RoutedAnchor,
  Select,
  Text,
  TextInput,
} from 'grommet';
import { More, Search } from 'grommet-icons';
import useProjectManager from './useProjectManager';

function ProjectShort({ id, name, type, category, progress, ...props }) {
  const location = useLocation();
  return (
    <Box {...props}>
      <Grid
        pad="medium"
        gap="medium"
        columns={['auto', 'flex', 'small', 'small', 'small', 'xxsmall']}
        align="center"
      >
        <Box>
          <Avatar background="brand-alt-1" height="12px" width="24px">
            {name[0]}
          </Avatar>
        </Box>
        <Box>
          <RoutedAnchor path={`${location.pathname}/${id}`}>
            <Text weight="bold">{name}</Text>
          </RoutedAnchor>
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
export default function ProjectDashboard() {
  const { projects, categoriesById, projectTypes } = useProjectManager();
  const currentType = 'All';
  const onCreate = () => {};
  return (
    <Box className="ProjectManager" pad="medium" fill>
      <Card background="white">
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
      </Card>
    </Box>
  );
}
