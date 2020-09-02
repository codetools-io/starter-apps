import { Cart, Chat, Mail, Tasks } from 'grommet-icons';

export const widgets = [
  {
    id: 'dashboard-progress-list-1',
    type: 'ProgressList',
    title: 'Goals',
    description: 'Company financial goals',
    data: [
      { value: 25, label: 'Month' },
      { value: 75, label: 'Quarter' },
      { value: 50, label: 'Year' },
    ],
    section: 'section-1',
  },
  {
    id: 'dashboard-table-1',
    type: 'Table',
    title: 'New Users',
    description: 'Registered within the last 15 days',
    columns: ['First Name', 'Last Name', ' Email'],
    data: [
      ['Jane', 'Doe', 'jdoe@example.com'],
      ['Bill', 'Smith', 'bsmith@example.com'],
      ['John', 'Doe', 'jdoe@example.com'],
      ['Suzy', 'Q', 'suzyq@example.com'],
    ],
    section: 'section-1',
  },
  {
    id: 'dashboard-count-1',
    type: 'Count',
    label: 'Unread Email',
    value: 7,
    icon: Mail,
    color: 'purple',
    section: 'section-2',
  },
  {
    id: 'dashboard-count-2',
    type: 'Count',
    label: 'Unread Messages',
    value: 3,
    icon: Chat,
    color: 'blue',
    section: 'section-2',
  },
  {
    id: 'dashboard-count-3',
    type: 'Count',
    label: 'Orders',
    value: 3,
    icon: Cart,
    color: 'green',
    section: 'section-2',
  },
  {
    id: 'dashboard-progress-1',
    type: 'Progress',
    title: 'Sprint Completion',
    icon: Tasks,
    data: { value: 66, label: 'Sprint 64' },
    section: 'section-3',
  },
  {
    id: 'dashboard-map-1',
    section: 'section-4',
    type: 'Map',
    title: 'Traffic',
    description: 'Location of active users',
    data: {
      continents: [
        {
          name: 'North America',
          color: 'brand-alt-1',
        },
        {
          name: 'Africa',
          color: 'brand-alt-1',
        },
        {
          name: 'Australia',
          color: 'brand-alt-1',
        },
      ],
      places: [
        {
          name: 'Washington, D.C.',
          location: [38.898748, -77.037684],
          color: 'brand-1',
        },
        {
          name: 'Cape Town',
          location: [33.9249, 18.4241],
          color: 'brand-1',
        },
        {
          name: 'Sydney',
          location: [-33.8830555556, 151.216666667],
          color: 'brand-1',
        },
      ],
    },
  },
];

export const sections = [
  {
    id: 'section-1',
    title: 'Status',
  },
  {
    id: 'section-2',
    title: 'Notifications',
  },
  {
    id: 'section-3',
    title: 'Progress',
  },
  {
    id: 'section-4',
    title: 'Analytics',
  },
];
