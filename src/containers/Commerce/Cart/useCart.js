import { useMemo, useState } from 'react';
import accounting from 'accounting';
const { PUBLIC_URL } = process.env;

export default function useCart() {
  const [products] = useState([
    {
      id: 'product-1',
      title: 'Coffee',
      description:
        'Reprehenderit in sint eiusmod esse Lorem laboris cillum nostrud ut quis ipsum non duis magna. Ea sit non id qui minim do nisi tempor ad. Proident ipsum aliqua nisi magna reprehenderit deserunt exercitation veniam laborum ad est aliquip amet. Culpa ullamco id esse culpa exercitation. Velit amet aliqua cillum tempor dolor laborum laborum. Tempor do officia ex enim anim. Labore do qui est occaecat fugiat et anim id laboris.',
      image: `${PUBLIC_URL}/placeholder/img/food/coffee-1200xauto.jpg`,
      price: 10.99,
      quantity: 3,
    },
    {
      id: 'product-2',
      title: 'Honey',
      description:
        'Reprehenderit in sint eiusmod esse Lorem laboris cillum nostrud ut quis ipsum non duis magna. Ea sit non id qui minim do nisi tempor ad. Proident ipsum aliqua nisi magna reprehenderit deserunt exercitation veniam laborum ad est aliquip amet. Culpa ullamco id esse culpa exercitation. Velit amet aliqua cillum tempor dolor laborum laborum. Tempor do officia ex enim anim. Labore do qui est occaecat fugiat et anim id laboris.',
      image: `${PUBLIC_URL}/placeholder/img/food/honey-1200xauto.jpg`,
      price: 200.99,
      quantity: 3,
    },
    {
      id: 'product-3',
      title: 'Onions',
      description:
        'Reprehenderit in sint eiusmod esse Lorem laboris cillum nostrud ut quis ipsum non duis magna. Ea sit non id qui minim do nisi tempor ad. Proident ipsum aliqua nisi magna reprehenderit deserunt exercitation veniam laborum ad est aliquip amet. Culpa ullamco id esse culpa exercitation. Velit amet aliqua cillum tempor dolor laborum laborum. Tempor do officia ex enim anim. Labore do qui est occaecat fugiat et anim id laboris.',
      image: `${PUBLIC_URL}/placeholder/img/food/onion-1200xauto.jpg`,
      price: 3000.99,
      quantity: 1,
    },
    {
      id: 'product-5',
      title: 'Strawberries',
      description:
        'Reprehenderit in sint eiusmod esse Lorem laboris cillum nostrud ut quis ipsum non duis magna. Ea sit non id qui minim do nisi tempor ad. Proident ipsum aliqua nisi magna reprehenderit deserunt exercitation veniam laborum ad est aliquip amet. Culpa ullamco id esse culpa exercitation. Velit amet aliqua cillum tempor dolor laborum laborum. Tempor do officia ex enim anim. Labore do qui est occaecat fugiat et anim id laboris.',
      image: `${PUBLIC_URL}/placeholder/img/food/strawberry-1200xauto.jpg`,
      price: 500.99,
      quantity: 7,
    },
    {
      id: 'product-6',
      title: 'Tea',
      description:
        'Reprehenderit in sint eiusmod esse Lorem laboris cillum nostrud ut quis ipsum non duis magna. Ea sit non id qui minim do nisi tempor ad. Proident ipsum aliqua nisi magna reprehenderit deserunt exercitation veniam laborum ad est aliquip amet. Culpa ullamco id esse culpa exercitation. Velit amet aliqua cillum tempor dolor laborum laborum. Tempor do officia ex enim anim. Labore do qui est occaecat fugiat et anim id laboris.',
      image: `${PUBLIC_URL}/placeholder/img/food/tea-1200xauto.jpg`,
      price: 6000.99,
      quantity: 2,
    },
  ]);

  const lineItems = useMemo(() => {
    return products.map((product) => {
      const total = product.quantity * product.price;
      return {
        ...product,
        priceLabel: accounting.formatMoney(product.price),
        total,
        totalLabel: accounting.formatMoney(total),
      };
    });
  }, [products]);

  const total = useMemo(() => {
    return lineItems.reduce((accum, lineItem) => accum + lineItem.total, 0);
  }, [lineItems]);

  const totalLabel = useMemo(() => {
    return accounting.formatMoney(total);
  }, [total]);

  const store = useMemo(() => {
    return {
      lineItems,
      products,
      total,
      totalLabel,
    };
  }, [lineItems, products, total, totalLabel]);

  return store;
}
