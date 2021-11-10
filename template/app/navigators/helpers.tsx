import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icons} from '../assets';
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

export const selectIcon = (name: string, isFocused: boolean) => {
  switch (name) {
    case SCREENS.home:
      return isFocused ? (
        <View style={styles.iconContainer}>
          <Icons.Home width={30} height={30} />
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <Icons.Home width={30} height={30} />
        </View>
      );
    case SCREENS.upload:
      return isFocused ? (
        <View style={styles.iconContainer}>
          <Icons.Plus width={30} height={30} fill="#000" />
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <Icons.Plus width={30} height={30} fill="#000" />
        </View>
      );
    case SCREENS.search:
      return isFocused ? (
        <View style={styles.iconContainer}>
          <Icons.Search width={30} height={30} fill="#000" />
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <Icons.Search width={30} height={30} fill="#000" />
        </View>
      );
    case SCREENS.basket:
      return isFocused ? (
        <View style={styles.iconContainer}>
          <Icons.Shopping width={30} height={30} fill="#000" />
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <Icons.Shopping width={30} height={30} fill="#000" />
        </View>
      );
    case SCREENS.profile:
      return isFocused ? (
        <View style={styles.iconContainer}>
          <Icons.PersonPlus width={30} height={30} fill="#000" />
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <Icons.PersonPlus width={30} height={30} fill="#000" />
        </View>
      );
    default:
      return (
        <View style={styles.iconContainer}>
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

export const selectLabel = (screenName: string) => {
  const label = labelListOfScreen[screenName];
  return wrapInText(label);
};

const wrapInText = (title: string) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
};
