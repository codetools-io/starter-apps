import React, { useMemo, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box, Tab, Tabs } from 'grommet';

import useRouter from 'internal/hooks/useRouter';
import DocsCode from './DocsCode';
import DocsPreview from './DocsPreview';
import DocsArchitecture from './DocsArchitecture';
import DocsActions from './DocsActions';

export default function DocsMain({
  children,
  files = [],
  sandboxUrl,
  githubUrl,
  doc,
}) {
  const [fullScreen, setFullScreen] = useState(false);
  const { queryParams, setQueryParam, url } = useRouter();
  const tabs = useMemo(() => {
    return [
      {
        Component: DocsPreview,
        title: 'Preview',
        key: 'preview',
        index: 0,
        isValid: !!children,
        isActive: queryParams?.mode === 'preview' || !queryParams?.mode,
      },
      {
        Component: DocsCode,
        title: 'Code',
        key: 'code',
        index: 1,
        isValid: files?.length,
        isActive: queryParams?.mode === 'code',
      },
      {
        Component: DocsArchitecture,
        title: 'Architecture',
        key: 'architecture',
        index: 2,
        isValid: !!doc?.components,
        isActive: queryParams?.mode === 'architecture',
      },
    ];
  }, [queryParams, children, doc, files]);
  const activeTab = useMemo(() => {
    return tabs?.find((tab) => tab?.isActive) || tabs[0];
  }, [tabs]);

  function switchTab(tabIndex) {
    if (activeTab.index !== tabIndex) {
      setQueryParam('mode', tabs[tabIndex]?.title?.toLowerCase());
    }
  }

  return (
    <Box gap="small" flex={false}>
      <Box direction="row" justify="between">
        <Tabs activeIndex={activeTab.index} onActive={switchTab}>
          {tabs.map((tab) => {
            return tab?.isValid ? (
              <Tab key={tab?.title} title={tab?.title}></Tab>
            ) : null;
          })}
        </Tabs>
        <DocsActions
          githubUrl={githubUrl}
          sandboxUrl={sandboxUrl}
          onExpand={
            activeTab?.key === 'preview' ? () => setFullScreen(true) : null
          }
        />
      </Box>
      <Switch>
        <Route path={`${url}`}>
          {tabs?.map((tab) => {
            const { isActive, Component, title } = tab;
            if (isActive) {
              return (
                <Component
                  key={`tab-content-${title}`}
                  children={children}
                  doc={doc}
                  files={files}
                  fullScreen={fullScreen}
                  onShrink={() => setFullScreen(false)}
                />
              );
            }

            return null;
          })}
        </Route>
      </Switch>
    </Box>
  );
}
