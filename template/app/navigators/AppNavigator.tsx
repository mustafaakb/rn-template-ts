/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme, View} from 'react-native';
import {Text} from 'react-native-svg';
import {RegisterScreen, SettingsScreen, WelcomeScreen} from '../screens';
import {PaymentScreen} from '../screens/basket';
import {DiscoverScreen} from '../screens/search';
import {selectIcon} from './helpers';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  register: undefined;
  home: undefined;
};
export type TabNavigatorParamList = {
  welcome: undefined;
  search: undefined;
  upload: undefined;
  basket: undefined;
  profile: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();
const TabStack = createBottomTabNavigator<TabNavigatorParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="register">
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="home">
        {() => (
          <TabStack.Navigator
            screenOptions={({route}) => ({
              headerShown: false,
              headerTransparent: true,
              tabBarIcon: ({focused}) => {
                return selectIcon(route.name, focused);
              },
              tabBarLabel: ({focused}) => (
                <View style={{backgroundColor: 'yellow'}}>
                  <Text> {route.name}</Text>
                </View>
              ),
            })}>
            <TabStack.Screen name="welcome" component={WelcomeScreen} />
            <TabStack.Screen name="search" component={DiscoverScreen} />
            <TabStack.Screen name="upload" component={WelcomeScreen} />
            <TabStack.Screen name="basket" component={PaymentScreen} />
            <TabStack.Screen name="profile" component={SettingsScreen} />
          </TabStack.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['welcome'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
