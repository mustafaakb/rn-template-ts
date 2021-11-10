import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Icons} from '../../assets';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Icons.Home width="30" height="30" />
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.palette.gray : Colors.palette.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.palette.gray : Colors.palette.blue,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
export default Section;
