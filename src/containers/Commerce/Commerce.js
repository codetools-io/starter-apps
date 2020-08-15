import React from 'react';

import styles from './Commerce.module.css';

export default function Commerce ({ children, ...props }) {

  return <div className={styles.Commerce} {...props}>{children}</div>;
};



