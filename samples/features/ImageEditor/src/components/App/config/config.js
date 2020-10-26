import * as allUsers from './users';
const PUBLIC_URL = process.env.PUBLIC_URL;

export const users = Object.values(allUsers);

export const image = {
  id: 'layer-1',
  type: 'jpg',
  title: 'Canyon With River',
  src: `${PUBLIC_URL}/placeholder/img/places/canyon-with-river.jpg`,
  width: 800,
  height: 533,
};

export const filters = {
  blur: {
    key: 'blur',
    title: 'Blur',
    name: 'blur',
    args: {
      amount: { unit: 'px', value: 100, min: 0, max: 100 },
    },
    applied: false,
  },
  brightness: {
    key: 'brightness',
    title: 'Brightness',
    name: 'brightness',
    args: {
      amount: { unit: '%', value: 100, min: 0, max: 100 },
    },
    applied: false,
  },
  contrast: {
    key: 'contrast',
    title: 'Contrast',
    name: 'contrast',
    args: {
      amount: { unit: '%', value: 100, min: 0, max: 100 },
    },
    applied: false,
  },
  grayscale: {
    key: 'grayscale',
    title: 'Grayscale',
    name: 'grayscale',
    args: {
      amount: { unit: '%', value: 100, min: 0, max: 100 },
    },
    applied: false,
  },
  hue: {
    key: 'hue-rotate',
    title: 'Hue',
    name: 'hue-rotate',
    args: {
      amount: { unit: 'deg', value: 180, min: 0, max: 360 },
    },
    applied: false,
  },
  invert: {
    key: 'invert',
    title: 'Invert',
    name: 'invert',
    args: {
      amount: { unit: '%', value: 100, min: 0, max: 100 },
    },
    applied: false,
  },
  opacity: {
    key: 'opacity',
    title: 'Opacity',
    name: 'opacity',
    args: {
      amount: { unit: '%', value: 100, min: 0, max: 100 },
    },
    applied: false,
  },
  saturate: {
    key: 'saturate',
    title: 'Saturate',
    name: 'saturate',
    args: {
      amount: { unit: '%', value: 100, min: 0, max: 100 },
    },
    applied: false,
  },
  sepia: {
    key: 'sepia',
    title: 'Sepia',
    name: 'sepia',
    args: {
      amount: { unit: '%', value: 100, min: 0, max: 100 },
    },
    applied: false,
  },
};
