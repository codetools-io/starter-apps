import React, { useEffect, useState } from 'react';
import { Box } from 'grommet';
import Theme from 'internal/components/Theme';
import DocsCard from './DocsCard';

function DocsComponentsOverlay({ children, doc }) {
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
          .DocsComponentsOverlay .${componentName} {
            position: relative;
            box-sizing: border-box;
            pointer-events: none;
          }

          .DocsComponentsOverlay .${componentName}:before {
            content: '';
            box-sizing: border-box;
            position: absolute;
            display: block;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background: rgba(51, 65, 92, 0.65);
            z-index: 900000;
          }
          .DocsComponentsOverlay .${componentName}:after {
            content: '${componentName}';
            box-sizing: border-box;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            display: flex;
            border: 5px dashed rgba(51, 65, 92, 0.75);
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
      className="DocsComponentsOverlay"
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
export default function DocsComponents({ children, doc, ...props }) {
  return (
    <Box className="DocsComponents">
      <DocsCard height="large" flex={false} {...props}>
        <Box overflow="auto" style={{ position: 'relative' }} fill>
          <Theme>{children}</Theme>
          <DocsComponentsOverlay doc={doc}>
            <Theme>{children}</Theme>
          </DocsComponentsOverlay>
        </Box>
      </DocsCard>
    </Box>
  );
}
