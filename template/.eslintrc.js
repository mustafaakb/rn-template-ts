module.exports = {
  root: true,
  extends: '@react-native-community',
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
