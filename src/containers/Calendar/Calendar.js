import React from 'react';
import { Box, Card, Calendar as GrommetCalendar, ThemeContext } from 'grommet';
import CalendarLayout from 'components/CalendarLayout';
import styles from './Calendar.styles';
export default function Calendar({ children }) {
  return (
    <Box pad="medium" fill>
      <Card background="white">
        <ThemeContext.Extend value={styles}>
          <CalendarLayout>
            <Box
              gridArea="search"
              pad="medium"
              border={[{ side: 'right' }, { side: 'bottom' }]}
            >
              search
            </Box>
            <Box gridArea="header" pad="medium" border="bottom">
              header
            </Box>
            <Box
              gridArea="sidebar"
              pad="medium"
              border={[{ side: 'right' }, { side: 'bottom' }]}
            >
              sidebar
            </Box>
            <Box gridArea="compose" pad="medium" border="right">
              compose
            </Box>
            <Box
              gridArea="main"
              pad="medium"
              border="bottom"
              direction="row"
              justify="center"
            >
              <GrommetCalendar
                className="fill"
                size="medium"
                date={new Date().toISOString()}
                onSelect={(date) => {}}
              />
            </Box>
            <Box gridArea="footer" pad="medium">
              footer
            </Box>
          </CalendarLayout>
        </ThemeContext.Extend>
      </Card>
    </Box>
  );
}
