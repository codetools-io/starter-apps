import React from 'react';
import { NavLink } from 'react-router-dom';
import { Anchor } from 'grommet';

export function RouterLink({ children, className, to, ...props }) {
  return (
    <NavLink className={className} to={to} exact strict>
      {children}
    </NavLink>
  );
}

export default function Link({ children, ...props }) {
  return <Anchor label={children} as={RouterLink} {...props} />;
}
