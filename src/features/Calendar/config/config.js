import { date, lorem } from 'faker';
// import * as users from './users';

const today = new Date();
export const events = [
  {
    id: 'event-1',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: today?.toISOString(),
  },
  {
    id: 'event-2',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.recent(60),
  },
  {
    id: 'event-3',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.recent(60),
  },
  {
    id: 'event-4',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.recent(60),
  },
  {
    id: 'event-5',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.recent(60),
  },
  {
    id: 'event-6',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.recent(60),
  },
  {
    id: 'event-7',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.recent(60),
  },
  {
    id: 'event-8',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.recent(60),
  },
  {
    id: 'event-9',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.recent(60),
  },
  {
    id: 'event-10',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.soon(60),
  },
  {
    id: 'event-11',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.soon(60),
  },
  {
    id: 'event-12',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.soon(60),
  },
  {
    id: 'event-13',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.soon(60),
  },
  {
    id: 'event-14',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.soon(60),
  },
  {
    id: 'event-15',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.soon(60),
  },
  {
    id: 'event-16',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.soon(60),
  },
  {
    id: 'event-17',
    name: 'Some event',
    description: lorem?.paragraph(),
    date: date?.soon(60),
  },
];
