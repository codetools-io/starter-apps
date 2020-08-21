import React from 'react';
import { Card } from 'grommet';
import GridLayout from 'components/GridLayout';

export default function Gallery({ children, keyPrefix = 'galleryItem' }) {
  const galleryItems = React.Children.toArray(children);
  return (
    <GridLayout>
      {galleryItems.map((galleryItem, index) => (
        <Card key={`${keyPrefix}-${index}`} pad="large" background="white">
          {galleryItem}
        </Card>
      ))}
    </GridLayout>
  );
}
