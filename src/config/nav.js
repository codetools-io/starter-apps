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
      id: 'calendar',
      icon: <GrCalendar />,
      label: 'Calendar',
      path: '/calendar',
    },
    {
      id: 'chat',
      icon: <GrChat />,
      label: 'Chat',
      path: '/chat',
    },
    {
      id: 'commerce',
      icon: <GrShop />,
      label: 'Commerce',
      path: '/commerce',
      routes: [
        { id: 'commerce-shop', label: 'Shop', path: '/commerce/shop' },
        {
          id: 'commerce-checkout',
          label: 'Checkout',
          path: '/commerce/checkout',
        },
        { id: 'commerce-cart', label: 'Cart', path: '/commerce/cart' },
        { id: 'commerce-cards', label: 'Cards', path: '/commerce/cards' },
      ],
    },
    {
      id: 'contacts',
      icon: <GrContactInfo />,
      label: 'Contacts',
      path: '/contacts',
    },
    {
      id: 'dashboard',
      icon: <GrDashboard />,
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      id: 'email',
      icon: <GrMail />,
      label: 'Email',
      path: '/email',
    },
    {
      id: 'notes',
      icon: <GrNotes />,
      label: 'Notes',
      path: '/notes',
    },
    {
      id: 'profile',
      icon: <GrUser />,
      label: 'Profile',
      path: '/profile',
    },
    {
      id: 'projectManager',
      icon: <GrTasks />,
      label: 'Project Manager',
      path: '/project-manager',
    },
    {
      id: 'tasks',
      icon: <GrTask />,
      label: 'Tasks',
      path: '/tasks',
    },
  ],
};
