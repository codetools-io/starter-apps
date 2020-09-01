import { useCallback, useMemo, useState } from 'react';
import accounting from 'accounting';
import { cart } from 'data';

export default function useCart() {
  const [products, setProducts] = useState(cart.products);

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

  const removeProduct = useCallback(
    (id) => {
      setProducts(products.filter((product) => product.id !== id));
    },
    [products]
  );
  const updateProduct = useCallback(
    (payload) => {
      setProducts(
        products.map((product) => {
          if (product.id !== payload.id) {
            return product;
          }

          return {
            ...product,
            ...payload,
          };
        })
      );
    },
    [products]
  );

  return useMemo(() => {
    return {
      lineItems,
      products,
      total,
      totalLabel,
      updateProduct,
      removeProduct,
    };
  }, [lineItems, products, total, totalLabel, updateProduct, removeProduct]);
}
