import React, { useMemo, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box, Tab, Tabs, Text } from 'grommet';

import useRouter from 'internal/hooks/useRouter';
import DocsAbout from './DocsAbout';
import DocsCode from './DocsCode';
import DocsPreview from './DocsPreview';
import DocsComponents from './DocsComponents';
import DocsHooks from './DocsHooks';
import DocsDomain from './DocsDomain';
import DocsActions from './DocsActions';

function DocsMainTab({ icon, title, isActive }) {
  return (
    <Box direction="row" align="center" gap="xsmall" margin="xsmall">
      {icon}
      <Text size="small" color={isActive ? 'control' : 'text'}>
        <strong>{title}</strong>
      </Text>
    </Box>
  );
}
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
        isEnabledFeature: !!children,
        isActive: queryParams?.mode === 'preview' || !queryParams?.mode,
      },
      {
        Component: DocsAbout,
        title: 'About',
        key: 'about',
        index: 1,
        isEnabledFeature: files?.length,
        isActive: queryParams?.mode === 'about',
      },
      {
        Component: DocsCode,
        title: 'Code',
        key: 'code',
        index: 2,
        isEnabledFeature: files?.length,
        isActive: queryParams?.mode === 'code',
      },
      {
        Component: DocsComponents,
        title: 'Components',
        key: 'components',
        index: 3,
        isEnabledFeature: !!doc?.components,
        isActive: queryParams?.mode === 'components',
      },
      {
        Component: DocsDomain,
        title: 'Domain',
        key: 'domain',
        index: 4,
        isEnabledFeature: !!doc?.domain,
        isActive: queryParams?.mode === 'domain',
      },
      {
        Component: DocsHooks,
        title: 'Hooks',
        key: 'hooks',
        index: 5,
        isEnabledFeature: !!doc?.hooks,
        isActive: queryParams?.mode === 'hooks',
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
            return tab?.isEnabledFeature ? (
              <Tab key={tab?.title} title={<DocsMainTab {...tab} />}></Tab>
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
