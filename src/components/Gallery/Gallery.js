import React from 'react';
import { Card } from 'grommet';
import GridLayout from 'components/GridLayout';

export default function Gallery({
  children,
  keyPrefix = 'galleryItem',
  ...props
}) {
  const galleryItems = React.Children.toArray(children);
  return (
    <GridLayout {...props}>
      {galleryItems.map((galleryItem, index) => (
        <Card key={`${keyPrefix}-${index}`} background="white" height="small">
          {galleryItem}
        </Card>
      ))}
    </GridLayout>
  );
}
