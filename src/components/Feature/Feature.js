import React from 'react';

export default function Feature({ children, name, ...props }) {
  const key = `REACT_APP_FEATURE_${name}`;
  const isActivated = process?.env?.[key]?.toLowerCase?.() === 'true';

  if (isActivated) {
    return children;
  }

  return null;
}
