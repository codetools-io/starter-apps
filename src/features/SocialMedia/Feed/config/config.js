import * as allUsers from './users';

export const currentUser = allUsers.user1;

export const users = Object.values(allUsers);

export const posts = [
  {
    id: 'post-1',
    ownerId: 'user-1',
    owner: currentUser,
    createdAt: 1598102365284,
    updatedAt: 1598102365284,
    title: 'A title for post 1',
    body: 'A much longer bit of content for post 1.',
    attachments: [{ id: 'post-1-attachment-1' }],
    upvotes: 3,
    reactions: [{ id: 'post-1-reaction-1', ownerId: 'user-2', type: 'like' }],
    comments: [{ id: 'post-1-comment-1', ownerId: 'user-2' }],
    shares: [{ id: 'post-1-share-1', ownerId: 'user-2' }],
    awards: [{ id: 'post-1-reward-1', ownerId: 'user-2', type: 'gold' }],
  },
  {
    id: 'post-2',
    ownerId: 'user-2',
    owner: allUsers?.user2,
    createdAt: 1598102365284,
    updatedAt: 1598102365284,
    title: 'A title for post 2',
    body: 'A much longer bit of content for post 2.',
    attachments: [{ id: 'post-2-attachment-1' }],
    upvotes: 3,
    reactions: [{ id: 'post-2-reaction-1', ownerId: 'user-3', type: 'like' }],
    comments: [{ id: 'post-2-comment-1', ownerId: 'user-3' }],
    shares: [{ id: 'post-2-share-1', ownerId: 'user-3' }],
    awards: [{ id: 'post-2-reward-1', ownerId: 'user-3', type: 'gold' }],
  },
  {
    id: 'post-3',
    ownerId: 'user-3',
    owner: allUsers?.user3,
    createdAt: 1598102365284,
    updatedAt: 1598102365284,
    title: 'A title for post 3',
    body: 'A much longer bit of content for post 3.',
    attachments: [{ id: 'post-3-attachment-1' }],
    upvotes: 3,
    reactions: [{ id: 'post-3-reaction-1', ownerId: 'user-4', type: 'like' }],
    comments: [{ id: 'post-3-comment-1', ownerId: 'user-4' }],
    shares: [{ id: 'post-3-share-1', ownerId: 'user-4' }],
    awards: [{ id: 'post-3-reward-1', ownerId: 'user-4', type: 'gold' }],
  },
];
