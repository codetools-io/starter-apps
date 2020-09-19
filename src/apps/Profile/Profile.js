import React from 'react';
import { Box, Heading, Image, Tabs, Tab, Text } from 'grommet';
import { DocsTheme } from 'components/Docs';
import ProfileLayout from 'components/ProfileLayout';
import Gallery from 'components/Gallery';
import GridLayout from 'components/GridLayout';
import Masthead from 'components/Masthead';
import ResourceCard from 'components/ResourceCard';
import useProfile from './useProfile';

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
export default function Profile({ children }) {
  const {
    mastheadImage,
    mastheadText,
    posts,
    followers,
    following,
  } = useProfile();
  return (
    <DocsTheme>
      <ProfileLayout>
        <Box height={{ max: 'medium' }}>
          <Masthead imageSrc={mastheadImage} contentLocation="center">
            <Heading level={1} color="white">
              {mastheadText}
            </Heading>
          </Masthead>
        </Box>
        <Box>
          <Tabs justify="start">
            <ProfileTab title="Posts" count={posts.length}>
              <Box pad="medium" margin={{ horizontal: 'auto' }}>
                <Gallery>
                  {posts.map((post) => {
                    return (
                      <Box key={post.id} pad="none">
                        <Image src={post.image} fit="cover" />
                      </Box>
                    );
                  })}
                </Gallery>
              </Box>
            </ProfileTab>
            <ProfileTab title="Followers" count={followers.length}>
              <Box pad="medium" margin={{ horizontal: 'auto' }}>
                <GridLayout>
                  {followers.map((person) => {
                    return (
                      <ResourceCard
                        key={person.id}
                        image={person.profile}
                        title={`${person.firstName} ${person.lastName}`}
                        width="medium"
                      />
                    );
                  })}
                </GridLayout>
              </Box>
            </ProfileTab>
            <ProfileTab title="Following" count={following.length}>
              <Box pad="medium" margin={{ horizontal: 'auto' }}>
                <GridLayout>
                  {following.map((person) => {
                    return (
                      <ResourceCard
                        key={person.id}
                        image={person.profile}
                        title={`${person.firstName} ${person.lastName}`}
                        width="medium"
                      />
                    );
                  })}
                </GridLayout>
              </Box>
            </ProfileTab>
          </Tabs>
        </Box>
      </ProfileLayout>
    </DocsTheme>
  );
}
