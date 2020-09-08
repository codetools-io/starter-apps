import { useMemo, useState } from 'react';
import { appShell } from 'data';
import { chain } from 'lodash';

export default function useAppShell() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState(appShell?.user);
  const [notifications, setNotifications] = useState(appShell?.notifications);
  const [categories, setCategories] = useState(appShell?.categories);

  const authLabel = useMemo(() => {
    return isAuthenticated ? 'logout' : 'login';
  }, [isAuthenticated]);

  const notificationsByCategoryId = useMemo(
    () => chain(notifications).groupBy('categoryId').value(),
    [notifications]
  );

  const userInitials = useMemo(() => {
    if (user) {
      return `${user?.firstName[0]}${user?.lastName[0]}`;
    }

    return null;
  }, [user]);

  return useMemo(() => {
    function authHandler() {
      if (isAuthenticated) {
        logout();
      } else {
        login();
      }
    }

    function login() {
      setIsAuthenticated(true);
      setUser(appShell?.user);
    }

    function logout() {
      setIsAuthenticated(false);
      setUser(null);
    }

    return {
      authHandler,
      authLabel,
      isAuthenticated,
      login,
      logout,
      notifications,
      notificationsByCategoryId,
      categories,
      user,
      userInitials,
    };
  }, [
    authLabel,
    isAuthenticated,
    notifications,
    notificationsByCategoryId,
    categories,
    user,
    userInitials,
  ]);
}
