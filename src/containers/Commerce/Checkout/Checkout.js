import React from 'react';

import {
  Box,
  Button,
  Card,
  CheckBox,
  Grid,
  Form,
  FormField,
  Heading,
  Select,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  Text,
  TextInput,
} from 'grommet';
import useCheckout from './useCheckout';

export default function Checkout({ children, ...props }) {
  const {
    products,
    lineItems,
    totalLabel,
    billing,
    updateBilling,
  } = useCheckout();

  return (
    <Box pad="medium" fill>
      <Card background="white" pad="medium">
        <Heading level={1}>Order</Heading>
        <Form
          value={billing}
          onChange={(updates) => {
            updateBilling(updates);
          }}
        >
          <Box direction="row" gap="medium">
            <Box gap="medium" width="1/2" flex>
              <Heading level={4} margin="none">
                Billing Details
              </Heading>
              <Box direction="row" gap="small">
                <FormField
                  component={TextInput}
                  name="firstName"
                  label="First Name"
                  required
                />
                <FormField
                  component={TextInput}
                  name="lastName"
                  label="Last Name"
                  required
                />
              </Box>
              <Box gap="small">
                <FormField
                  component={TextInput}
                  name="companyName"
                  label="Company Name"
                />
              </Box>
              <Box direction="row" gap="small">
                <FormField component={TextInput} name="email" label="Email" />
                <FormField component={TextInput} name="mobile" label="Mobile" />
              </Box>
              <Box direction="row" gap="small">
                <FormField
                  component={Select}
                  name="country"
                  label="Country"
                  options={['United States']}
                />
                <FormField component={TextInput} name="city" label="City" />
              </Box>
              <Box gap="small">
                <FormField
                  component={TextInput}
                  name="address1"
                  label="Address"
                />
                <FormField component={TextInput} name="address2" label="" />
              </Box>
              <Box gap="small">
                <CheckBox name="newAccount" label="Create an account?" />
              </Box>
            </Box>
            <Box gap="small" width="1/2" flex>
              <Heading level={4} margin="none">
                Products
              </Heading>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell scope="col">
                      <Text weight="bold">Product</Text>
                    </TableCell>
                    <TableCell scope="col">
                      <Text weight="bold">Total</Text>
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lineItems.map((lineItem) => (
                    <TableRow key={lineItem.id}>
                      <TableCell scope="row">
                        {lineItem.title} ({lineItem.quantity})
                      </TableCell>
                      <TableCell scope="row">{lineItem.totalLabel}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell scope="col">
                      <Text weight="bold">Total</Text>
                    </TableCell>
                    <TableCell scope="col">
                      <Text weight="bold">{totalLabel}</Text>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </Box>
          </Box>
        </Form>
      </Card>
    </Box>
  );
}
