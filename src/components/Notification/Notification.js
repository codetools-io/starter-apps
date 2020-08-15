import React, { useEffect } from 'react';

import styles from './Notification.module.css';

export default function Notification({
  children,
  message,
  expiration,
  onExpire,
  ...props
}) {
  useEffect(() => {
    if (expiration && onExpire) {
      const timeoutId = setTimeout(onExpire, expiration);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [expiration, onExpire]);
  return (
    <div className={styles.Notification} {...props}>
      {message}
      {children}
    </div>
  );
}
