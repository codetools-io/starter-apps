import { useContext } from 'react';
import { ThemeContext } from 'grommet';
import useColor from 'internal/hooks/useColor';
export default function useContrast(color) {
  const theme = useContext(ThemeContext);
  const { dark, light } = theme.global.colors.text;
  const hexColor = useColor(color);
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? light : dark;
}
