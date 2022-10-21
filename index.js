import {Navigation} from 'react-native-navigation';
import 'react-native-gesture-handler';

import {setRoot, currentScreen} from './src/utils/navigator';
import {registeredScreens} from './src/views/registeredScreens';

registeredScreens();
Navigation.events().registerAppLaunchedListener(() => {
  setRoot('HomeView');
});
Navigation.events().registerComponentDidAppearListener(
  ({componentId, componentName, passProps}) => {
    if (componentName && componentId) {
      currentScreen.set('component', {
        componentId,
        componentName,
        passProps,
      });
    }
  },
);
