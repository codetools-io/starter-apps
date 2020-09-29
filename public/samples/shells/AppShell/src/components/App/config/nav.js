import React from 'react';
import {
  Alert,
  Globe,
  Group,
  Install,
  DocumentPerformance,
  Home,
  SettingsOption,
} from 'grommet-icons';

export const nav = {
  sections: [
    {
      id: 'section-1',
      name: 'First Section',
      routes: [
        {
          id: 'home',
          icon: <Home size="16px" />,
          label: 'Home',
          path: '/app-shell/home',
        },
        {
          id: 'members',
          icon: <Group size="16px" />,
          label: 'Members',
          path: '/app-shell/members',
        },
        {
          id: 'orders',
          icon: <Install size="16px" />,
          label: 'Orders',
          path: '/app-shell/orders',
        },
        {
          id: 'reports',
          icon: <DocumentPerformance size="16px" />,
          label: 'Reports',
          path: '/app-shell/reports',
          routes: [
            {
              id: 'reports-week',
              label: 'Weekly',
              path: '/app-shell/reports/week',
            },
            {
              id: 'reports-month',
              label: 'Monthly',
              path: '/app-shell/reports/month',
            },
            {
              id: 'reports-quarter',
              label: 'Quarterly',
              path: '/app-shell/reports/quarter',
            },
            {
              id: 'reports-year',
              label: 'Yearly',
              path: '/app-shell/reports/year',
            },
          ],
        },
      ],
    },
    {
      id: 'section-2',
      name: 'Second Section',
      routes: [
        {
          id: 'alerts',
          icon: <Alert size="16px" />,
          label: 'Alerts',
          path: '/app-shell/alerts',
        },
        {
          id: 'locations',
          icon: <Globe size="16px" />,
          label: 'Locations',
          path: '/app-shell/locations',
        },
        {
          id: 'settings',
          icon: <SettingsOption size="16px" />,
          label: 'Settings',
          path: '/app-shell/settings',
        },
      ],
    },
  ],
};
