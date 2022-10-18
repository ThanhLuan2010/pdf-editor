import {Platform} from 'react-native';
import * as colors from './colors';

export const DARK_STATUS_BAR = {
  statusBar: {
    backgroundColor: colors.COLOR_PRIMARY,
    style: 'light',
  },
};
export const LIGHT_STATUS_BAR = {
  statusBar: {
    backgroundColor: colors.COLOR_PRIMARY,
    style: 'dark',
  },
};

export const DARK_HEADER = {
  statusBar: {
    backgroundColor: colors.COLOR_PRIMARY,
    style: 'light',
  },
  topBar: {
    leftButtonColor: colors.COLOR_PRIMARY,
    rightButtonColor: colors.COLOR_PRIMARY,
    backButton: {
      color: colors.COLOR_PRIMARY,
    },
    background: {
      color: colors.WHITE,
    },
    title: {
      color: colors.COLOR_PRIMARY,
    },
    leftButtonStyle: {
      color: colors.COLOR_PRIMARY,
    },
    rightButtonStyle: {
      color: colors.COLOR_PRIMARY,
    },
  },
};

export const LIGHT_HEADER = {
  statusBar: {
    visible: true,
    backgroundColor: colors.COLOR_PRIMARY,
    style: 'dark',
  },
  topBar: {
    drawBehind: true,
    largeTitle: {
      color: colors.WHITE,
      visible: true,
    },
    leftButtonColor: colors.WHITE,
    rightButtonColor: colors.WHITE,
    backButton: {
      color: colors.WHITE,
    },
    background: {
      color: colors.COLOR_PRIMARY,
    },
    title: {
      color: colors.WHITE,
    },
    leftButtonStyle: {
      color: colors.WHITE,
    },
    rightButtonStyle: {
      color: colors.WHITE,
    },
  },
};

export const LIGHT_HEADER_SMALL = {
  statusBar: {
    visible: true,
    backgroundColor: colors.COLOR_PRIMARY,
    style: 'dark',
  },
  topBar: {
    backButton: {
      color: colors.WHITE,
    },
    background: {
      color: colors.COLOR_PRIMARY,
    },
    title: {
      color: colors.WHITE,
    },
    leftButtonStyle: {
      color: colors.WHITE,
    },
    rightButtonStyle: {
      color: colors.WHITE,
    },
  },
};

export const DEFAULT_HEADER_SMALL = {
  ...Platform.select({
    ios: {
      ...LIGHT_HEADER_SMALL,
    },
    android: {
      ...DARK_HEADER,
    },
  }),
};

export const DEFAULT_HEADER = {
  ...Platform.select({
    ios: {
      ...LIGHT_HEADER,
    },
    android: {
      ...DARK_HEADER,
    },
  }),
};

export const DEFAULT_STATUS_BAR = {
  ...Platform.select({
    ios: {
      ...LIGHT_STATUS_BAR,
    },
    android: {
      ...DARK_STATUS_BAR,
    },
  }),
};

export const HIDDEN_TOP_BAR = {
  topBar: {
    visible: false,
    drawBehind: true,
    animated: false,
  },
};

export const HIDDEN_BOTTOM_TABS = {
  bottomTabs: {
    visible: false,
    animate: false,
    drawBehind: true,
  },
};

export const REMOVE_HIDDEN_TOP_BAR = {
  topBar: {
    visible: false,
    drawBehind: false,
    animated: false,
  },
};
