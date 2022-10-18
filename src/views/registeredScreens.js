import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {
  withNavigationProvider,
  NavigationProvider,
} from 'react-native-navigation-hooks';
import {store} from '../redux/store';
import HomeView from './HomeView';
import MyFileView from './MyFileView'
import FileViewer from './FileViewer'
export const registeredScreens = () => {
 
  Navigation.registerComponent(
    'HomeView',
    () => props =>
      (
        <Provider store={store}>
          <NavigationProvider value={{componentId: props.componentId}}>
            <HomeView {...props} />
          </NavigationProvider>
        </Provider>
      ),
    () => withNavigationProvider(HomeView),
  );

  Navigation.registerComponent(
    'MyFileView',
    () => props =>
      (
        <Provider store={store}>
          <NavigationProvider value={{componentId: props.componentId}}>
            <MyFileView {...props} />
          </NavigationProvider>
        </Provider>
      ),
    () => withNavigationProvider(MyFileView),
  );
 
  Navigation.registerComponent(
    'FileViewer',
    () => props =>
      (
        <Provider store={store}>
          <NavigationProvider value={{componentId: props.componentId}}>
            <FileViewer {...props} />
          </NavigationProvider>
        </Provider>
      ),
    () => withNavigationProvider(FileViewer),
  );
};
