import { useMemo, useState } from 'react';
import * as config from './config';

export default function useContacts() {
  const [contacts, setContacts] = useState(config?.contacts);
  const [contactSearch, setContactSearch] = useState();
  const [contactId, setContactId] = useState(contacts[0]?.id);
  const [contactUpdates, setContactUpdates] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const contact = useMemo(() => {
    return contacts.find((contact) => contact.id === contactId);
  }, [contacts, contactId]);
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

  return useMemo(() => {
    function updateContact(payload) {
      setContactUpdates({
        ...contactUpdates,
        ...payload,
      });
    }
    function openContact(id) {
      setContactId(id);
      setIsEditMode(false);
    }
    function editContact(id) {
      setContactId(id);
      setContactUpdates(contacts.find((contact) => contact.id === id));
      setIsEditMode(true);
    }
    function cancelEdit() {
      setIsEditMode(false);
      setContactUpdates({});
    }
    function saveChanges(payload) {
      setContacts(
        contacts.map((contact) => {
          if (contact.id !== payload.id) {
            return contact;
          }

          return {
            ...contact,
            ...payload,
          };
        })
      );
      setIsEditMode(false);
      setContactUpdates({});
    }
    function searchContacts(value) {
      setContactSearch(value);
    }
    function clearContactSearch() {
      setContactSearch('');
    }

    return {
      contacts,
      contact,
      contactSearch,
      contactId,
      updateContact,
      openContact,
      editContact,
      cancelEdit,
      saveChanges,
      isEditMode,
      contactUpdates,
      searchContacts,
      clearContactSearch,
      contactSearchResults,
    };
  }, [
    contacts,
    contact,
    contactId,
    isEditMode,
    contactUpdates,
    contactSearch,
    contactSearchResults,
  ]);
}
