import { useMemo, useState } from 'react';
import * as data from 'data';

export default function useContacts() {
  const [connections] = useState([
    data?.users?.user2,
    data?.users?.user3,
    data?.users?.user4,
    data?.users?.user5,
    data?.users?.user6,
    data?.users?.user7,
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
