import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  InfiniteScroll,
  Markdown,
  Text,
  TextArea,
} from 'grommet';
import { Chat, Like, Share } from 'grommet-icons';
import { format } from 'timeago.js';
import useFeed from './useFeed';

function FeedPost({
  body,
  comments,
  createdAt,
  id,
  owner,
  reactions,
  shares,
  sharePost,
  commentOnPost,
  likePost,
  ...props
}) {
  return (
    <Card
      gap="small"
      pad="small"
      flex={false}
      elevation="none"
      border
      {...props}
    >
      <Box direction="row" gap="small">
        <Avatar src={owner?.profile}>
          {owner?.firstName[0]}
          {owner?.lastName[0]}
        </Avatar>
        <Box>
          <Text weight="bold">
            {owner?.firstName} {owner?.lastName}
          </Text>
          <Text color="dark-6" size="small">
            {format(createdAt)}
          </Text>
        </Box>
      </Box>
      <Box>
        <Markdown>{body}</Markdown>
      </Box>
      <Box direction="row" align="center" gap="medium">
        <Box direction="row" align="center" gap="small">
          <Button
            size="small"
            icon={<Like size="small" />}
            onClick={() => likePost(id)}
            plain
          />
          <Text>
            {reactions?.filter((reaction) => reaction?.type === 'like')?.length}
          </Text>
        </Box>
        <Box direction="row" align="center" gap="small">
          <Button
            size="small"
            icon={<Chat size="small" />}
            onClick={() => commentOnPost(id)}
            plain
          />
          <Text>{comments?.length}</Text>
        </Box>
        <Box direction="row" align="center" gap="small">
          <Button
            size="small"
            icon={<Share size="small" />}
            onClick={() => sharePost(id)}
            plain
          />
          <Text>{shares?.length}</Text>
        </Box>
      </Box>
    </Card>
  );
}

function FeedPosts({
  posts,
  likePost = () => {},
  sharePost = () => {},
  commentOnPost = () => {},
}) {
  return (
    <Box height="100%" overflow="auto">
      <InfiniteScroll
        step={5}
        items={posts}
        show={posts?.length ? posts?.length - 1 : 0}
      >
        {(post) => {
          return (
            <FeedPost
              key={`feed-post-${post?.id}`}
              {...post}
              likePost={likePost}
              sharePost={sharePost}
              commentOnPost={commentOnPost}
              margin={{ vertical: 'small' }}
            />
          );
        }}
      </InfiniteScroll>
    </Box>
  );
}

function FeedNewPost({ firstName, id, lastName, profile }) {
  return (
    <Box direction="row" align="center" gap="small">
      <Avatar src={profile}>
        {firstName[0]}
        {lastName[0]}
      </Avatar>
      <Box fill>
        <TextArea placeholder="What's on your mind?" resize={false} fill />
      </Box>
    </Box>
  );
}
export default function Feed({ children }) {
  const { currentUser, sortedPosts } = useFeed();

  return (
    <Grid
      columns={['1/4', '1/4', '1/4', '1/4']}
      rows={['auto', 'flex']}
      areas={[
        ['FeedHeader', 'FeedHeader', 'FeedHeader', 'FeedHeader'],
        ['FeedMain', 'FeedMain', 'FeedMain', 'FeedMain'],
      ]}
      fill
    >
      <Box gridArea="FeedHeader" pad="medium" justify="center" border="bottom">
        <FeedNewPost {...currentUser} />
      </Box>

      <Box
        gridArea="FeedMain"
        pad="medium"
        overflow="auto"
        height={{ max: '100%' }}
      >
        <FeedPosts posts={sortedPosts} />
      </Box>
    </Grid>
  );
}
