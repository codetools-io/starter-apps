import React, { lazy } from 'react';

export default function DocsTheme({ children, name = 'default' }) {
  const DefaultTheme = lazy(() => import('themes/default'));
  const ParadiseTheme = lazy(() => import('themes/paradise'));
  const SunglowTheme = lazy(() => import('themes/sunglow'));
  const CaribbeanTheme = lazy(() => import('themes/caribbean'));

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
      return <DefaultTheme>{children}</DefaultTheme>;
  }
}
