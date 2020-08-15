import React from 'react';

import styles from './Calendar.module.css';

export default function Calendar ({ children, ...props }) {

  return <div className={styles.Calendar} {...props}>{children}</div>;
};



