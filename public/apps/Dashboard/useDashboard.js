import { useMemo, useState } from 'react';
import { groupBy } from 'lodash';
import * as config from './config';

export default function useDashboard() {
  const [widgets] = useState(config?.widgets);
  const [sections] = useState(config?.sections);
  const widgetsBySection = useMemo(() => {
    return groupBy(widgets, 'section');
  }, [widgets]);
  const dashboard = useMemo(() => {
    return { widgets, sections, widgetsBySection };
  }, [widgets, sections, widgetsBySection]);

  return dashboard;
}
