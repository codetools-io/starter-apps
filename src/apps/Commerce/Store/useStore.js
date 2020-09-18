import { useMemo, useState } from 'react';
import { inRange } from 'lodash';
import * as data from 'data';

export default function useStore() {
  const [products] = useState(data?.store?.products);
  const [categories] = useState(data?.store?.categories);
  const [brands] = useState(data?.store?.brands);
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
  const store = useMemo(() => {
    function updateFilters(updates) {
      setFilters(updates);
    }

    return {
      products,
      categories,
      brands,
      filters,
      updateFilters,
      filteredProducts,
    };
  }, [products, categories, brands, filters, filteredProducts]);

  return store;
}
