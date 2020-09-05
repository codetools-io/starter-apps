import * as users from './users';

export const categories = [
  { id: 'category-1', name: 'Accounting' },
  { id: 'category-2', name: 'Engineering' },
  { id: 'category-3', name: 'Marketing' },
  { id: 'category-4', name: 'Sales' },
];

export const labels = [
  { id: 'label-1', name: 'Label 1', color: 'red' },
  { id: 'label-2', name: 'Label 2', color: 'orange' },
  { id: 'label-3', name: 'Label 3', color: 'blue' },
  { id: 'label-4', name: 'Label 4', color: 'yellow' },
  { id: 'label-5', name: 'Label 5', color: 'green' },
];

export const statuses = [
  { id: 'status-1', name: 'Inbox' },
  { id: 'status-2', name: 'Active' },
  { id: 'status-3', name: 'Complete' },
];

export const tasks = [
  {
    id: 'task-1',
    projectId: 'project-1',
    title: 'example task #1',
    description:
      'A longer and more verbose description for example description for task #1',
    attachments: [],
    comments: [],
    history: [],
    labels: [labels[1], labels[2]],
    ownerId: 'user-1',
    owner: users.user1,
    dueDate: 1599135995778,
    statusId: 'status-1',
  },
  {
    id: 'task-2',
    projectId: 'project-1',
    title: 'example task #2',
    description:
      'A longer and more verbose description for example description for task #1',
    attachments: [],
    comments: [],
    history: [],
    labels: [labels[3], labels[4]],
    ownerId: null,
    owner: null,
    dueDate: 1599135995778,
    statusId: 'status-1',
  },
];

export const projects = [
  {
    id: 'project-1',
    name: 'Release new website',
    type: 'Public',
    category: 'category-3',
    progress: 50,
    tasks,
    statuses,
  },
  {
    id: 'project-2',
    name: 'Build new product',
    type: 'Private',
    category: 'category-2',
    progress: 75,
    tasks: [],
    statuses: [],
  },
  {
    id: 'project-3',
    name: 'Launch email campaign',
    type: 'Private',
    category: 'category-3',
    progress: 75,
    tasks: [],
    statuses: [],
  },
  {
    id: 'project-4',
    name: 'Consolidate sales reports',
    type: 'Private',
    category: 'category-4',
    progress: 75,
    tasks: [],
    statuses: [],
  },
];
