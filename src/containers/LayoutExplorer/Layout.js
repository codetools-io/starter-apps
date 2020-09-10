import React from 'react';
import { Box, Grid, Heading, Markdown, Paragraph, Text } from 'grommet';
import Link from 'components/Link';
import useLayout from './useLayout';

const parentProps = {
  border: {
    size: 'medium',
    style: 'dashed',
    color: 'brand',
  },
};
const childProps = {
  border: {
    color: 'brand-alt',
    size: 'medium',
    style: 'dashed',
  },
  pad: 'xsmall',
};

const LAYOUT_PADDING = { horizontal: 'small', vertical: 'medium' };
export default function Layout() {
  const { children, code, layout, layouts } = useLayout({
    childComponent: Box,
    childProps,
  });

  return (
    <Grid
      className="Layout"
      columns={['1/2', '1/2']}
      rows={['auto']}
      areas={[
        ['LayoutToolbar', '.'],
        ['LayoutOverview', 'LayoutKey'],
        ['LayoutPreview', 'LayoutPreview'],
        ['LayoutCode', 'LayoutCode'],
      ]}
    >
      <Box
        pad={LAYOUT_PADDING}
        gridArea="LayoutToolbar"
        direction="row"
        gap="medium"
      >
        {layouts?.map((layout) => {
          const Icon = layout?.icon;

          return (
            <Link key={layout?.id} to={`${layout?.id}`}>
              <Icon />
            </Link>
          );
        })}
      </Box>
      <Box pad={LAYOUT_PADDING} gridArea="LayoutOverview">
        <Heading level={4} margin="none">
          {layout?.title}
        </Heading>
        <Paragraph margin="none" fill>
          {layout?.description}
        </Paragraph>
      </Box>
      <Box
        pad={LAYOUT_PADDING}
        gridArea="LayoutKey"
        direction="row"
        gap="medium"
        justify="end"
      >
        <Box direction="row" align="center" gap="small">
          <Box {...parentProps} pad="small"></Box>
          <Text>Layout</Text>
        </Box>
        {children.map((child, index) => {
          return (
            <Box
              key={`key-${layout?.id}-${index}`}
              direction="row"
              align="center"
              gap="small"
            >
              <Box {...child.props} children={null} pad="small" />
              <Text>{child.props.children}</Text>
            </Box>
          );
        })}
      </Box>
      <Box pad={LAYOUT_PADDING} gridArea="LayoutPreview" gap="small">
        <Box {...parentProps} flex={false}>
          {layout?.componentType === 'Grid' ? (
            <Grid {...layout.presets}>{children}</Grid>
          ) : (
            <Box {...layout.presets}>{children}</Box>
          )}
        </Box>
      </Box>
      <Box pad={LAYOUT_PADDING} gridArea="LayoutCode" gap="small">
        <Heading level={4} margin="none">
          Code
        </Heading>
        <Markdown>{code}</Markdown>
      </Box>
    </Grid>
  );
}
