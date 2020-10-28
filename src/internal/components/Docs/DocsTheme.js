import React, { lazy } from 'react';

export default function DocsTheme({ children, name = 'default', theme }) {
  const DefaultTheme = lazy(() => import('themes/default'));
  const ParadiseTheme = lazy(() => import('themes/paradise'));
  const SunglowTheme = lazy(() => import('themes/sunglow'));
  const CaribbeanTheme = lazy(() => import('themes/caribbean'));
  const ImportedTheme = lazy(() => import('themes/imported'));

  switch (name) {
    case 'default':
      return <DefaultTheme>{children}</DefaultTheme>;
    case 'paradise':
      return <ParadiseTheme>{children}</ParadiseTheme>;
    case 'caribbean':
      return <CaribbeanTheme>{children}</CaribbeanTheme>;
    case 'sunglow':
      return <SunglowTheme>{children}</SunglowTheme>;
    default:
      return (
        <ImportedTheme name={name} theme={theme}>
          {children}
        </ImportedTheme>
      );
  }
}
