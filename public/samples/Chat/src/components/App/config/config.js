import * as users from './users';

const { user1, ...otherUsers } = users;

export const contacts = Object.values(otherUsers);

export const currentUser = user1;

export const conversations = [
  {
    id: 'conversation-1',
    participantsIds: [currentUser?.id, users?.user2?.id],
    participants: [currentUser, users?.user2],
    messages: [
      1,
      2,
      1,
      1,
      2,
      1,
      1,
      2,
      1,
      2,
      2,
      1,
      1,
      2,
      1,
      1,
      2,
      1,
      1,
      2,
      1,
      2,
      2,
      1,
    ].map((userSuffix, index) => {
      return {
        id: `conversation-1-${index}`,
        body: 'Hi! How are you?',
        sentAt: 1598102365284,
        authorId: `user-${userSuffix}`,
      };
    }),
  },
  {
    id: 'conversation-2',
    participants: [currentUser, users?.user3],
    participantsIds: [currentUser?.id, users?.user3?.id],
    messages: [
      {
        id: 'conversation-2a',
        body: 'Hello!',
        sentAt: 1598102268116,
        authorId: 'user-1',
      },
      {
        id: 'conversation-2a',
        body: 'Hello! How are you?',
        sentAt: 1598102365284,
        authorId: 'user-3',
      },
    ],
  },
  {
    id: 'conversation-3',
    participants: [currentUser, users?.user4],
    participantsIds: [currentUser?.id, users?.user4?.id],
    messages: [
      {
        id: 'conversation-3a',
        body: 'Hey!',
        sentAt: 1598102268116,
        authorId: 'user-1',
      },
      {
        id: 'conversation-3a',
        body: 'Hey! How are you?',
        sentAt: 1598102365284,
        authorId: 'user-4',
      },
    ],
  },
];
