import { css } from 'styled-components';

const calendar = (props) => {
  const isFill = props?.className?.split(' ')?.some((cn) => cn === 'fill');

  return (
    isFill &&
    css`
      width: 100%;
      height: 100%;
      box-sizing: border-box;

      & > div {
        height: 100%;
      }
      [class^='StyledCalendar__StyledWeeksContainer-'] {
        height: 100%;
      }
      [class^='StyledCalendar__StyledWeeks-'] {
        height: 100%;
      }
      [class^='StyledCalendar__StyledWeek-'] {
        height: ${100 / 6}%;
      }
      [class^='StyledCalendar__StyledDayContainer-'] {
        width: ${100 / 7}%;
        box-sizing: border-box;
      }
      [class^='StyledCalendar__StyledDayContainer-'] > button {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
      [class^='StyledCalendar__StyledDay-'] {
        width: auto;
        height: auto;
        padding: 0.25em 0.5em;
      }
    `
  );
};

export default {
  calendar: {
    extend: calendar,
  },
};
