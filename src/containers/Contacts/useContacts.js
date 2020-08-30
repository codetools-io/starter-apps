import { useCallback, useMemo, useState } from 'react';
import * as data from 'data';

export default function useContacts() {
  const [connections, setConnections] = useState([
    data?.users?.user2,
    data?.users?.user3,
    data?.users?.user4,
    data?.users?.user5,
    data?.users?.user6,
    data?.users?.user7,
  ]);
  const [connectionId, setConnectionId] = useState(connections[0]?.id);
  const [connectionUpdates, setConnectionUpdates] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const connection = useMemo(() => {
    return connections.find((connection) => connection.id === connectionId);
  }, [connections, connectionId]);
  const updateConnection = useCallback(
    (payload) => {
      setConnectionUpdates({
        ...connectionUpdates,
        ...payload,
      });
    },
    [connectionUpdates]
  );
  const openConnection = useCallback((id) => {
    setConnectionId(id);
    setIsEditMode(false);
  }, []);
  const editConnection = useCallback(
    (id) => {
      setConnectionId(id);
      setConnectionUpdates(
        connections.find((connection) => connection.id === id)
      );
      setIsEditMode(true);
    },
    [connections]
  );
  const cancelEdit = useCallback(() => {
    setIsEditMode(false);
    setConnectionUpdates({});
  }, []);
  const saveChanges = useCallback((payload) => {
    setConnections(
      connections.map((connection) => {
        if (connection.id !== payload.id) {
          return connection;
        }

        return {
          ...connection,
          ...payload,
        };
      })
    );
    setIsEditMode(false);
    setConnectionUpdates({});
  }, []);
  const contacts = useMemo(() => {
    return {
      connections,
      connection,
      connectionId,
      updateConnection,
      openConnection,
      editConnection,
      cancelEdit,
      saveChanges,
      isEditMode,
      connectionUpdates,
    };
  }, [
    connections,
    connection,
    connectionId,
    updateConnection,
    openConnection,
    editConnection,
    cancelEdit,
    saveChanges,
    isEditMode,
    connectionUpdates,
  ]);

  return contacts;
}
