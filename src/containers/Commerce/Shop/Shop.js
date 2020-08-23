import React from 'react';

import styles from './Shop.module.css';

export default function Shop({ children, ...props }) {
  return (
    <div className={styles.Shop} {...props}>
      <h1>Shop</h1>
      {children}
    </div>
  );
}
