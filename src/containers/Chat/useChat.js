import { useMemo, useState } from 'react';
import * as config from 'config';

export default function useChat() {
  const [conversations] = useState([
    {
      id: 'conversation-1',
      participants: [config?.user1, config?.user2],
      messages: [
        {
          id: 'conversation-1a',
          body: 'Hi!',
          sentAt: 1598102268116,
          authorId: 'user-1',
        },
        {
          id: 'conversation-1a',
          body: 'Hi! How are you?',
          sentAt: 1598102365284,
          authorId: 'user-2',
        },
      ],
    },
    {
      id: 'conversation-2',
      participants: [config?.user1, config?.user3],
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
      participants: [config?.user1, config?.user4],
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
  ]);
  const [user] = useState(config?.user1);
  const [currentConversationId] = useState(conversations[0]?.id);
  const currentConversation = useMemo(() => {
    return conversations.find(
      (conversation) => conversation?.id === currentConversationId
    );
  }, [conversations, currentConversationId]);
  const currentParticipants = useMemo(() => currentConversation?.participants, [
    currentConversation,
  ]);
  const currentParticipantsLabel = useMemo(
    () =>
      currentParticipants
        ?.filter((participant) => participant.id !== user.id)
        ?.map(
          (participant) => `${participant.firstName} ${participant.lastName}`
        )
        .join(', '),
    [currentParticipants, user]
  );
  const currentMessages = useMemo(() => currentConversation?.messages, [
    currentConversation,
  ]);
  const chat = useMemo(() => {
    return {
      conversations,
      user,
      currentConversation,
      currentConversationId,
      currentMessages,
      currentParticipants,
      currentParticipantsLabel,
    };
  }, [
    conversations,
    user,
    currentConversation,
    currentConversationId,
    currentMessages,
    currentParticipants,
    currentParticipantsLabel,
  ]);

  return chat;
}
