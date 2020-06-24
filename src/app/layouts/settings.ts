import { ThemeOptions, createMuiTheme } from '@material-ui/core/styles';

import Lodash from 'lodash';
import { themeColors } from './theme/themeColors';
import themeOptions from './theme/themeOptions';

function createMatxThemes() {
  let themes: any = {};

  Lodash.forEach(themeColors, (value, key) => {
    const _themeOption: ThemeOptions = Lodash.merge({}, themeOptions, value);
    themes[key] = createMuiTheme(_themeOption);
  });

  return themes;
}

const themes = createMatxThemes();

const AppLayoutSettings = {
  activeLayout: 'layout1',
  activeTheme: 'purple1', // View all valid theme colors inside MatxTheme/themeColors.js
  perfectScrollbar: true,

  themes: themes,

  topbar: {
    show: true,
    fixed: true,
    theme: 'purpleDark1' // View all valid theme colors inside MatxTheme/themeColors.js
  },

  leftSidebar: {
    show: true,
    mode: 'close', // full, close, compact, mobile,
    theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
    // bgOpacity: .96, // 0 ~ 1
    bgImgURL: '/assets/images/sidebar/sidebar-bg-dark.jpg'
  },

  secondarySidebar: {
    show: true,
    open: true,
    theme: 'purple1' // View all valid theme colors inside MatxTheme/themeColors.js
  },

  footer: {
    show: true,
    fixed: false,
    theme: 'purple1' // View all valid theme colors inside MatxTheme/themeColors.js
  }
};

interface INavSettings {
  mode: string;
  show: Boolean;
  fixed: Boolean;
  theme: string;
  bgImgURL: string;
}

export interface IAppLayoutSettings {
  activeLayout: string;
  activeTheme: string;
  perfectScrollbar: Boolean;
  themes: any;
  topbar: INavSettings;
  leftSidebar: INavSettings;
  secondarySidebar: INavSettings;
  footer: INavSettings;
}

export default AppLayoutSettings;
