import React, { useContext, useMemo, useRef, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CheckBox,
  DropButton,
  Grid,
  Heading,
  Paragraph,
  ResponsiveContext,
  Text,
} from 'grommet';
import { Filter, FormClose } from 'grommet-icons';
import { Link } from 'react-router-dom';
import PageHeader from 'internal/components/PageHeader';

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

function HomeFilters({ sections = [], onClear = () => {}, ...props }) {
  const size = useContext(ResponsiveContext);
  const filterMenuRef = useRef();
  const [showDrop, setShowDrop] = useState(false);
  const appliedFilters = useMemo(() => {
    return sections
      ?.map((section) => {
        const title = section?.title;
        const filters = Object.entries(section?.options)
          ?.filter(([key, val]) => val)
          ?.map(([key]) => key);
        return { title, filters };
      })
      ?.filter((section) => section?.filters?.length);
  }, [sections]);
  const showAppliedFilters = useMemo(() => {
    if (!showDrop && appliedFilters?.length) {
      return true;
    }

    return false;
  }, [appliedFilters, showDrop]);

  return (
    <Box
      fill="horizontal"
      style={{ position: size !== 'small' ? 'relative' : 'static' }}
      {...props}
    >
      <Box direction="row" justify="between" align="baseline" gap="medium">
        <Box direction="row" gap="small">
          {showAppliedFilters && <Text weight="bold">Filtered By: </Text>}
          {showAppliedFilters &&
            appliedFilters?.map((appliedFilters) => {
              return (
                <Box
                  key={`applied-filter-${appliedFilters?.title}`}
                  direction="row"
                  align="baseline"
                  gap="small"
                >
                  {appliedFilters?.filters?.map((filter) => {
                    return (
                      <Text
                        key={`applied-filter-${appliedFilters?.title}-${filter}`}
                      >
                        {filter}
                      </Text>
                    );
                  })}
                </Box>
              );
            })}
          {showAppliedFilters && (
            <Button label="Clear" onClick={onClear} color="control" plain />
          )}
        </Box>
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
              <Box direction="row">
                <Button label="Clear" onClick={onClear} color="control" plain />
              </Box>
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
    clearOptions,
    filteredComponents,
    moduleOptions,
    grommetOptions,
    setGrommetOptions,
    setModuleOptions,
  } = useHome({ ...docs });

  return (
    <Box className="Home" flex={false} fill="horizontal" {...props}>
      <PageHeader
        title="Starter Apps"
        description="Grommet based UI solutions for various application types."
        margin={{ top: 'small', bottom: 'large' }}
      />
      <HomeFilters
        onClear={clearOptions}
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
