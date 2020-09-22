import { useMemo, useState } from 'react';
import { inRange } from 'lodash';
import { StatusGood } from 'grommet-icons';
import * as config from '../config';

export default function useStore() {
  const [cart, setCart] = useState(config?.cart);
  const [notifications, setNotifications] = useState(config?.notifications);
  const [products] = useState(config?.products);
  const [categories] = useState(config?.categories);
  const [brands] = useState(config?.brands);
  const [filters, setFilters] = useState();

  const filteredProducts = useMemo(() => {
    let filteredProducts = products;

    if (filters?.price) {
      filteredProducts = filteredProducts.filter((product) => {
        const [min, max] = filters?.price?.split('-');
        return inRange(product.price, parseFloat(min), parseFloat(max));
      });
    }

    if (filters?.category) {
      filteredProducts = filteredProducts.filter((product) => {
        return filters?.category?.includes(product.categoryId);
      });
    }

    if (filters?.brand) {
      filteredProducts = filteredProducts.filter((product) => {
        return filters?.brand?.includes(product.brandId);
      });
    }

    if (filters?.rating) {
      filteredProducts = filteredProducts.filter((product) => {
        return filters?.rating === Math.round(product.rating);
      });
    }

    return filteredProducts;
  }, [products, filters]);

  return useMemo(() => {
    function updateFilters(updates) {
      setFilters(updates);
    }
    function addProductToCart(product) {
      setCart([...cart, { ...product }]);
      notifyUser({
        id: `notification-${cart?.length}-${product?.id}`,
        icon: StatusGood,
        message: `${product?.title} was added to your cart`,
      });
    }
    function notifyUser({ id, icon, message }) {
      setNotifications([...notifications, { id, icon, message }]);
    }
    function dismissNotification(notificationId) {
      setNotifications(
        notifications?.filter(
          (notification) => notification?.id !== notificationId
        )
      );
    }
    return {
      products,
      categories,
      brands,
      filters,
      updateFilters,
      filteredProducts,
      addProductToCart,
      notifications,
      notifyUser,
      dismissNotification,
    };
  }, [products, categories, brands, filters, filteredProducts, notifications]);
}
