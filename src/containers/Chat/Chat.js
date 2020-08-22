import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Heading,
  Markdown,
  Text,
  TextArea,
  TextInput,
} from 'grommet';
import ChatLayout from 'components/ChatLayout';
import useChat from './useChat';

function ChatConversation({ participants, messages, user }) {
  return (
    <Box gap="small">
      {messages
        .sort((a, b) => a.sentAt - b.sentAt)
        .map((message) => {
          const sender = participants.find((p) => p.id === message.authorId);
          return (
            <Box direction="row" gap="small">
              <Box>
                <Avatar src={sender.profile}>
                  {sender.firstName[0]}
                  {sender.lastName[0]}
                </Avatar>
              </Box>
              <Box>
                <Text weight="bold">
                  {sender.firstName} {sender.lastName}
                </Text>
                <Markdown>{message.body}</Markdown>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
}

function ChatConversations({ conversations, user, currentConversationId }) {
  return (
    <Box gap="medium">
      {conversations.map((conversation) => {
        return (
          <Box
            background={
              currentConversationId === conversation.id ? 'light-1' : null
            }
            pad={{ vertical: 'small', horizontal: 'medium' }}
          >
            {conversation.participants
              ?.filter((participant) => participant.id !== user.id)
              ?.map(
                (participant) =>
                  `${participant.firstName} ${participant.lastName}`
              )
              .join(', ')}
          </Box>
        );
      })}
    </Box>
  );
}
export default function Chat({ children }) {
  const {
    conversations,
    currentConversation,
    currentConversationId,
    currentParticipants,
    currentParticipantsLabel,
    currentMessages,
    user,
  } = useChat();

  return (
    <ChatLayout>
      <Box
        gridArea="search"
        pad="medium"
        border={[{ side: 'right' }, { side: 'bottom' }]}
      >
        <TextInput placeholder="Search contacts" />
      </Box>
      <Box gridArea="header" pad="medium" border="bottom" justify="center">
        <Heading level={4} margin="none">
          {currentParticipantsLabel}
        </Heading>
      </Box>
      <Box gridArea="sidebar" pad="none" border={[{ side: 'right' }]}>
        <ChatConversations
          conversations={conversations}
          user={user}
          currentConversationId={currentConversationId}
        />
      </Box>
      <Box gridArea="compose" pad="medium" border="right" justify="end">
        <Button label="Compose" primary />
      </Box>
      <Box gridArea="main" pad="medium">
        <ChatConversation user={user} {...currentConversation} />
      </Box>
      <Box gridArea="footer" pad="medium">
        <TextArea
          placeholder="Type your message"
          value={''}
          onChange={(event) => {}}
          resize={false}
          fill
        />
      </Box>
    </ChatLayout>
  );
}
