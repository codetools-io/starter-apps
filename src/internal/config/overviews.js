import { nav } from './nav';

const navItems = nav?.sections
  ?.flatMap((section) => {
    return section?.routes;
  })
  .flatMap((sectionItem) => {
    if (sectionItem?.routes) {
      const { routes, ...item } = sectionItem;
      return [item, ...routes];
    }
    return sectionItem;
  })
  .reduce((accum, item) => {
    return {
      ...accum,
      [item?.id]: item,
    };
  }, {});

export const appOverviews = [
  {
    id: 'calendar',
    displayName: 'Calendar',
    description: 'A feature for managing dates, events, and reminders.',
  },
  {
    id: 'commerce-cart',
    displayName: 'Cart',
    description:
      'A feature for showing items that a customer intends to purchase.',
  },
  {
    id: 'chat',
    displayName: 'Chat',
    description: 'A feature for facilitating real-time text communication.',
  },

  {
    id: 'commerce-checkout',
    displayName: 'Checkout',
    description:
      'A feature for showing items that a customer is about to purchase.',
  },
  {
    id: 'contacts',
    displayName: 'Contacts',
    description: 'A feature for managing information about lists of people.',
  },
  {
    id: 'dashboard',
    displayName: 'Dashboard',
    description:
      'A feature for viewing high-level information about systems and organizations.',
  },
  {
    id: 'email',
    displayName: 'Email',
    description: 'A feature for managing email.',
  },
  {
    id: 'social-media-feed',
    displayName: 'Feed',
    description: 'A feature for displaying a stream of live social media posts',
  },
  {
    id: 'notes',
    displayName: 'Notes',
    description: 'A feature for taking notes.',
  },
  {
    id: 'social-media-profile',
    displayName: 'Profile',
    description: 'A feature for showing social information about a person.',
  },
  {
    id: 'project-manager',
    displayName: 'Project Manager',
    description: 'A feature for managing team projects.',
  },
  {
    id: 'commerce-store',
    displayName: 'Store',
    description: 'A feature for showing products to a customer.',
  },
]?.map((overview) => {
  return {
    ...overview,
    link: navItems[overview?.id],
  };
});

export const shellOverviews = [
  {
    id: 'app-shell',
    displayName: 'App Shell',
    description:
      'A wrapper with a logo, navigation, router, notification system, search, and user menu.',
  },
]?.map((overview) => {
  return {
    ...overview,
    link: navItems[overview?.id],
  };
});
