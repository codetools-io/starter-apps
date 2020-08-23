import React from 'react';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CheckBoxGroup,
  Grid,
  Heading,
  Image,
  RadioButtonGroup,
  RangeInput,
  RangeSelector,
  Select,
  Slider,
  Stack,
  Text,
  TextInput,
} from 'grommet';

import AppLayout from 'components/AppLayout';
import GridLayout from 'components/GridLayout';
import Rating from 'components/Rating';
import useStore from './useStore';

function StoreProducts({ products }) {
  return (
    <GridLayout>
      {products?.map((product) => {
        return <StoreProduct key={product.id} {...product} />;
      })}
    </GridLayout>
  );
}

function StoreProduct({ id, price, image, title, ...props }) {
  return (
    <Card elevation="large" {...props}>
      <Stack anchor="top-right" fit>
        <Image fit="cover" src={image} fill />
        <Box
          background="brand"
          pad={{ vertical: 'xsmall', horizontal: 'small' }}
          margin={{ vertical: 'small' }}
        >
          <Text>{price}</Text>
        </Box>
      </Stack>
      <Box pad="small">
        <Heading level={4} margin="none">
          {title}
        </Heading>
      </Box>
    </Card>
  );
}

function StoreSidebar() {
  return (
    <Box gap="medium">
      <Card pad="medium" gap="medium">
        <Heading level={5} margin="none">
          Price
        </Heading>
        <RadioButtonGroup
          name="price"
          options={[
            'Under $25',
            '$25 - $100',
            '$100 - $500',
            'Over $500',
            'Any',
          ]}
        />
      </Card>
      <Card pad="medium" gap="medium">
        <Heading level={5} margin="none">
          Category
        </Heading>
        <CheckBoxGroup
          name="category"
          options={['Automotive', 'Electronics', 'Home', 'Lawn', 'Any']}
        />
      </Card>
      <Card pad="medium" gap="medium">
        <Heading level={5} margin="none">
          Brand
        </Heading>
        <CheckBoxGroup
          name="brand"
          options={[
            'Audi',
            'Chevrolet',
            'Dodge',
            'Ford',
            'Honda',
            'Kia',
            'Land Rover',
            'Lexus',
            'Mazda',
          ]}
        />
      </Card>
      <Card pad="medium" gap="medium">
        <Heading level={5} margin="none">
          Rating
        </Heading>
        <RadioButtonGroup
          name="rating"
          options={[
            {
              value: 5,
              label: <Rating selected={5} />,
            },
            {
              value: 4,
              label: <Rating selected={4} />,
            },
            {
              value: 3,
              label: <Rating selected={3} />,
            },
            {
              value: 2,
              label: <Rating selected={2} />,
            },
            {
              value: 1,
              label: <Rating selected={1} />,
            },
          ]}
        />
      </Card>
    </Box>
  );
}
export default function Store() {
  const { products } = useStore();
  return (
    <Box className="Store" pad="medium" fill>
      <AppLayout>
        <Box gridArea="header">header</Box>
        <Box gridArea="sidebar-header">sidebar-header</Box>
        <Box gridArea="sidebar">
          <StoreSidebar />
        </Box>
        <Box gridArea="sidebar-footer"></Box>
        <Box gridArea="main" pad={{ horizontal: 'medium' }}>
          <StoreProducts products={products} />
        </Box>
      </AppLayout>
    </Box>
  );
}
