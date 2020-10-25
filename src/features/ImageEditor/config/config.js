import * as allUsers from './users';
const PUBLIC_URL = process.env.PUBLIC_URL;

export const users = Object.values(allUsers);

export const image = {
  id: 'layer-1',
  type: 'jpg',
  title: 'Canyon With River',
  src: `${PUBLIC_URL}/placeholder/img/places/canyon-with-river.jpg`,
  width: '800px',
  height: '533px',
  filters: [
    {
      key: 'filter-sepia',
      title: 'Sepia',
      name: 'sepia',
      args: [{ key: 'amount', unit: '%', value: 100, min: 0, max: 100 }],
    },
  ],
};

export const filters = [
  {
    key: 'filter-blur',
    title: 'Blur',
    name: 'blur',
    args: [{ key: 'amount', unit: '%', value: 100, min: 0, max: 100 }],
  },
  {
    key: 'filter-brightness',
    title: 'Brightness',
    name: 'brightness',
    args: [{ key: 'amount', unit: '%', value: 100, min: 0, max: 100 }],
  },
  {
    key: 'filter-contrast',
    title: 'Contrast',
    name: 'contrast',
    args: [{ key: 'amount', unit: '%', value: 100, min: 0, max: 100 }],
  },
  {
    key: 'filter-grayscale',
    title: 'Grayscale',
    name: 'grayscale',
    args: [{ key: 'amount', unit: '%', value: 100, min: 0, max: 100 }],
  },
  {
    key: 'filter-hue-rotate',
    title: 'Hue',
    name: 'hue-rotate',
    args: [{ key: 'amount', unit: 'deg', value: 180, min: 0, max: 360 }],
  },
  {
    key: 'filter-invert',
    title: 'Invert',
    name: 'invert',
    args: [{ key: 'amount', unit: '%', value: 100, min: 0, max: 100 }],
  },
  {
    key: 'filter-opacity',
    title: 'Opacity',
    name: 'opacity',
    args: [{ key: 'amount', unit: '%', value: 100, min: 0, max: 100 }],
  },
  {
    key: 'filter-saturate',
    title: 'Saturate',
    name: 'saturate',
    args: [{ key: 'amount', unit: '%', value: 100, min: 0, max: 100 }],
  },
  {
    key: 'filter-sepia',
    title: 'Sepia',
    name: 'sepia',
    args: [{ key: 'amount', unit: '%', value: 100, min: 0, max: 100 }],
  },
];
