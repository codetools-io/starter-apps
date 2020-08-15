import React from 'react';

import styles from './{{blueprintInstance}}.module.css';

export default function {{blueprintInstance}} ({ children, ...props }) {

  return <div className={styles.{{blueprintInstance}}} {...props}>{children}</div>;
};



