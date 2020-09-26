import React, { useContext } from 'react';
import {
  Box,
  Card,
  CardBody,
  Grid,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext,
  Stack,
  Tabs,
  Tab,
  Text,
} from 'grommet';

import useProfile from './useProfile';

function ProfileGrid({
  children,
  columnCount = 'fit',
  columnSize = 'medium',
  gridProps = {},
  ...props
}) {
  const size = useContext(ResponsiveContext);

  return (
    <Box {...props}>
      <Grid
        columns={{ count: columnCount, size: columnSize }}
        rows="auto"
        gap={size}
        fill
        {...gridProps}
      >
        {children}
      </Grid>
    </Box>
  );
}

function ProfileTab({ count, title, children }) {
  return (
    <Tab
      title={
        <Box
          direction="row"
          gap="xsmall"
          pad={{ horizontal: 'small', vertical: 'medium' }}
        >
          <Text weight="bold">{count}</Text> <Text>{title}</Text>
        </Box>
      }
    >
      {children}
    </Tab>
  );
}

function ProfileCard({
  children,
  title = '',
  description = '',
  image = '',
  imageTitle = '',
  ...props
}) {
  return (
    <Box pad="medium" align="start" {...props}>
      <Card elevation="none" width="medium" border>
        <CardBody height="small">
          <Image fit="cover" src={image} a11yTitle={imageTitle} />
        </CardBody>
        <Box pad={{ horizontal: 'medium' }} responsive={false}>
          <Heading level="3" margin={{ vertical: 'medium' }}>
            {title}
          </Heading>
          <Paragraph margin={{ top: 'none' }}>{description}</Paragraph>
        </Box>
      </Card>
    </Box>
  );
}

function ProfileGallery({ children, keyPrefix = 'galleryItem', ...props }) {
  const galleryItems = React.Children.toArray(children);
  return (
    <ProfileGrid {...props}>
      {galleryItems.map((galleryItem, index) => (
        <Card key={`${keyPrefix}-${index}`} background="white" height="small">
          {galleryItem}
        </Card>
      ))}
    </ProfileGrid>
  );
}
function ProfileMasthead({ imageSrc, contentLocation = 'center', children }) {
  return (
    <Box className="Masthead">
      <Stack anchor={contentLocation} fill>
        <Image src={imageSrc} fit="cover" fill />
        {children}
      </Stack>
    </Box>
  );
}
export default function Profile({ children }) {
  const {
    mastheadImage,
    mastheadText,
    posts,
    followers,
    following,
  } = useProfile();
  return (
    <Box>
      <Box height={{ max: 'medium' }}>
        <ProfileMasthead imageSrc={mastheadImage} contentLocation="center">
          <Heading level={1} color="white">
            {mastheadText}
          </Heading>
        </ProfileMasthead>
      </Box>
      <Box>
        <Tabs justify="start">
          <ProfileTab title="Posts" count={posts.length}>
            <Box pad="medium" margin={{ horizontal: 'auto' }}>
              <ProfileGallery>
                {posts.map((post) => {
                  return (
                    <Box key={post.id} pad="none">
                      <Image src={post.image} fit="cover" />
                    </Box>
                  );
                })}
              </ProfileGallery>
            </Box>
          </ProfileTab>
          <ProfileTab title="Followers" count={followers.length}>
            <Box pad="medium" margin={{ horizontal: 'auto' }}>
              <ProfileGrid>
                {followers.map((person) => {
                  return (
                    <ProfileCard
                      key={person.id}
                      image={person.profile}
                      title={`${person.firstName} ${person.lastName}`}
                      width="medium"
                    />
                  );
                })}
              </ProfileGrid>
            </Box>
          </ProfileTab>
          <ProfileTab title="Following" count={following.length}>
            <Box pad="medium" margin={{ horizontal: 'auto' }}>
              <ProfileGrid>
                {following.map((person) => {
                  return (
                    <ProfileCard
                      key={person.id}
                      image={person.profile}
                      title={`${person.firstName} ${person.lastName}`}
                      width="medium"
                    />
                  );
                })}
              </ProfileGrid>
            </Box>
          </ProfileTab>
        </Tabs>
      </Box>
    </Box>
  );
}
