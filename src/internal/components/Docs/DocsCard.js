import React from 'react';
import { Card } from 'grommet';

export default function DocsCard({ children, ...props }) {
  return (
    <Card className="DocsCard" background="white" {...props}>
      {children}
    </Card>
  );
}
