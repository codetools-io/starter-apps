import React, { useContext } from 'react';
import { Anchor, ThemeContext } from 'grommet';
import { NavLink as RouterLink } from 'react-router-dom';

import './Link.css';

export default function Link({
  children,
  className = '',
  to,
  href,
  path,
  ...props
}) {
  const theme = useContext(ThemeContext);

  if (href) {
    return (
      <Anchor
        className={`Link ${className}`}
        href={href}
        label={children}
        {...props}
      />
    );
  }

  return (
    <RouterLink
      className={`Link ${className}`}
      to={to || path}
      style={{
        ...theme.anchor,
        color: theme.global.colors['brand-alt'],
      }}
      activeStyle={{
        ...theme.anchor,
        color: theme.global.colors['brand'],
      }}
      {...props}
    >
      {children}
    </RouterLink>
  );
}
