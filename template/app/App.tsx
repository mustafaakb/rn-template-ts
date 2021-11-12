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
import {AxiosProvider} from './api/axiosProvider';
import {AppNavigator} from './navigators';

const App = () => {
  return (
    <AxiosProvider>
      <AppNavigator />
    </AxiosProvider>
  );
};

export default App;
