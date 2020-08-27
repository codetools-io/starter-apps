import React, { lazy, Suspense } from 'react';
import { Box, Paragraph } from 'grommet';

import useDashboard from './useDashboard';

function DashboardWidget({ type, ...props }) {
  const Component = lazy(() => import(`./widgets/${type}Widget`));
  const fallback = <Paragraph>Loading…</Paragraph>;

  return (
    <Suspense fallback={fallback}>
      <Box flex>
        <Component {...props} />
      </Box>
    </Suspense>
  );
}

function DashboardSection({ id, title, widgets }) {
  return (
    <Box direction="row" gap="medium" justify="stretch">
      {widgets?.map((widget) => {
        return <DashboardWidget key={widget?.id} {...widget} />;
      })}
    </Box>
  );
}
export default function Dashboard() {
  const { widgetsBySection, sections } = useDashboard();
  return (
    <Box className="Dashboard" pad="medium" gap="medium">
      {sections.map((section) => {
        return (
          <DashboardSection
            key={section?.id}
            {...section}
            widgets={widgetsBySection[section?.id]}
          />
        );
      })}
    </Box>
  );
}
