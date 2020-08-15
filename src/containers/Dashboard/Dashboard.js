import React from 'react';

import styles from './Dashboard.module.css';

export default function Dashboard({ children, ...props }) {
  return (
    <div className={styles.Dashboard} {...props}>
      <h2>Dashboard</h2>
      {children}
    </div>
  );
}
