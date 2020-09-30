import { useMemo, useState } from 'react';
import * as config from './config';

export default function useFeed() {
  const [posts] = useState(config?.posts);
  const [users] = useState(config?.users);
  const [currentUser] = useState(config?.currentUser);

  const sortedPosts = useMemo(() => {
    return [...posts]?.sort((a, b) => a.createdAt - b.createdAt);
  }, [posts]);

  return useMemo(() => {
    return {
      currentUser,
      posts,
      sortedPosts,
      users,
    };
  }, [currentUser, posts, sortedPosts, users]);
}
