import React from 'react';
import {
  Avatar,
  Box,
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
    <Box className="ChatConversation" height="100%" overflow="auto">
      <InfiniteScroll
        step={5}
        items={messages?.sort((a, b) => a.sentAt - b.sentAt)}
        show={messages?.length ? messages?.length - 1 : 0}
      >
        {(message) => {
          const sender = participants.find((p) => p.id === message.authorId);

          return (
            <Box
              key={`chat-conversation-${message?.id}`}
              direction="row"
              gap="small"
              pad="small"
              flex={false}
            >
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
    <Box className="ChatConversations">
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

function ChatNewConversation({
  clearRecipientSearch,
  recipientSearch,
  recipientSearchResults,
  searchRecipients,
  startConversation,
}) {
  return (
    <Box className="ChatNewConversation">
      <TextInput
        onChange={(e) => searchRecipients(e.target.value)}
        onSelect={(e) => {
          startConversation(e.suggestion.value);
          clearRecipientSearch();
        }}
        placeholder="Type the name of a contact"
        suggestions={recipientSearchResults}
        value={recipientSearch}
        plain
      />
    </Box>
  );
}

export default function Chat({ children }) {
  const {
    clearContactSearch,
    clearRecipientSearch,
    contactSearch,
    contactSearchResults,
    conversations,
    conversation,
    conversationId,
    composeConversation,
    composingConversation,
    participantsLabel,
    user,
    message,
    recipientSearch,
    recipientSearchResults,
    startConversation,
    updateMessage,
    searchContacts,
    searchRecipients,
    sendMessage,
    selectConversation,
    stopComposingConversation,
  } = useChat();

  return (
    <Grid
      className="Chat"
      columns={['1/4', '1/4', '1/4', '1/4']}
      rows={['auto', 'flex', 'auto']}
      areas={[
        ['ChatContactSearch', 'ChatHeader', 'ChatHeader', 'ChatHeader'],
        ['ChatSidebar', 'ChatMain', 'ChatMain', 'ChatMain'],
        ['ChatCompose', 'ChatMessage', 'ChatMessage', 'ChatMessage'],
      ]}
      fill
    >
      <Box
        className="ChatContactSearch"
        gridArea="ChatContactSearch"
        pad="small"
        border="right"
      >
        <TextInput
          onChange={(e) => searchContacts(e.target.value)}
          onSelect={(e) => {
            startConversation(e.suggestion.value);
            clearContactSearch();
          }}
          placeholder="Search contacts"
          suggestions={contactSearchResults}
          value={contactSearch}
        />
      </Box>

      <Box
        className="ChatHeader"
        gridArea="ChatHeader"
        pad="small"
        justify="center"
        border="bottom"
      >
        <Heading level={4} margin="none">
          {composingConversation ? 'New message' : participantsLabel}
        </Heading>
      </Box>
      <Box
        className="ChatSidebar"
        gridArea="ChatSidebar"
        fill="vertical"
        border="right"
      >
        <ChatConversations
          conversations={conversations}
          user={user}
          conversationId={conversationId}
          selectConversation={(conversationId) => {
            stopComposingConversation();
            selectConversation(conversationId);
          }}
        />
      </Box>
      <Box
        className="ChatCompose"
        gridArea="ChatCompose"
        pad="medium"
        border="right"
        justify="end"
      >
        <Button
          label="New Message"
          onClick={() => composeConversation()}
          primary
        />
      </Box>
      <Box
        className="ChatMain"
        gridArea="ChatMain"
        pad={{ horizontal: 'medium' }}
        overflow="auto"
        height={{ max: '100%' }}
      >
        {composingConversation ? (
          <ChatNewConversation
            recipientSearch={recipientSearch}
            recipientSearchResults={recipientSearchResults}
            searchRecipients={searchRecipients}
            startConversation={startConversation}
            clearRecipientSearch={clearRecipientSearch}
          />
        ) : (
          <ChatConversation user={user} {...conversation} />
        )}
      </Box>
      <Box
        className="ChatMessage"
        gridArea="ChatMessage"
        pad="medium"
        border="top"
      >
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
  );
}
