import React from 'react';
import { NavLink } from 'react-router-dom';
import Notification from 'components/Notification';
import * as config from 'config';
import styles from './AppShell.module.css';

export default function AppShellContainer({ children, ...props }) {
  return (
    <div className={styles.Container} {...props}>
      <AppShellNotifications />
      <AppShellHeader />
      <AppShellSidebar />
      <AppShellMain>{children}</AppShellMain>
      <AppShellFooter
        copyrightYear={config?.site?.copyrightYear}
        siteName={config?.site?.name}
      />
    </div>
  );
}

function AppShellNotifications() {
  const notifications = [];

  return (
    <div className={styles.Notifications}>
      {notifications.map((notification) => {
        return <Notification key={notification.id} {...notification} />;
      })}
    </div>
  );
}

function AppShellHeader() {
  const isAuthenticated = true;
  const login = () => {};
  const logout = () => {};
  const onAuth = isAuthenticated ? logout : login;
  const authLabel = isAuthenticated ? 'logout' : 'login';

  return (
    <header className={styles.Header}>
      <h1>Starter App</h1>
      <button onClick={() => onAuth()}>{authLabel}</button>
    </header>
  );
}

function AppShellMain({ children }) {
  return <main className={styles.Main}>{children}</main>;
}

function AppShellFooter({ siteName, copyrightYear }) {
  return (
    <footer className={styles.Footer}>
      &copy;{copyrightYear} {siteName}
    </footer>
  );
}

function AppShellSidebar() {
  return (
    <div className={styles.Sidebar}>
      <AppShellNav />
    </div>
  );
}

function AppShellNav() {
  return (
    <nav className={styles.Nav}>
      {config?.nav?.routes?.map((route) => (
        <NavLink key={route.key} to={route.path}>
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
}
