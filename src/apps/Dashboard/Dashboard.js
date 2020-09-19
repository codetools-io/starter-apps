import React, { lazy, Suspense } from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import { DocsTheme } from 'components/Docs';
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
    <Box flex={false} gap="medium">
      {title && (
        <Heading level={3} margin="none">
          {title}
        </Heading>
      )}
      <Box direction="row" gap="medium" justify="stretch">
        {widgets?.map((widget) => {
          return <DashboardWidget key={widget?.id} {...widget} />;
        })}
      </Box>
    </Box>
  );
}
export default function Dashboard() {
  const { widgetsBySection, sections } = useDashboard();
  return (
    <DocsTheme>
      <Box className="Dashboard" pad="medium" gap="large">
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
    </DocsTheme>
  );
}
