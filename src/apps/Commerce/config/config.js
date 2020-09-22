import { StatusGood } from 'grommet-icons';

const { PUBLIC_URL } = process.env;

export const products = [
  {
    id: 'store-product-1',
    title: 'Coffee',
    description:
      'Reprehenderit in sint eiusmod esse Lorem laboris cillum nostrud ut quis ipsum non duis magna. Ea sit non id qui minim do nisi tempor ad. Proident ipsum aliqua nisi magna reprehenderit deserunt exercitation veniam laborum ad est aliquip amet. Culpa ullamco id esse culpa exercitation. Velit amet aliqua cillum tempor dolor laborum laborum. Tempor do officia ex enim anim. Labore do qui est occaecat fugiat et anim id laboris.',
    image: `${PUBLIC_URL}/placeholder/img/food/coffee-1200xauto.jpg`,
    price: 10.99,
    rating: 5.0,
    categoryId: 'store-category-3',
    brandId: 'store-brand-4',
  },
  {
    id: 'store-product-2',
    title: 'Honey',
    description:
      'Reprehenderit in sint eiusmod esse Lorem laboris cillum nostrud ut quis ipsum non duis magna. Ea sit non id qui minim do nisi tempor ad. Proident ipsum aliqua nisi magna reprehenderit deserunt exercitation veniam laborum ad est aliquip amet. Culpa ullamco id esse culpa exercitation. Velit amet aliqua cillum tempor dolor laborum laborum. Tempor do officia ex enim anim. Labore do qui est occaecat fugiat et anim id laboris.',
    image: `${PUBLIC_URL}/placeholder/img/food/honey-1200xauto.jpg`,
    price: 200.99,
    rating: 4.1,
    categoryId: 'store-category-4',
    brandId: 'store-brand-2',
  },
  {
    id: 'store-product-3',
    title: 'Onions',
    description:
      'Reprehenderit in sint eiusmod esse Lorem laboris cillum nostrud ut quis ipsum non duis magna. Ea sit non id qui minim do nisi tempor ad. Proident ipsum aliqua nisi magna reprehenderit deserunt exercitation veniam laborum ad est aliquip amet. Culpa ullamco id esse culpa exercitation. Velit amet aliqua cillum tempor dolor laborum laborum. Tempor do officia ex enim anim. Labore do qui est occaecat fugiat et anim id laboris.',
    image: `${PUBLIC_URL}/placeholder/img/food/onion-1200xauto.jpg`,
    price: 50.99,
    rating: 3.2,
    categoryId: 'store-category-2',
    brandId: 'store-brand-1',
  },
  {
    id: 'store-product-4',
    title: 'Strawberries',
    description:
      'Reprehenderit in sint eiusmod esse Lorem laboris cillum nostrud ut quis ipsum non duis magna. Ea sit non id qui minim do nisi tempor ad. Proident ipsum aliqua nisi magna reprehenderit deserunt exercitation veniam laborum ad est aliquip amet. Culpa ullamco id esse culpa exercitation. Velit amet aliqua cillum tempor dolor laborum laborum. Tempor do officia ex enim anim. Labore do qui est occaecat fugiat et anim id laboris.',
    image: `${PUBLIC_URL}/placeholder/img/food/strawberry-1200xauto.jpg`,
    price: 399.99,
    rating: 2.3,
    categoryId: 'store-category-1',
    brandId: 'store-brand-3',
  },
  {
    id: 'store-product-5',
    title: 'Tea',
    description:
      'Reprehenderit in sint eiusmod esse Lorem laboris cillum nostrud ut quis ipsum non duis magna. Ea sit non id qui minim do nisi tempor ad. Proident ipsum aliqua nisi magna reprehenderit deserunt exercitation veniam laborum ad est aliquip amet. Culpa ullamco id esse culpa exercitation. Velit amet aliqua cillum tempor dolor laborum laborum. Tempor do officia ex enim anim. Labore do qui est occaecat fugiat et anim id laboris.',
    image: `${PUBLIC_URL}/placeholder/img/food/tea-1200xauto.jpg`,
    price: 6000.99,
    rating: 1.4,
    categoryId: 'store-category-3',
    brandId: 'store-brand-4',
  },
  {
    id: 'store-product-6',
    title: 'Raspberries',
    description:
      'Reprehenderit in sint eiusmod esse Lorem laboris cillum nostrud ut quis ipsum non duis magna. Ea sit non id qui minim do nisi tempor ad. Proident ipsum aliqua nisi magna reprehenderit deserunt exercitation veniam laborum ad est aliquip amet. Culpa ullamco id esse culpa exercitation. Velit amet aliqua cillum tempor dolor laborum laborum. Tempor do officia ex enim anim. Labore do qui est occaecat fugiat et anim id laboris.',
    image: `${PUBLIC_URL}/placeholder/img/food/raspberry-1200xauto.jpg`,
    price: 6000.99,
    rating: 4.8,
    categoryId: 'store-category-1',
    brandId: 'store-brand-2',
  },
];

export const categories = [
  {
    id: 'store-category-1',
    name: 'fruits',
  },
  {
    id: 'store-category-2',
    name: 'vegetables',
  },
  {
    id: 'store-category-3',
    name: 'beverages',
  },
  {
    id: 'store-category-4',
    name: 'organic',
  },
  {
    id: 'store-category-5',
    name: 'breads',
  },
];

export const brands = [
  {
    id: 'store-brand-1',
    name: 'Some Food Company',
  },
  {
    id: 'store-brand-2',
    name: 'Another Food Company',
  },
  {
    id: 'store-brand-3',
    name: 'That Food Company',
  },
  {
    id: 'store-brand-4',
    name: 'New Food Company',
  },
];

export const cart = [];

export const notifications = [];
