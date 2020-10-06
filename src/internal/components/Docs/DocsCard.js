import React from 'react';
import { Card } from 'grommet';
import DocsTheme from './DocsTheme';

export default function DocsCard({ children, ...props }) {
  return (
    <Card className="DocsCard" background="white" {...props}>
      <DocsTheme>{children}</DocsTheme>
    </Card>
  );
}
