import { useMemo, useState } from 'react';
import * as config from 'config';

export default function useContacts() {
  const [connections] = useState([
    config.user2,
    config.user3,
    config.user4,
    config.user5,
    config.user6,
    config.user7,
  ]);
  const [currentConnectionId] = useState(connections[0]?.id);
  const currentConnection = useMemo(() => {
    return connections.find(
      (connection) => connection.id === currentConnectionId
    );
  }, [connections, currentConnectionId]);

  const contacts = useMemo(() => {
    return {
      connections,
      currentConnection,
      currentConnectionId,
    };
  }, [connections, currentConnection, currentConnectionId]);

  return contacts;
}
