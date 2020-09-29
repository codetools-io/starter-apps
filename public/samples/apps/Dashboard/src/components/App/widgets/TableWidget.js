import React from 'react';
import {
  Box,
  Card,
  Heading,
  Paragraph,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from 'grommet';

export default function TableWidget({
  id,
  title,
  columns,
  data,
  description,
  ...props
}) {
  return (
    <Card
      background="white"
      pad="medium"
      gap="medium"
      elevation="none"
      border
      {...props}
    >
      {title && (
        <Heading level="4" margin="none">
          {title}
        </Heading>
      )}

      <Box gap="medium">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => {
                return (
                  <TableCell key={`tw-column-${id}-${index}`} scope="col">
                    {column}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((cells, index) => {
              return (
                <TableRow key={`tw-row-${id}-${index}`} gap="xsmall">
                  {cells.map((cell, cIndex) => {
                    return (
                      <TableCell
                        key={`tw-cell-${id}-${index}-${cIndex}`}
                        scope="row"
                      >
                        {cell}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>

      {description && (
        <Paragraph margin="none" color="dark-6">
          {description}
        </Paragraph>
      )}
    </Card>
  );
}
