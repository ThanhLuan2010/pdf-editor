// import React from 'react';
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';

import * as colors from '../themes/colors';
// import Images from '../themes/Images';
// import CustomIcon from '../themes/CustomIcon';
const currentScreen = new Map();

// pifIcon
// projectIcon
// blogIcon
// investmentIcon
// overviewIcon
// <CustomIcon name='overviewIcon' size={25} />

async function getListOfTabItems(activityIcon, homeIcon) {
  return [
    {
      index: 0,
      text: 'HomeView',
      key: 'HomeView',
      icon: activityIcon,
    },
    {
      index: 1,
      text: 'ProfileView',
      key: 'ProfileView',
      icon: homeIcon,
    },
  ];
}

async function getListOfTab(passProps = {}) {
  let listOfTabs = [];
  await Promise.all([
    MaterialIcons.getImageSource('verified', 25),
    MaterialIcons.getImageSource('fingerprint', 25),
  ]).then(async ([activityIcon, homeIcon, sendIcon, profileIcon, chatIcon]) => {
    let items = await getListOfTabItems(activityIcon, homeIcon);
    items.forEach(item => {
      const {key, text, selectedSource, icon} = item;
      listOfTabs.push({
        stack: {
          children: [
            {
              component: {
                id: key,
                name: key,
                passProps: {...passProps[key]},
              },
            },
          ],
          options: {
            bottomTab: {
              text,
              icon: icon,
              selectedIconColor: colors.COLOR_PRIMARY,
              iconColor: '#C2CCDD',
              testID: key,
              // selectedFontSize: 10,
              // fontSize: 10,
              textColor: colors.COLOR_GRAY,
              selectedTextColor: colors.COLOR_PRIMARY,
              ...Platform.select({
                ios: {},
                android: {},
              }),
            },
            topBar: {visible: false, height: 0},
          },
        },
      });
    });
  });

  return listOfTabs;
}

const setRootUser = (listOfTabs, currentTabIndex = 0) => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        children: listOfTabs,
        options: {
          bottomTabs: {
            ...Platform.select({
              android: {
                titleDisplayMode: 'alwaysShow',
                elevation: 5,
              },
            }),

            // currentTabIndex,
          },
          topBar: {visible: false, height: 0},
        },
      },
    },
  });
};

//end fake

const setRoot = (screenName, passProps = {}) => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: screenName,
              options: {
                animations: {
                  setRoot: {
                    waitForRender: true,
                  },
                },
                topBar: {visible: false, height: 0},
              },
              passProps,
            },
          },
        ],
        options: {
          animations: {
            setRoot: {
              waitForRender: true,
            },
            topBar: {visible: false, height: 0},
          },
        },
      },
    },
  });
};

const setRootMain = (screenName, passProps = {}) => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          visible: true,
          component: {
            id: 'DrawerView',
            name: 'DrawerView',
          },
        },
        center: {
          stack: {
            id: 'CenterStack',
            children: [
              {
                component: {
                  name: screenName,
                  options: {
                    animations: {
                      setRoot: {
                        waitForRender: true,
                      },
                    },
                  },
                  passProps,
                },
              },
            ],
          },
        },
      },
    },
  });
};
const setStackRootMain = (screenName, passProps = {}) => {
  Navigation.setStackRoot('CenterStack', {
    component: {
      name: screenName,
      options: {
        animations: {
          setRoot: {
            waitForRender: true,
          },
        },
      },
      passProps,
    },
  });
};

const navigateToScreen = (
  componentId,
  screenName,
  passProps = {},
  options = {},
) => {
  Navigation.push(componentId, {
    component: {
      name: screenName,
      passProps,
      // options,
      options: Object.assign(options, {
        animations: {
          push: {
            waitForRender: true,
          },
        },
        topBar: {visible: false, height: 0},
      }),
    },
  });
};

const goBack = (componentId, passProps = {}) => {
  Navigation.pop(componentId, passProps);
};
const gotBackToRoot = componentId => {
  Navigation.popToRoot(componentId);
};

const showModal = (screenName, passProps = {}) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: screenName,
            passProps,
          },
        },
      ],
    },
  });
};
const dimissModal = componentId => {
  Navigation.dismissModal(componentId);
};

const mergeOptions = (componentId, options) => {
  setTimeout(() => {
    Navigation.mergeOptions(componentId, options);
  }, 100);
};

const toggleSideMenu = (componentId, visible) => {
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        visible: visible,
      },
    },
  });
};

export {
  mergeOptions,
  currentScreen,
  setRoot,
  setRootMain,
  setStackRootMain,
  navigateToScreen,
  goBack,
  gotBackToRoot,
  showModal,
  dimissModal,
  toggleSideMenu,
  //fake
  setRootUser,
  getListOfTab,
};
