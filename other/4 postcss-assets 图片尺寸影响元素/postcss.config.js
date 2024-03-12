module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 0,
    }),
    require('postcss-assets')({
      loadPaths: ['src/images'],
    }),
  ],
}
