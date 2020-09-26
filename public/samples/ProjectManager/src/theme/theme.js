import { deepMerge } from 'grommet/utils';
import { base } from 'grommet/themes';
import { themeExport } from './theme-export';
import { brand } from './brand';

export default deepMerge(base, themeExport, brand);
