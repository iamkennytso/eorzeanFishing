module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@components': './src/shared/components',
            '@features': './src/features',
            '@types': './src/types',
            '@utils': './src/shared/utils',
            '@api': './src/api',
            '@store': './src/store',
            '@data': './src/data',
            '@util': './src/util',
          },
        },
      ],
    ],
  };
};
