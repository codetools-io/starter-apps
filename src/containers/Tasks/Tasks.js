import React from 'react';

import styles from './Tasks.module.css';

export default function Tasks ({ children, ...props }) {

  return <div className={styles.Tasks} {...props}>{children}</div>;
};



