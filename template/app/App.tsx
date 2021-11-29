/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 * Developed by Mustafa Akbas
 */

import React from 'react';
import Config from 'react-native-config';
import FlashMessage from 'react-native-flash-message';
import {Provider as StoreProvider} from 'react-redux';
import {AppQueryClientProvider, AxiosProvider} from './api';
import {AppNavigator} from './navigators';
import {store} from './store';

const App = () => {
  console.log({Config});
  return (
    <StoreProvider store={store}>
      <AxiosProvider>
        <AppQueryClientProvider>
          <AppNavigator />
          <FlashMessage position="top" />
        </AppQueryClientProvider>
      </AxiosProvider>
    </StoreProvider>
  );
};

export default App;
