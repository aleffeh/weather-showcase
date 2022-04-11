module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
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
        },
      },
    ],
  ],
};
