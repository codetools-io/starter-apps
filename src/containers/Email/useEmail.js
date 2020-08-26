import { useMemo, useState } from 'react';
import { chain } from 'lodash';
import * as data from 'data';

export default function useEmail() {
  const [emails] = useState(data.emails.user1.emails);
  const [labels] = useState(data.emails.user1.labels);
  const [activeEmailId, setActiveEmailId] = useState();
  const [activeFolder, updateActiveFolder] = useState('Inbox');

  const inbox = useMemo(
    () => emails.filter((email) => email?.folder === 'Inbox'),
    [emails]
  );
  const sent = useMemo(
    () => () => emails.filter((email) => email?.folder === 'Sent'),
    [emails]
  );
  const drafts = useMemo(
    () => () => emails.filter((email) => email?.folder === 'Draft'),
    [emails]
  );
  const trash = useMemo(
    () => () => emails.filter((email) => email?.folder === 'Trash'),
    [emails]
  );
  const important = useMemo(
    () => () => emails.filter((email) => email?.folder === 'Important'),
    [emails]
  );
  const spam = useMemo(
    () => () => emails.filter((email) => email?.folder === 'Starred'),
    [emails]
  );
  const starred = useMemo(
    () => () => emails.filter((email) => email?.folder === 'Spam'),
    [emails]
  );

  const activeEmail = useMemo(
    () => emails.find((email) => email.id === activeEmailId),
    [emails, activeEmailId]
  );

  const emailsByFolder = useMemo(() => {
    return chain(emails).groupBy('folder').value();
  }, [emails]);

  const labelsById = useMemo(() => {
    return chain(labels).keyBy('id').value();
  }, [labels]);

  const email = useMemo(() => {
    return {
      emails,
      inbox,
      sent,
      drafts,
      trash,
      important,
      spam,
      starred,
      labels,
      activeEmailId,
      activeEmail,
      emailsByFolder,
      activeFolder,
      updateActiveFolder,
      labelsById,
    };
  }, [
    emails,
    inbox,
    sent,
    drafts,
    trash,
    important,
    spam,
    starred,
    labels,
    activeEmailId,
    activeEmail,
    emailsByFolder,
    activeFolder,
    updateActiveFolder,
    labelsById,
  ]);

  return email;
}
