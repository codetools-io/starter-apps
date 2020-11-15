import React, { useContext } from 'react';
import {
  Box,
  Card,
  Grid,
  Heading,
  Paragraph,
  ResponsiveContext,
  Text,
} from 'grommet';
import { Bookmark } from 'grommet-icons';
import { Link } from 'react-router-dom';
import PageHeader from 'internal/components/PageHeader';

import useBookmarks from './useBookmarks';

function BookmarksDocLink({
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

function BookmarkButtonPreview() {
  return (
    <Box direction="row" align="center" gap="xsmall">
      <Bookmark size="small" color="link" />
      <Text size="small" color="link">
        Add Bookmark
      </Text>
    </Box>
  );
}

function BookmarksEmptyResult() {
  return (
    <Box align="center">
      <Heading level={2}>No bookmarks found…</Heading>
      <Box direction="row" gap="small">
        <Text>
          You can add bookmarks by navigating to the component and clicking{' '}
        </Text>
        <BookmarkButtonPreview />
        <Text>.</Text>
      </Box>
    </Box>
  );
}

function BookmarkResults({ bookmarks }) {
  const size = useContext(ResponsiveContext);
  return (
    <Grid
      columns={size !== 'small' ? 'medium' : '100%'}
      rows={['small']}
      gap="large"
      fill
    >
      {bookmarks?.map((component) => (
        <BookmarksDocLink key={component?.path} {...component} />
      ))}
    </Grid>
  );
}
export default function Bookmarks({ docs = {}, bookmarks = [], ...props }) {
  const { filteredComponents } = useBookmarks({
    ...docs,
    bookmarks,
  });

  return (
    <Box className="Bookmarks" flex={false} fill="horizontal" {...props}>
      {filteredComponents?.length ? (
        <PageHeader
          title="Bookmarks"
          margin={{ top: 'small', bottom: 'large' }}
        />
      ) : null}
      <Box>
        {filteredComponents?.length ? (
          <BookmarkResults bookmarks={filteredComponents} />
        ) : (
          <BookmarksEmptyResult />
        )}
      </Box>
    </Box>
  );
}
