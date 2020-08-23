import React from 'react';

import styles from './Cart.module.css';

export default function Cart({ children, ...props }) {
  return (
    <div className={styles.Cart} {...props}>
      <h1>Cart</h1>
      {children}
    </div>
  );
}
