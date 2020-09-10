import {
  Columns,
  Projects,
  Sidebar,
  Split,
  Splits,
  Template,
} from 'grommet-icons';

export const layout = {
  defaultLayoutId: '2-column',
  layouts: [
    {
      id: '2-column',
      title: '2 Column',
      description: 'A 2 column layout with equally sized columns.',
      icon: Split,
      childCount: 2,
      childProps: [{ children: 'column 1' }, { children: 'column 2' }],
      componentType: 'Grid',
      presets: {
        columns: ['1/2', '1/2'],
      },
    },
    {
      id: '3-column',
      title: '3 Column',
      description: 'A 3 column layout with equally sized columns.',
      icon: Splits,
      childCount: 3,
      childProps: [
        { children: 'column 1' },
        { children: 'column 2' },
        { children: 'column 3' },
      ],
      componentType: 'Grid',
      presets: {
        columns: ['1/3', '1/3', '1/3'],
      },
    },
    {
      id: '4-column',
      title: '4 Column',
      description: 'A 4 column layout with equally sized columns.',
      icon: Columns,
      childCount: 4,
      childProps: [
        { children: 'column 1' },
        { children: 'column 2' },
        { children: 'column 3' },
        { children: 'column 4' },
      ],
      componentType: 'Grid',
      presets: {
        columns: ['1/4', '1/4', '1/4', '1/4'],
      },
    },
    {
      id: 'content-with-sidebar',
      title: 'Content with Sidebar',
      description:
        'A two column layout with a main content area, and a secondary sidebar area.',
      icon: Sidebar,
      childCount: 2,
      childProps: [{ children: 'content' }, { children: 'sidebar' }],
      componentType: 'Grid',
      presets: {
        columns: ['2/3', '1/3'],
      },
    },
    {
      id: 'classic',
      componentType: 'Grid',
      title: 'Classic',
      description: 'The classic website layout – header, sidebar, content area',
      icon: Template,
      childCount: 3,
      childProps: [
        { gridArea: 'header', children: 'header' },
        { gridArea: 'sidebar', children: 'sidebar' },
        { gridArea: 'content', children: 'content' },
      ],
      presets: {
        columns: ['1/4', '1/4', '1/4', '1/4'],
        rows: ['auto'],
        areas: [
          ['header', 'header', 'header', 'header'],
          ['content', 'content', 'content', 'sidebar'],
        ],
      },
    },
    {
      id: 'grid',
      componentType: 'Grid',
      title: 'Grid',
      description:
        'A layout of equally sized blocks of content. The number of columns and rows change depending on the size of the window.',
      icon: Projects,
      childCount: 7,
      childProps: [
        { children: 'block 1' },
        { children: 'block 2' },
        { children: 'block 3' },
        { children: 'block 4' },
        { children: 'block 5' },
        { children: 'block 6' },
        { children: 'block 7' },
      ],
      presets: {
        columns: { count: 'fill', size: 'medium' },
        gap: 'medium',
        rows: ['auto'],
      },
    },
    // {
    //   id: 'overlay',
    //   componentType: 'Box',
    //   title: 'Overlay',
    //   description: '(coming soon)',
    //   icon: Layer,
    //   childCount: 0,
    //   presets: {},
    // },
  ],
};
