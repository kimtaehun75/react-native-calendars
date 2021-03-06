module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@navigators': './src/modules/navigators',
          '@utils': './src/utils',
          '@styles': './src/styles',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};