import React from 'react';

import styles from './Chat.module.css';

export default function Chat ({ children, ...props }) {

  return <div className={styles.Chat} {...props}>{children}</div>;
};



