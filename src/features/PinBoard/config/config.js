import * as allUsers from './users';

export const users = Object.values(allUsers);

export const board = {
  height: 500,
  width: 500,
};

export const notes = [
  { id: 'note-1', title: 'Note #1', x: 25, y: 25, width: 225, height: 75 },
  { id: 'note-2', title: 'Note #2', x: 275, y: 25, width: 225, height: 75 },
  { id: 'note-3', title: 'Note #3', x: 525, y: 25, width: 225, height: 75 },
  { id: 'note-4', title: 'Note #4', x: 775, y: 25, width: 225, height: 75 },
];
