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
          path: '/apps/calendar',
        },
        {
          id: 'chat',
          icon: <Chat size="16px" />,
          label: 'Chat',
          path: '/apps/chat',
        },
        {
          id: 'commerce',
          icon: <Shop size="16px" />,
          label: 'Commerce',
          path: '/apps/commerce',
          routes: [
            {
              id: 'commerce-store',
              label: 'Store',
              path: '/apps/commerce/store',
            },
            {
              id: 'commerce-checkout',
              label: 'Checkout',
              path: '/apps/commerce/checkout',
            },
            { id: 'commerce-cart', label: 'Cart', path: '/apps/commerce/cart' },
          ],
        },
        {
          id: 'contacts',
          icon: <ContactInfo size="16px" />,
          label: 'Contacts',
          path: '/apps/contacts',
        },
        {
          id: 'dashboard',
          icon: <Dashboard size="16px" />,
          label: 'Dashboard',
          path: '/apps/dashboard',
        },
        {
          id: 'email',
          icon: <Mail size="16px" />,
          label: 'Email',
          path: '/apps/email',
        },
        {
          id: 'notes',
          icon: <Notes size="16px" />,
          label: 'Notes',
          path: '/apps/notes',
        },
        {
          id: 'profile',
          icon: <User size="16px" />,
          label: 'Profile',
          path: '/apps/profile',
        },
        {
          id: 'projectManager',
          icon: <Tasks size="16px" />,
          label: 'Project Manager',
          path: '/apps/project-manager',
        },
      ],
    },
    {
      id: 'section-2',
      name: 'Shells',
      routes: [
        {
          id: 'appShell',
          icon: <Template size="16px" />,
          label: 'App Shell',
          path: '/shells/app-shell',
        },
      ],
    },
  ],
};
