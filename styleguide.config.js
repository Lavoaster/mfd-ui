const path = require('path');

module.exports = {
  components: 'src/app/components/**/*.tsx',
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: require('react-scripts/config/webpack.config.js'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/app/themes/Wrapper'),
  }
};
