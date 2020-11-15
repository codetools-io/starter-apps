import React, { useMemo } from 'react';
import { Box, Tab, Tabs } from 'grommet';

export default function DocsNav({ tabs = [], onChangeTab }) {
  const activeTab = useMemo(() => {
    return tabs?.find((tab) => tab?.isActive) || tabs[0];
  }, [tabs]);

  return (
    <Box className="DocsNav">
      <Tabs activeIndex={activeTab.index} onActive={onChangeTab}>
        {tabs.map((tab) => {
          return tab?.isEnabledFeature ? (
            <Tab key={tab?.title} title={tab?.title} />
          ) : null;
        })}
      </Tabs>
    </Box>
  );
}
