import React from 'react';

import styles from './Contacts.module.css';

export default function Contacts ({ children, ...props }) {

  return <div className={styles.Contacts} {...props}>{children}</div>;
};



