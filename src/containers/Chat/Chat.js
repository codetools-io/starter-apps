import React from 'react';
import {
  Avatar,
  Box,
  Card,
  Button,
  Grid,
  Heading,
  InfiniteScroll,
  Keyboard,
  Markdown,
  Text,
  TextArea,
  TextInput,
} from 'grommet';
import { v4 as uuid } from 'uuid';
import useChat from './useChat';

function ChatConversation({ participants, messages, user }) {
  return (
    <Box height="100%" overflow="auto">
      <InfiniteScroll
        step={5}
        items={messages.sort((a, b) => a.sentAt - b.sentAt)}
        show={messages?.length - 1}
      >
        {(message) => {
          const sender = participants.find((p) => p.id === message.authorId);
          return (
            <Box direction="row" gap="small" pad="small" flex={false}>
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
        }}
      </InfiniteScroll>
    </Box>
  );
}

function ChatConversations({
  conversations,
  user,
  conversationId,
  selectConversation,
}) {
  return (
    <Box>
      {conversations.map((conversation) => {
        return (
          <Button
            key={conversation.id}
            onClick={() => selectConversation(conversation.id)}
          >
            <Box
              background={conversationId === conversation.id ? 'light-1' : null}
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
          </Button>
        );
      })}
    </Box>
  );
}
export default function Chat({ children }) {
  const {
    conversations,
    conversation,
    conversationId,
    participantsLabel,
    user,
    message,
    updateMessage,
    sendMessage,
    selectConversation,
  } = useChat();

  return (
    <Box className="Chat" pad="medium" fill>
      <Card background="white" fill>
        <Grid
          columns={['1/4', '1/4', '1/4', '1/4']}
          rows={['auto', 'flex', 'auto']}
          areas={[
            ['ChatSearch', 'ChatHeader', 'ChatHeader', 'ChatHeader'],
            ['ChatSidebar', 'ChatMain', 'ChatMain', 'ChatMain'],
            ['ChatCompose', 'ChatMessage', 'ChatMessage', 'ChatMessage'],
          ]}
          fill
        >
          <Box gridArea="ChatSearch" pad="small" border="right">
            <TextInput placeholder="Search chats" plain />
          </Box>

          <Box
            gridArea="ChatHeader"
            pad="small"
            justify="center"
            border="bottom"
          >
            <Heading level={4} margin="none">
              {participantsLabel}
            </Heading>
          </Box>
          <Box gridArea="ChatSidebar" fill="vertical" border="right">
            <ChatConversations
              conversations={conversations}
              user={user}
              conversationId={conversationId}
              selectConversation={selectConversation}
            />
          </Box>
          <Box gridArea="ChatCompose" pad="medium" border="right" justify="end">
            <Button label="Compose" primary />
          </Box>
          <Box
            gridArea="ChatMain"
            pad={{ horizontal: 'medium' }}
            overflow="auto"
            height={{ max: '100%' }}
          >
            <ChatConversation user={user} {...conversation} />
          </Box>
          <Box gridArea="ChatMessage" pad="medium" border="top">
            <Keyboard
              onEnter={(event) => {
                event.preventDefault();
                sendMessage({
                  id: uuid(),
                  body: message,
                  sentAt: Date.now(),
                  authorId: user?.id,
                });
              }}
            >
              <TextArea
                placeholder="Type your message"
                value={message}
                onChange={(event) => updateMessage(event.target.value)}
                resize={false}
                fill
              />
            </Keyboard>
          </Box>
        </Grid>
      </Card>
    </Box>
  );
}
