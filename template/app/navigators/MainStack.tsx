import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icons} from '../assets';
import {
  DiscoverScreen,
  PaymentScreen,
  SettingsScreen,
  UploadPhotoScreen,
  WelcomeScreen,
} from '../screens';
import {SCREENS} from '../screens/enums';

const styles = StyleSheet.create({
  iconContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 10,
  },
  label: {
    width: 70,
    fontSize: 10,
    textAlign: 'center',
  },
});

const selectIcon = (name: string, isFocused: boolean) => {
  switch (name) {
    case SCREENS.home:
      return (
        <View style={[styles.iconContainer, {opacity: isFocused ? 1 : 0.5}]}>
          <Icons.Home width={30} height={30} />
        </View>
      );
    case SCREENS.upload:
      return (
        <View style={[styles.iconContainer, {opacity: isFocused ? 1 : 0.5}]}>
          <Icons.Plus width={30} height={30} fill="#000" />
        </View>
      );
    case SCREENS.search:
      return (
        <View style={[styles.iconContainer, {opacity: isFocused ? 1 : 0.5}]}>
          <Icons.Search width={30} height={30} fill="#000" />
        </View>
      );
    case SCREENS.basket:
      return (
        <View style={[styles.iconContainer, {opacity: isFocused ? 1 : 0.5}]}>
          <Icons.Shopping width={30} height={30} fill="#000" />
        </View>
      );
    case SCREENS.profile:
      return (
        <View style={[styles.iconContainer, {opacity: isFocused ? 1 : 0.5}]}>
          <Icons.PersonPlus width={30} height={30} fill="#000" />
        </View>
      );
    default:
      return (
        <View style={[styles.iconContainer, {opacity: isFocused ? 1 : 0.5}]}>
          <Icons.NoProfile width={30} height={30} />
        </View>
      );
  }
};

const labelListOfScreen = {
  [SCREENS.home]: 'HOME',
  [SCREENS.search]: 'SEARCH',
  [SCREENS.upload]: '',
  [SCREENS.basket]: 'BASKET',
  [SCREENS.profile]: 'PROFILE',
};

const selectLabel = (screenName: string, isFocused: boolean) => {
  const label = labelListOfScreen[screenName];
  return wrapInText(label, isFocused);
};

const wrapInText = (title: string, isFocused: boolean) => {
  return (
    <View style={{opacity: isFocused ? 1 : 0.5}}>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
};

export type TabNavigatorParamList = {
  home: undefined;
  search: undefined;
  upload: undefined;
  basket: undefined;
  profile: undefined;
};

const TabStack = createBottomTabNavigator<TabNavigatorParamList>();

const MainStack = () => {
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        headerTransparent: true,
        tabBarIcon: ({focused}) => {
          return selectIcon(route.name, focused);
        },
        tabBarLabel: ({focused}) => selectLabel(route.name, focused),
      })}>
      <TabStack.Screen name="home" component={WelcomeScreen} />
      <TabStack.Screen name="search" component={DiscoverScreen} />
      <TabStack.Screen name="upload" component={UploadPhotoScreen} />
      <TabStack.Screen name="basket" component={PaymentScreen} />
      <TabStack.Screen name="profile" component={SettingsScreen} />
    </TabStack.Navigator>
  );
};

export default MainStack;
