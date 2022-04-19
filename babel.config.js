module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@context': './src/context',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@themes': './src/themes',
          '@components': './src/components',
          '@assets': './src/assets',
          '@store': './src/store',
          '@services': './src/services',
        },
      },
    ],
  ],
};
