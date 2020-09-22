import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CheckBoxGroup,
  Form,
  FormField,
  Grid,
  Heading,
  InfiniteScroll,
  Image,
  RadioButtonGroup,
  Stack,
  Text,
} from 'grommet';
import { FormClose } from 'grommet-icons';
import accounting from 'accounting';
import { titleize } from 'inflection';
import Rating from 'components/Rating';
import useStore from './useStore';

function StoreProducts({ products, addProductToCart }) {
  return (
    <Grid columns="medium" gap="medium" pad={{ vertical: 'medium' }}>
      <InfiniteScroll step={10} items={products}>
        {(product) => {
          return (
            <StoreProduct
              key={product.id}
              addProductToCart={addProductToCart}
              {...product}
            />
          );
        }}
      </InfiniteScroll>
    </Grid>
  );
}

function StoreProduct({
  id,
  price,
  image,
  title,
  description,
  addProductToCart,
  ...props
}) {
  return (
    <Card background="white" elevation="none" border {...props}>
      <Stack anchor="top-right" fit>
        <Image fit="cover" src={image} fill />
        <Box
          background="brand"
          pad={{ vertical: 'xsmall', horizontal: 'small' }}
          margin={{ vertical: 'small' }}
        >
          <Text>{accounting.formatMoney(price)}</Text>
        </Box>
      </Stack>
      <Box pad="small" gap="small">
        <Heading level={4} margin="none">
          {title}
        </Heading>

        <Text truncate>{description}</Text>
        <Button
          label="Add to Cart"
          onClick={() =>
            addProductToCart({ id, price, image, title, description })
          }
          primary
        />
      </Box>
    </Card>
  );
}

function StoreSidebar({ categories, brands, updateFilters, filters }) {
  return (
    <Form onChange={updateFilters} value={filters}>
      <Box gap="medium">
        <Card
          flex={false}
          elevation="none"
          background="white"
          pad="medium"
          gap="medium"
        >
          <Heading level={5} margin="none">
            Price
          </Heading>

          <FormField>
            <RadioButtonGroup
              name="price"
              options={[
                {
                  id: 'price-1',
                  label: 'Under $25',
                  value: '0.00-24.99',
                },
                {
                  id: 'price-2',
                  label: '$25 - $100',
                  value: '25.00-99.99',
                },
                {
                  id: 'price-3',
                  label: '$100 - $500',
                  value: '100.00-499.99',
                },
                {
                  id: 'price-4',
                  label: 'Over $500',
                  value: '500.00-99999999999.99',
                },
                {
                  id: 'price-5',
                  label: 'Any',
                  value: '0.00-99999999999.99',
                },
              ]}
            />
          </FormField>
        </Card>
        <Card
          flex={false}
          elevation="none"
          background="white"
          pad="medium"
          gap="medium"
        >
          <Heading level={5} margin="none">
            Category
          </Heading>
          <FormField>
            <CheckBoxGroup
              name="category"
              options={categories.map((category, index) => ({
                id: category.id,
                label: titleize(category.name),
                value: category.id,
              }))}
            />
          </FormField>
        </Card>
        <Card
          flex={false}
          elevation="none"
          background="white"
          pad="medium"
          gap="medium"
        >
          <Heading level={5} margin="none">
            Brand
          </Heading>
          <FormField>
            <CheckBoxGroup
              name="brand"
              options={brands.map((brand) => ({
                id: brand.id,
                label: titleize(brand.name),
                value: brand.id,
              }))}
            />
          </FormField>
        </Card>
        <Card
          flex={false}
          elevation="none"
          background="white"
          pad="medium"
          gap="medium"
        >
          <Heading level={5} margin="none">
            Rating
          </Heading>
          <FormField>
            <RadioButtonGroup
              name="rating"
              options={[
                {
                  id: 'rating-5',
                  label: <Rating selected={5} />,
                  value: 5,
                },
                {
                  id: 'rating-4',
                  label: <Rating selected={4} />,
                  value: 4,
                },
                {
                  id: 'rating-3',
                  label: <Rating selected={3} />,
                  value: 3,
                },
                {
                  id: 'rating-2',
                  label: <Rating selected={2} />,
                  value: 2,
                },
                {
                  id: 'rating-1',
                  label: <Rating selected={1} />,
                  value: 1,
                },
                {
                  id: 'rating-any',
                  label: 'Any',
                  value: null,
                },
              ]}
            />
          </FormField>
        </Card>
      </Box>
    </Form>
  );
}

function StoreNotification({ id, icon, message, onDismiss }) {
  const Icon = icon;
  const [animation, setAnimation] = useState('fadeIn');
  function dismissNotification() {
    setAnimation('fadeOut');
    setTimeout(() => onDismiss(id), 1000);
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => dismissNotification(), 3000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      gap="small"
      round="medium"
      elevation="medium"
      height={{ min: 'xxsmall' }}
      pad={{ vertical: 'xsmall', horizontal: 'small' }}
      background="brand"
      animation={animation}
    >
      <Box align="center" direction="row" gap="small">
        <Icon />
        <Text>{message}</Text>
      </Box>
      <Button icon={<FormClose />} onClick={dismissNotification} plain />
    </Box>
  );
}

function StoreNotifications({ notifications, onDismiss, ...props }) {
  return (
    <Box align="center" justify="start" gap="small" {...props}>
      {notifications?.map?.((notification) => {
        return (
          <StoreNotification
            key={notification?.id}
            onDismiss={onDismiss}
            {...notification}
          />
        );
      })}
    </Box>
  );
}
export default function Store() {
  const {
    filteredProducts,
    categories,
    brands,
    updateFilters,
    filters,
    addProductToCart,
    notifications,
    dismissNotification,
  } = useStore();

  return (
    <Box>
      <Grid
        className="Store"
        columns={['1/4', '3/4']}
        rows={['auto']}
        areas={[['StoreSidebar', 'StoreListing']]}
        fill
      >
        <Box gridArea="StoreSidebar">
          <StoreSidebar
            categories={categories}
            brands={brands}
            filters={filters}
            updateFilters={updateFilters}
          />
        </Box>

        <Box
          gridArea="StoreListing"
          pad={{ horizontal: 'medium' }}
          style={{ position: 'relative', transform: 'scale(1)' }}
        >
          <StoreProducts
            products={filteredProducts}
            addProductToCart={addProductToCart}
          />

          <StoreNotifications
            notifications={notifications}
            onDismiss={dismissNotification}
            style={{ position: 'sticky', bottom: '95%' }}
          />
        </Box>
      </Grid>
    </Box>
  );
}
