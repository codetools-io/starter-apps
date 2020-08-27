import { useMemo, useState } from 'react';
import { chain } from 'lodash';
import { Cart, Chat, Mail, Tasks } from 'grommet-icons';
export default function useDashboard() {
  const [projects] = useState([
    {
      id: 'project-1',
      name: 'That Department',
      type: 'Public',
      category: 'category-1',
      progress: 50,
    },
    {
      id: 'project-2',
      name: 'Some Other Department',
      type: 'Private',
      category: 'category-2',
      progress: 75,
    },
    {
      id: 'project-3',
      name: 'One More Department',
      type: 'Private',
      category: 'category-3',
      progress: 75,
    },
    {
      id: 'project-4',
      name: 'Another Department',
      type: 'Public',
      category: 'category-4',
      progress: 25,
    },
  ]);
  const [categories] = useState([
    { id: 'category-1', name: 'Accounting' },
    { id: 'category-2', name: 'Engineering' },
    { id: 'category-3', name: 'Marketing' },
    { id: 'category-4', name: 'Sales' },
  ]);
  const projectTypes = useMemo(() => {
    return chain(projects).uniqBy('type').map('type').value();
  }, [projects]);
  const categoriesById = useMemo(() => {
    return chain(categories).keyBy('id').value();
  }, [categories]);

  const dashboard = useMemo(() => {
    return { projects, categories, categoriesById, projectTypes };
  }, [projects, categories, categoriesById, projectTypes]);

  return dashboard;
}
