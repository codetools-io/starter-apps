import React, { lazy } from 'react';

export default function DocsTheme({ children, name = 'grayscale' }) {
  const GrayscaleTheme = lazy(() => import('themes/grayscale'));
  const ParadiseTheme = lazy(() => import('themes/paradise'));
  const SunglowTheme = lazy(() => import('themes/sunglow'));
  const CaribbeanTheme = lazy(() => import('themes/caribbean'));

  switch (name) {
    case 'grayscale':
      return <GrayscaleTheme>{children}</GrayscaleTheme>;
    case 'paradise':
      return <ParadiseTheme>{children}</ParadiseTheme>;
    case 'caribbean':
      return <CaribbeanTheme>{children}</CaribbeanTheme>;
    case 'sunglow':
      return <SunglowTheme>{children}</SunglowTheme>;
    default:
      return <GrayscaleTheme>{children}</GrayscaleTheme>;
  }
}
