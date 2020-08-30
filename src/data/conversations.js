import { users } from 'data';

export const user1 = [
  {
    id: 'conversation-1',
    participants: [users?.user1, users?.user2],
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
    participants: [users?.user1, users?.user3],
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
    participants: [users?.user1, users?.user4],
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
