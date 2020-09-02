import { useMemo, useState } from 'react';
import { groupBy } from 'lodash';
import * as data from 'data';

export default function useDashboard() {
  const [widgets] = useState(data.dashboard.widgets);
  const [sections] = useState(data.dashboard.sections);
  const widgetsBySection = useMemo(() => {
    return groupBy(widgets, 'section');
  }, [widgets]);
  const dashboard = useMemo(() => {
    return { widgets, sections, widgetsBySection };
  }, [widgets, sections, widgetsBySection]);

  return dashboard;
}
