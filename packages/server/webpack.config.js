const { composePlugins, withNx } = require('@nrwl/webpack');
const { merge } = require('webpack-merge');
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default;

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), config => {
  return merge(config, {
    plugins: [
      // Watch for graphql schema change to rebuild the app
      new WatchExternalFilesPlugin({
        files: ['./**/*.graphql'],
      }),
    ],
  });
});
