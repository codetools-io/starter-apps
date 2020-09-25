import { css } from 'styled-components';

const calendar = ({ className, theme, ...props }) => {
  const currentMode = theme?.dark ? 'dark' : 'light';
  const isFill = className?.split(' ')?.some((cn) => cn === 'fill');
  const borderColorKey = theme.global.colors.border[currentMode];
  const borderColor = theme.global.colors[borderColorKey];
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
        padding-top: ${theme.global.spacing};
        border-bottom: ${theme.global.control.border.width} solid ${borderColor};
      }
      [class^='StyledCalendar__StyledWeeks-'] {
        height: 100%;
        border-left: ${theme.global.control.border.width} solid ${borderColor};
      }
      [class^='StyledCalendar__StyledWeek-'] {
        height: ${100 / 6}%;
      }
      [class^='StyledCalendar__StyledDayContainer-'] {
        width: ${100 / 7}%;
        box-sizing: border-box;
        border-top: ${theme.global.control.border.width} solid ${borderColor};
      }
      [class^='StyledCalendar__StyledDayContainer-'] > button {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        border-right: ${theme.global.control.border.width} solid ${borderColor};
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
