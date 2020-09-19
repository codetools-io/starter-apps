import React from 'react';
import { Box, Card, Calendar as GrommetCalendar, ThemeContext } from 'grommet';
import { DocsCard } from 'components/Docs';
// import useCalendar from './useCalendar';
import styles from './Calendar.styles';
export default function Calendar({ children }) {
  // const { events } = useCalendar();
  // Once custom days feature is released, this should be rewritten without the ThemeContext.Extend
  return (
    <DocsCard fill>
      <ThemeContext.Extend value={styles}>
        <Box pad="medium" direction="row" justify="center" fill>
          <GrommetCalendar
            className="fill"
            date={new Date().toISOString()}
            onSelect={(date) => {}}
          />
        </Box>
      </ThemeContext.Extend>
    </DocsCard>
  );
}
