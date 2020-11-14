import { deepMerge } from 'grommet/utils';
import { base } from 'grommet/themes';
import { theme as _theme } from './theme';

export const theme = deepMerge(base, _theme);
