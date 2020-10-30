import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, Text } from 'grommet';
import MonacoEditor from '@monaco-editor/react';
import useRouter from 'internal/hooks/useRouter';
import DocsCard from './DocsCard';
import './DocsCode.css';
const options = {
  fontSize: 16,
  minimap: {
    enabled: false,
  },
  readOnly: true,
  smoothScrolling: true,
};
export default function DocsCode({ files = [] }) {
  const { queryParams, setQueryParam } = useRouter();
  const editor = useRef();
  const [activeFileIndex, setActiveFileIndex] = useState(null);
  const highlightLines = useCallback(
    (editor) => {
      const {
        line_end,
        line_start,
        filepath,
        highlighted_filepath,
      } = queryParams;

      if (filepath === highlighted_filepath && line_end && line_start) {
        const selectionStart = parseInt(line_start, 10);
        const selectionEnd = parseInt(line_end, 10);
        editor.revealLine(selectionStart);
        editor.deltaDecorations(
          [],
          [
            {
              range: {
                startLineNumber: selectionStart,
                endLineNumber: selectionEnd,
              },
              options: {
                isWholeLine: true,
                className: 'DocsCodeSelectedLine',
                linesDecorationsClassName: 'DocsCodeSelectedGutter',
              },
            },
          ]
        );
      }
    },
    [queryParams]
  );
  function onEditorMount(getValue, _editor) {
    editor.current = _editor;
    highlightLines(_editor);
  }

  function onChangeTab({ filepath, index }) {
    setQueryParam('filepath', filepath);
    setActiveFileIndex(index);
    highlightLines(editor.current);
  }

  useEffect(() => {
    if (files?.length && !queryParams?.filepath) {
      setActiveFileIndex(
        files?.findIndex((file) => file?.filepath === `${file?.context}.js`)
      );
    }
    if (files?.length && queryParams?.filepath) {
      setActiveFileIndex(
        files?.findIndex((file) => file?.filepath === queryParams?.filepath)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files, queryParams]);

  useEffect(() => {
    if (editor?.current) {
      highlightLines(editor.current);
    }
  }, [queryParams, editor, highlightLines]);
  return (
    <Box className="DocsCode">
      <DocsCard height="large" pad="medium" flex={false}>
        <Box border={true} fill>
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
                      label={
                        <Text
                          weight={index === activeFileIndex ? 'bold' : 'normal'}
                        >
                          {file?.filepath}
                        </Text>
                      }
                      onClick={() =>
                        onChangeTab({ filepath: file?.filepath, index })
                      }
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
                editorDidMount={onEditorMount}
              />
            </Box>
          </Grid>
        </Box>
      </DocsCard>
    </Box>
  );
}
