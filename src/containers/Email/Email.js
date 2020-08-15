import React from 'react';

import styles from './Email.module.css';

export default function Email ({ children, ...props }) {

  return <div className={styles.Email} {...props}>{children}</div>;
};



