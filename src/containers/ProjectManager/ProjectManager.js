import React from 'react';

import styles from './ProjectManager.module.css';

export default function ProjectManager ({ children, ...props }) {

  return <div className={styles.ProjectManager} {...props}>{children}</div>;
};



