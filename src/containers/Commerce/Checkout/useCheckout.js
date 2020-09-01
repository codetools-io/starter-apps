import { useCallback, useMemo, useState } from 'react';
import accounting from 'accounting';
import { checkout } from 'data';
export default function useCheckout() {
  const [products] = useState(checkout.products);
  const [billing, setBilling] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    mobile: '',
    country: '',
    city: '',
    address1: '',
    address2: '',
    newAccount: false,
  });

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

  const updateBilling = useCallback(
    (updates) => {
      setBilling({
        ...billing,
        ...updates,
      });
    },
    [billing]
  );

  const store = useMemo(() => {
    return {
      lineItems,
      products,
      total,
      totalLabel,
      billing,
      updateBilling,
    };
  }, [lineItems, products, total, totalLabel, billing, updateBilling]);

  return store;
}
