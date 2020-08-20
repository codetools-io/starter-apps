import React from 'react';
import {
  GrCalendar,
  GrChat,
  GrContactInfo,
  GrDashboard,
  GrMail,
  GrNotes,
  GrShop,
  GrTask,
  GrTasks,
  GrUser,
} from 'react-icons/gr';

export const nav = {
  routes: [
    {
      key: 'calendar',
      icon: <GrCalendar />,
      label: 'Calendar',
      path: '/calendar',
    },
    {
      key: 'chat',
      icon: <GrChat />,
      label: 'Chat',
      path: '/chat',
    },
    {
      key: 'commerce',
      icon: <GrShop />,
      label: 'Commerce',
      path: '/commerce',
    },
    {
      key: 'contacts',
      icon: <GrContactInfo />,
      label: 'Contacts',
      path: '/contacts',
    },
    {
      key: 'dashboard',
      icon: <GrDashboard />,
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      key: 'email',
      icon: <GrMail />,
      label: 'Email',
      path: '/email',
    },
    {
      key: 'notes',
      icon: <GrNotes />,
      label: 'Notes',
      path: '/notes',
    },
    {
      key: 'profile',
      icon: <GrUser />,
      label: 'Profile',
      path: '/profile',
    },
    {
      key: 'projectManager',
      icon: <GrTasks />,
      label: 'Project Manager',
      path: '/project-manager',
    },
    {
      key: 'tasks',
      icon: <GrTask />,
      label: 'Tasks',
      path: '/tasks',
    },
  ],
};
