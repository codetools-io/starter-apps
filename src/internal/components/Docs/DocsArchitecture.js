import React, { useEffect, useState } from 'react';
import { Box } from 'grommet';

import DocsCard from './DocsCard';

function DocsArchitectureOverlay({ children, doc }) {
  const [styles, setStyles] = useState('');
  useEffect(() => {
    if (doc?.components) {
      const rootStyles = ``;
      const updatedStyles = Object.entries(doc?.components)
        .map(([componentName, description]) => {
          if (componentName === doc?.id) {
            return ``;
          }

          return `
          .DocsArchitectureOverlay .${componentName} {
            position: relative;
            box-sizing: border-box;
            pointer-events: none;
          }

          .DocsArchitectureOverlay .${componentName}:before {
            content: '';
            box-sizing: border-box;
            position: absolute;
            display: block;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background: rgba(0,0,0,0.5);
            z-index: 900000;
          }
          .DocsArchitectureOverlay .${componentName}:after {
            content: '${componentName}';
            box-sizing: border-box;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            display: flex;
            border: 5px dashed #fff;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-weight: bold;
            z-index: 900001;
          }
        `;
        })
        .join('\n');
      setStyles(`
      ${rootStyles}
      ${updatedStyles}
      `);
    }
  }, [doc]);

  return (
    <Box
      className="DocsArchitectureOverlay"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <style type="text/css">{styles}</style>
      {children}
    </Box>
  );
}
export default function DocsArchitecture({ children, doc, ...props }) {
  return (
    <DocsCard height="large" flex={false} {...props}>
      <Box overflow="auto" style={{ position: 'relative' }} fill>
        {children}
        <DocsArchitectureOverlay doc={doc}>{children}</DocsArchitectureOverlay>
      </Box>
    </DocsCard>
  );
}
