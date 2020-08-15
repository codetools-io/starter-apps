import React from 'react';
import { NavLink } from 'react-router-dom';
import Notification from 'components/Notification';
import * as config from 'config';
import styles from './AppShell.module.css';

export default function AppShellContainer({ children, ...props }) {
  const isAuthenticated = true;
  const login = () => {};
  const logout = () => {};
  const authHandler = isAuthenticated ? logout : login;
  const authLabel = isAuthenticated ? 'logout' : 'login';

  return (
    <div className={styles.Container} {...props}>
      <AppShellNotifications />
      <AppShellHeader
        siteName={config?.site?.name}
        authHandler={authHandler}
        authLabel={authLabel}
      />
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

function AppShellHeader({ siteName, authHandler = () => {}, authLabel }) {
  return (
    <header className={styles.Header}>
      <h1>{siteName}</h1>
      <button onClick={authHandler}>{authLabel}</button>
    </header>
  );
}

function AppShellMain({ children }) {
  return <main className={styles.Main}>{children}</main>;
}

function AppShellFooter({ copyrightYear, siteName }) {
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
          {route?.icon}
          {route?.label}
        </NavLink>
      ))}
    </nav>
  );
}
