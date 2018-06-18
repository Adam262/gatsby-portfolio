/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.modifyWebpackConfig = function({config, env}) {
  config.merge({
    resolve: {
      root: path.resolve(__dirname, './src'),
      alias: {
        Components: path.resolve(__dirname, 'src/components/'),
        Pages: path.resolve(__dirname, 'src/pages/'),
        Styles: path.resolve(__dirname, 'src/styles/'),
        Image: path.resolve(__dirname, 'src/img/'),
        Root: path.resolve(__dirname, './src'),
      },
      extensions: ['', '.js', '.jsx', '.json'],
    }
  });
  return config;
}
