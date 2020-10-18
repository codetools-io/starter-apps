import React, { useMemo } from 'react';
import { Box, Tab, Tabs, Text } from 'grommet';

function DocsNavTab({ icon, title, isActive }) {
  return (
    <Box direction="row" align="center" gap="xsmall" margin="xsmall">
      {icon}
      <Text size="small" color={isActive ? 'control' : 'text'}>
        <strong>{title}</strong>
      </Text>
    </Box>
  );
}
export default function DocsNav({ tabs = [], onChangeTab }) {
  const activeTab = useMemo(() => {
    return tabs?.find((tab) => tab?.isActive) || tabs[0];
  }, [tabs]);

  return (
    <Box className="DocsNav">
      <Tabs activeIndex={activeTab.index} onActive={onChangeTab}>
        {tabs.map((tab) => {
          return tab?.isEnabledFeature ? (
            <Tab key={tab?.title} title={<DocsNavTab {...tab} />}></Tab>
          ) : null;
        })}
      </Tabs>
    </Box>
  );
}
