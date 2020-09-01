import React from 'react';
import {
  Box,
  Button,
  Card,
  Image,
  Paragraph,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableBody,
  TableFooter,
  Text,
  TextInput,
} from 'grommet';
import { FormClose } from 'grommet-icons';
import useCart from './useCart';

export default function Cart({ children, ...props }) {
  const { lineItems, totalLabel, removeProduct, updateProduct } = useCart();

  return (
    <Box className="Cart" pad="medium" fill>
      <Card background="white" pad="medium">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell scope="col"></TableCell>
              <TableCell scope="col"></TableCell>
              <TableCell scope="col">
                <Text weight="bold">Product</Text>
              </TableCell>
              <TableCell scope="col">
                <Text weight="bold">Price</Text>
              </TableCell>
              <TableCell scope="col">
                <Text weight="bold">Quantity</Text>
              </TableCell>
              <TableCell scope="col">
                <Text weight="bold">Total</Text>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lineItems.map((lineItem) => (
              <TableRow key={`cart-line-item-${lineItem.id}`}>
                <TableCell scope="row">
                  <Button
                    icon={<FormClose />}
                    onClick={() => removeProduct(lineItem.id)}
                  />
                </TableCell>
                <TableCell scope="row">
                  <Box height="small" width="small">
                    <Image src={lineItem.image} fit="contain" />
                  </Box>
                </TableCell>
                <TableCell scope="row">
                  <Text weight="bold">{lineItem.title}</Text>
                  <Paragraph color="dark-6">{lineItem.description}</Paragraph>
                </TableCell>
                <TableCell scope="row">
                  <Text weight="bold">{lineItem.priceLabel}</Text>
                </TableCell>
                <TableCell scope="row">
                  <Box width="xsmall">
                    <TextInput
                      type="number"
                      value={lineItem.quantity}
                      onChange={(event) => {
                        updateProduct({
                          id: lineItem.id,
                          quantity: event.target.value,
                        });
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell scope="row">
                  <Text weight="bold">{lineItem.totalLabel}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <Text weight="bold">Total</Text>
              </TableCell>
              <TableCell>
                <Text weight="bold">{totalLabel}</Text>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    </Box>
  );
}
