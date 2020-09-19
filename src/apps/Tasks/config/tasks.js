import {
  Alert,
  Book,
  Checkmark,
  Cycle,
  Home,
  Globe,
  Inbox,
  Organization,
} from 'grommet-icons';

export const categories = [
  { id: 'category-1', name: 'Home', color: 'blue', icon: Home },
  { id: 'category-2', name: 'Work', color: 'green', icon: Organization },
  { id: 'category-3', name: 'Vacation', color: 'aqua', icon: Globe },
  { id: 'category-4', name: 'School', color: 'orange', icon: Book },
];
export const statuses = [
  { id: 'status-1', name: 'Inbox', icon: Inbox, color: 'navy' },
  { id: 'status-2', name: 'Active', icon: Cycle, color: 'blue' },
  { id: 'status-3', name: 'Blocked', icon: Alert, color: 'red' },
  { id: 'status-4', name: 'Complete', icon: Checkmark, color: 'green' },
];
export const tasks = [
  {
    id: 'task-1',
    title: 'a title for the task',
    description: 'a good bit of info about the task',
    status: 'status-1',
    category: 'category-1',
  },
  {
    id: 'task-2',
    title: 'a title for the second task',
    description: 'a good bit of info about the task',
    status: 'status-2',
    category: 'category-2',
  },
  {
    id: 'task-3',
    title: 'a title for the second task',
    description: 'a good bit of info about the task',
    status: 'status-3',
    category: 'category-3',
  },
  {
    id: 'task-4',
    title: 'a title for the second task',
    description: 'a good bit of info about the task',
    status: 'status-4',
    category: 'category-4',
  },
];
