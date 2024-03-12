module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-custom-media'),
    require('postcss-preset-env')({
      stage: 0,
    }),
  ],
}
