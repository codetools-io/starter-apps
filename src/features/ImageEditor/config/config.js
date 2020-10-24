import * as allUsers from './users';
const PUBLIC_URL = process.env.PUBLIC_URL;

export const users = Object.values(allUsers);

export const layers = [
  {
    id: 'layer-1',
    type: 'image',
    name: 'Layer 1',
    settings: {
      src: `${PUBLIC_URL}/placeholder/img/places/canyon-with-river.jpg`,
      width: '800px',
      height: '533px',
      alt: 'Layer 1',
    },
    filters: ['sepia(1)'],
  },
];

export const document = {
  name: 'Canyon With River',
};

export const filters = [[{ id: 'filter-1', name: 'Black & White' }]];
