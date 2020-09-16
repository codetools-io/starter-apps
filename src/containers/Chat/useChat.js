import { useMemo, useState } from 'react';
import * as data from 'data';
import { keyBy } from 'lodash';
import { v4 as uuid } from 'uuid';
export default function useChat() {
  const [conversations, setConversations] = useState(data?.chat?.conversations);
  const [contacts] = useState(data?.chat?.contacts);
  const [contactSearch, setContactSearch] = useState();
  const [user] = useState(data?.chat?.currentUser);
  const [conversationId, setConversationId] = useState(conversations[0]?.id);
  const [message, setMessage] = useState();

  const contactsById = useMemo(() => keyBy(contacts, 'id'), [contacts]);
  const contactSearchResults = useMemo(() => {
    const queryValue = contactSearch?.trim?.()?.toLowerCase?.();
    const searchableFields = ['username', 'firstName', 'lastName', 'company'];

    if (!queryValue) {
      return [];
    }

    return contacts
      ?.filter((contact) => {
        return searchableFields.some((searchableField) => {
          return contact?.[searchableField]
            ?.toLowerCase?.()
            ?.includes?.(queryValue);
        });
      })
      .map((result) => {
        return {
          label: `${result?.firstName} ${result?.lastName}`,
          value: result?.id,
        };
      });
  }, [contacts, contactSearch]);
  const conversation = useMemo(() => {
    return conversations.find(
      (conversation) => conversation?.id === conversationId
    );
  }, [conversations, conversationId]);
  const conversationsById = useMemo(() => keyBy(conversations, 'id'), [
    conversations,
  ]);
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

  return useMemo(() => {
    function clearContactSearch() {
      setContactSearch('');
    }
    function searchContacts(value) {
      setContactSearch(value);
    }
    function selectConversation(conversationId) {
      setConversationId(conversationId);
    }
    function startConversation(contactId) {
      const existing = conversations.find((convo) =>
        convo?.participantsIds?.includes(contactId)
      );

      if (existing) {
        selectConversation(existing?.id);
      } else {
        const id = uuid();
        setConversations([
          ...conversations,
          {
            id,
            participants: [user, contactsById?.[contactId]],
            participantsIds: [user?.id, contactsById?.[contactId]?.id],
            messages: [],
          },
        ]);
        selectConversation(id);
      }
    }
    function sendMessage(payload) {
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
    }
    function updateMessage(value) {
      setMessage(value);
    }

    return {
      clearContactSearch,
      contacts,
      contactsById,
      contactSearch,
      contactSearchResults,
      conversations,
      conversationsById,
      user,
      conversation,
      conversationId,
      currentMessages,
      participants,
      participantsLabel,
      message,
      updateMessage,
      searchContacts,
      startConversation,
      sendMessage,
      selectConversation,
    };
  }, [
    contacts,
    contactsById,
    contactSearch,
    contactSearchResults,
    conversations,
    conversationsById,
    user,
    conversation,
    conversationId,
    currentMessages,
    participants,
    participantsLabel,
    message,
  ]);
}
