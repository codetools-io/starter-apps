import React from 'react';

import styles from './Checkout.module.css';

export default function Checkout({ children, ...props }) {
  return (
    <div className={styles.Checkout} {...props}>
      <h1>Checkout</h1>
      {children}
    </div>
  );
}
