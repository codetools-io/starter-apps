import React, { useContext, useRef, useState } from 'react';
import {
  Box,
  Card,
  CheckBox,
  DropButton,
  Grid,
  Heading,
  Paragraph,
  ResponsiveContext,
  Text,
} from 'grommet';
import { Filter } from 'grommet-icons';
import { Link } from 'react-router-dom';
import Socials from 'internal/components/Socials';
import useHome from './useHome';

function HomeDocLink({
  data,
  description,
  grommet,
  moduleId,
  name,
  path,
  ...props
}) {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Card background="white" pad="medium" gap="small" fill>
        <Box gap="xxsmall">
          <Heading level={4} margin="none">
            {name}
          </Heading>
          {moduleId && (
            <Text size="small" color="dark-6">
              {data?.module?.name}
            </Text>
          )}
        </Box>
        <Paragraph margin="none">{description}</Paragraph>
      </Card>
    </Link>
  );
}

function HomeSection({ components, description, title, ...props }) {
  const size = useContext(ResponsiveContext);

  return (
    <Box gap="medium" pad={{ vertical: 'medium' }} {...props}>
      <Heading level={2} margin="none">
        {title}
      </Heading>
      <Paragraph margin="none" fill>
        {description}
      </Paragraph>
      <Grid
        columns={size !== 'small' ? 'medium' : '100%'}
        rows={['small']}
        gap="large"
      >
        {components?.map((component) => (
          <HomeDocLink key={component?.path} {...component} />
        ))}
      </Grid>
    </Box>
  );
}

function HomeHeader({ ...props }) {
  return (
    <Grid
      columns={['1/4', '1/4', '1/4', '1/4']}
      rows={['auto']}
      areas={[
        ['heading', 'heading', 'heading', 'heading'],
        ['intro', 'intro', 'intro', 'intro'],
        ['socials', 'socials', 'socials', 'socials'],
      ]}
      align="center"
      alignContent="center"
      {...props}
    >
      <Heading gridArea="heading" level={1} margin="none">
        Starter Apps
      </Heading>
      <Paragraph gridArea="intro" margin="none" fill>
        Grommet based UI solutions for various application types.
      </Paragraph>
      <Socials gridArea="socials" margin={{ top: 'small' }} />
    </Grid>
  );
}

function HomeFilters({ sections = [], ...props }) {
  const size = useContext(ResponsiveContext);
  const filterMenuRef = useRef();
  const [showDrop, setShowDrop] = useState(false);

  return (
    <Box
      fill="horizontal"
      style={{ position: size !== 'small' ? 'relative' : 'static' }}
      {...props}
    >
      <Box direction="row" justify="end" gap="medium">
        <DropButton
          label="filter"
          icon={<Filter size="small" />}
          onClick={() => setShowDrop(!showDrop)}
          dropAlign={{ top: 'bottom', right: 'right' }}
          disabled={showDrop}
          dropContent={
            <Box
              margin={{ top: 'small' }}
              gap="large"
              pad="medium"
              round="small"
              background="white"
              elevation="small"
              flex={false}
              width={size === 'small' ? '90vw' : '100%'}
            >
              {sections?.map((section) => {
                return (
                  <Box key={section?.key} gap="small" flex={false}>
                    <Heading margin="none" level={4}>
                      {section?.title}
                    </Heading>
                    <Grid gap="small" columns="small" rows={['auto']}>
                      {Object.keys(section?.options)?.map((option) => {
                        return (
                          <Box key={`${section?.key}-filter-${option}`}>
                            <CheckBox
                              tabIndex="-1"
                              label={<Text size="small">{option}</Text>}
                              checked={section?.options?.[option]}
                              onChange={(event) =>
                                section?.updateOptions({
                                  ...section?.options,
                                  [option]: event?.target?.checked,
                                })
                              }
                            />
                          </Box>
                        );
                      })}
                    </Grid>
                  </Box>
                );
              })}
            </Box>
          }
          dropProps={{
            onClickOutside: () => setShowDrop(!showDrop),
            onEsc: () => setShowDrop(!showDrop),
            overflow: 'visible',
            plain: true,
          }}
          dropTarget={size !== 'small' ? filterMenuRef.current : null}
          open={showDrop}
          primary
        />
      </Box>
      <Box
        ref={filterMenuRef}
        style={{ position: 'absolute', top: '100%' }}
        fill="horizontal"
      ></Box>
    </Box>
  );
}

export default function Home({ docs = {}, ...props }) {
  const {
    categories,
    filteredComponents,
    moduleOptions,
    grommetOptions,
    setGrommetOptions,
    setModuleOptions,
  } = useHome({ ...docs });

  return (
    <Box className="Home" flex={false} fill="horizontal" {...props}>
      <HomeHeader margin={{ top: 'small', bottom: 'large' }} />
      <HomeFilters
        sections={[
          {
            key: 'module-filters',
            title: 'Modules',
            options: moduleOptions,
            updateOptions: setModuleOptions,
          },
          {
            key: 'grommet-filters',
            title: 'Components',
            options: grommetOptions,
            updateOptions: setGrommetOptions,
          },
        ]}
      />

      <Box gap="large">
        {categories?.map((category) => {
          return (
            <HomeSection
              key={category.data.path}
              title={category.data.name}
              description={category.data.description}
              components={filteredComponents.filter(
                (component) => component.data.categoryId === category.data.id
              )}
            />
          );
        })}
      </Box>
    </Box>
  );
}
