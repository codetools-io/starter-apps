import React, { lazy, Suspense } from 'react';

export default function Icon({ name, ...props }) {
  const Icon = lazy(() => import(`./icons/grommet/${name}`));
  return (
    <Suspense fallback="">
      <Icon {...props} />
    </Suspense>
  );
}
