import { useMemo, useState } from 'react';
import { chain } from 'lodash';

import * as data from 'data';

export default function useDashboard() {
  const [tasks] = useState(data?.tasks?.tasks);
  const [statuses] = useState(data?.tasks?.statuses);
  const [categories] = useState(data?.tasks?.categories);

  const categoriesById = useMemo(() => {
    return chain(categories).keyBy('id').value();
  }, [categories]);
  const statusesById = useMemo(() => {
    return chain(statuses).keyBy('id').value();
  }, [statuses]);

  const dashboard = useMemo(() => {
    return {
      categories,
      categoriesById,
      statusesById,
      statuses,
      tasks,
    };
  }, [categories, categoriesById, statusesById, statuses, tasks]);

  return dashboard;
}
