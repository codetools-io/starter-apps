import { useContext } from 'react';
import { ThemeContext } from 'grommet';
export default function useColor(color) {
  const theme = useContext(ThemeContext);

  if (color?.startsWith('#') && color?.length === 7) {
    return color;
  } else if (color?.startsWith('#') && color?.length === 4) {
    return color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }

  const currentMode = theme?.dark ? 'dark' : 'light';

  if (typeof theme?.global?.colors?.[color] === 'string') {
    return theme?.global?.colors?.[color];
  } else if (typeof theme?.global?.colors?.[color] === 'object') {
    return theme?.global?.colors?.[color]?.[currentMode];
  }

  return null;
}
