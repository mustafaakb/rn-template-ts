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

import * as Sentry from '@sentry/react-native';
import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {AppQueryClientProvider, AxiosProvider} from './api';
import {AppNavigator} from './navigators';
import {store} from './store';
import {sentryConfig} from './utils';

Sentry.init(sentryConfig);


const App = () => {
  return (
    <StoreProvider store={store}>
      <AxiosProvider>
        <AppQueryClientProvider>
          <AppNavigator />
        </AppQueryClientProvider>
      </AxiosProvider>
    </StoreProvider>
  );
};

export default Sentry.wrap(App);
