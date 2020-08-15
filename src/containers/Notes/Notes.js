import React from 'react';

import styles from './Notes.module.css';

export default function Notes ({ children, ...props }) {

  return <div className={styles.Notes} {...props}>{children}</div>;
};



