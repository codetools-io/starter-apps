import React from 'react';
import {
  Calendar,
  Chat,
  ContactInfo,
  Dashboard,
  Mail,
  Notes,
  Group,
  Shop,
  Tasks,
  Template,
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
          feature: 'APP_CALENDAR',
        },
        {
          id: 'chat',
          icon: <Chat size="16px" />,
          label: 'Chat',
          path: '/apps/chat',
          feature: 'APP_CHAT',
        },
        {
          id: 'commerce',
          icon: <Shop size="16px" />,
          label: 'Commerce',
          path: '/apps/commerce',
          feature: 'APP_COMMERCE',
          routes: [
            {
              id: 'commerce-store',
              label: 'Store',
              path: '/apps/commerce/store',
              feature: 'APP_COMMERCE_STORE',
            },
            {
              id: 'commerce-checkout',
              label: 'Checkout',
              path: '/apps/commerce/checkout',
              feature: 'APP_COMMERCE_CHECKOUT',
            },
            {
              id: 'commerce-cart',
              label: 'Cart',
              path: '/apps/commerce/cart',
              feature: 'APP_COMMERCE_CART',
            },
          ],
        },
        {
          id: 'contacts',
          icon: <ContactInfo size="16px" />,
          label: 'Contacts',
          path: '/apps/contacts',
          feature: 'APP_CONTACTS',
        },
        {
          id: 'dashboard',
          icon: <Dashboard size="16px" />,
          label: 'Dashboard',
          path: '/apps/dashboard',
          feature: 'APP_DASHBOARD',
        },
        {
          id: 'email',
          icon: <Mail size="16px" />,
          label: 'Email',
          path: '/apps/email',
          feature: 'APP_EMAIL',
        },
        {
          id: 'notes',
          icon: <Notes size="16px" />,
          label: 'Notes',
          path: '/apps/notes',
          feature: 'APP_NOTES',
        },

        {
          id: 'projectManager',
          icon: <Tasks size="16px" />,
          label: 'Project Manager',
          path: '/apps/project-manager',
          feature: 'APP_PROJECT_MANAGER',
        },
        {
          id: 'socialMedia',
          icon: <Group size="16px" />,
          label: 'Social Media',
          path: '/apps/social-media',
          feature: 'APP_SOCIAL_MEDIA',
          routes: [
            {
              id: 'socialMedia-profile',
              label: 'Profile',
              path: '/apps/social-media/profile',
              feature: 'APP_SOCIAL_MEDIA_PROFILE',
            },
            {
              id: 'socialMedia-feed',
              label: 'Feed',
              path: '/apps/social-media/feed',
              feature: 'APP_SOCIAL_MEDIA_FEED',
            },
          ],
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
          feature: 'SHELL_APP',
        },
      ],
    },
  ],
};
