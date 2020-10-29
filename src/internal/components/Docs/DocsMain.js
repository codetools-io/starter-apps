import React, { useMemo, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from 'grommet';

import useRouter from 'internal/hooks/useRouter';
import DocsAbout from './DocsAbout';
import DocsCode from './DocsCode';
import DocsTheme from './DocsTheme';
import DocsPreview from './DocsPreview';
import DocsHooks from './DocsHooks';
import DocsDomain from './DocsDomain';
import DocsProps from './DocsProps';
import DocsActions from './DocsActions';
import DocsNav from './DocsNav';

export default function DocsMain({
  children,
  files = [],
  themes = {},
  doc,
  componentProps = {},
  ...props
}) {
  const { queryParams, setQueryParam, url } = useRouter();
  const [actions, setActions] = useState([]);
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
        Component: DocsDomain,
        title: 'Domain',
        key: 'domain',
        index: 3,
        isEnabledFeature: !!doc?.domain,
        isActive: queryParams?.mode === 'domain',
      },
      {
        Component: DocsHooks,
        title: 'Hooks',
        key: 'hooks',
        index: 4,
        isEnabledFeature: !!doc?.hooks,
        isActive: queryParams?.mode === 'hooks',
      },
      {
        Component: DocsProps,
        title: 'Props',
        key: 'props',
        index: 5,
        isEnabledFeature: !!doc?.props,
        isActive: queryParams?.mode === 'props',
      },
      {
        Component: DocsTheme,
        title: 'Theme',
        key: 'theme',
        index: 6,
        isEnabledFeature: !!children,
        isActive: queryParams?.mode === 'theme',
      },
    ];
  }, [queryParams, children, doc, files]);

  function onChangeTab(tabIndex) {
    if (!tabs[tabIndex]?.isActive) {
      setActions([]);
      setQueryParam('mode', tabs[tabIndex]?.title?.toLowerCase());
    }
  }

  return (
    <Box className="DocsMain" gap="small" flex={false} {...props}>
      <Box direction="row" justify="between">
        <DocsNav tabs={tabs} onChangeTab={onChangeTab} />
        <DocsActions actions={actions} />
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
                  themes={themes}
                  loadActions={setActions}
                  {...componentProps}
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
