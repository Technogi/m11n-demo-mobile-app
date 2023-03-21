module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {}
      }
    ],
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-class-properties'
  ]
};
