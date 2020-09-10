import React from 'react';
import {
  Calendar,
  Chat,
  ContactInfo,
  Dashboard,
  Mail,
  Notes,
  Shop,
  Tasks,
  Template,
  User,
} from 'grommet-icons';

export const nav = {
  sections: [
    {
      id: 'section-1',
      name: 'Apps',
      routes: [
        {
          id: 'calendar',
          icon: <Calendar size="16px" />,
          label: 'Calendar',
          path: '/calendar',
        },
        {
          id: 'chat',
          icon: <Chat size="16px" />,
          label: 'Chat',
          path: '/chat',
        },
        {
          id: 'commerce',
          icon: <Shop size="16px" />,
          label: 'Commerce',
          path: '/commerce',
          routes: [
            { id: 'commerce-store', label: 'Store', path: '/commerce/store' },
            {
              id: 'commerce-checkout',
              label: 'Checkout',
              path: '/commerce/checkout',
            },
            { id: 'commerce-cart', label: 'Cart', path: '/commerce/cart' },
          ],
        },
        {
          id: 'contacts',
          icon: <ContactInfo size="16px" />,
          label: 'Contacts',
          path: '/contacts',
        },
        {
          id: 'dashboard',
          icon: <Dashboard size="16px" />,
          label: 'Dashboard',
          path: '/dashboard',
        },
        {
          id: 'email',
          icon: <Mail size="16px" />,
          label: 'Email',
          path: '/email',
        },
        {
          id: 'notes',
          icon: <Notes size="16px" />,
          label: 'Notes',
          path: '/notes',
        },
        {
          id: 'profile',
          icon: <User size="16px" />,
          label: 'Profile',
          path: '/profile',
        },
        {
          id: 'projectManager',
          icon: <Tasks size="16px" />,
          label: 'Project Manager',
          path: '/project-manager',
        },
        // {
        //   id: 'tasks',
        //   icon: <Task size="16px" />,
        //   label: 'Tasks',
        //   path: '/tasks',
        // },
      ],
    },
    {
      id: 'section-2',
      name: 'Components',
      routes: [],
    },
    {
      id: 'section-3',
      name: 'Tools',
      routes: [
        {
          id: 'LayoutExplorer',
          icon: <Template size="16px" />,
          label: 'Layout Explorer',
          path: '/layout-explorer',
          title: 'working',
          exact: false,
        },
      ],
    },
  ],
};
