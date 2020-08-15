import React from 'react';

import styles from './Profile.module.css';

export default function Profile ({ children, ...props }) {

  return <div className={styles.Profile} {...props}>{children}</div>;
};



