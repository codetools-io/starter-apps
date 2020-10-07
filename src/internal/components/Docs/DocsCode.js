import React, { useEffect, useState } from 'react';
import { Box, Button, Grid } from 'grommet';
import MonacoEditor from '@monaco-editor/react';
import DocsCard from './DocsCard';

const options = {
  fontSize: 16,
  minimap: {
    enabled: false,
  },
  readOnly: true,
};
export default function DocsCode({ files = [] }) {
  const [activeFileIndex, setActiveFileIndex] = useState(null);

  useEffect(() => {
    if (files?.length) {
      setActiveFileIndex(
        files?.findIndex((file) => file?.filename === `${file?.context}.js`)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  return (
    <DocsCard height="large" pad="medium" flex={false}>
      <Box border fill>
        <Grid columns={['auto', 'flex']} rows={['full']} fill>
          <Box overflow={{ vertical: 'auto' }}>
            {files.map((file, index) => {
              return (
                <Box
                  key={`file-${file?.context}-${file?.filepath}`}
                  background={index === activeFileIndex ? 'white' : 'shade-1'}
                  border={[
                    'bottom',
                    {
                      side: 'right',
                      color:
                        index === activeFileIndex ? 'transparent' : 'border',
                    },
                  ]}
                  direction="row"
                  justify="center"
                  pad="small"
                  flex={false}
                >
                  <Button
                    label={file?.filepath}
                    onClick={() => setActiveFileIndex(index)}
                    size="large"
                    fill
                    plain
                  />
                </Box>
              );
            })}
            <Box border="right" flex />
          </Box>
          <Box>
            <MonacoEditor
              language="javascript"
              theme="light"
              height="100%"
              value={files[activeFileIndex]?.content}
              options={options}
            />
          </Box>
        </Grid>
      </Box>
    </DocsCard>
  );
}
