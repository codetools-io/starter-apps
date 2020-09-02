import { useCallback, useMemo, useState } from 'react';
import * as data from 'data';

export default function useChat() {
  const [conversations, setConversations] = useState(data?.chat?.conversations);
  const [user] = useState(data?.users?.user1);
  const [conversationId, setConversationId] = useState(conversations[0]?.id);
  const [message, setMessage] = useState();

  const conversation = useMemo(() => {
    return conversations.find(
      (conversation) => conversation?.id === conversationId
    );
  }, [conversations, conversationId]);
  const participants = useMemo(() => conversation?.participants, [
    conversation,
  ]);
  const participantsLabel = useMemo(
    () =>
      participants
        ?.filter((participant) => participant.id !== user.id)
        ?.map(
          (participant) => `${participant.firstName} ${participant.lastName}`
        )
        .join(', '),
    [participants, user]
  );
  const currentMessages = useMemo(() => conversation?.messages, [conversation]);
  const updateMessage = useCallback(function updateMessage(value) {
    setMessage(value);
  }, []);
  const sendMessage = useCallback(
    (payload) => {
      setConversations(
        conversations.map((conversation) => {
          if (conversation.id !== conversationId) {
            return conversation;
          }

          return {
            ...conversation,
            messages: [...conversation.messages, payload],
          };
        })
      );
      setMessage('');
    },
    [conversations, conversationId]
  );
  const selectConversation = useCallback((id) => {
    setConversationId(id);
  }, []);

  return useMemo(() => {
    return {
      conversations,
      user,
      conversation,
      conversationId,
      currentMessages,
      participants,
      participantsLabel,
      message,
      updateMessage,
      sendMessage,
      selectConversation,
    };
  }, [
    conversations,
    user,
    conversation,
    conversationId,
    currentMessages,
    participants,
    participantsLabel,
    message,
    updateMessage,
    sendMessage,
    selectConversation,
  ]);
}
