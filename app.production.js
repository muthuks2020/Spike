const {UglifyJsPlugin} = require('webpack').optimize

module.exports = {
  // disable source maps
  devtool: false,
  // webpack optimization and service worker
  plugins: [
    new UglifyJsPlugin()
  ],
  // image optimization
  module: {
    rules: [{
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [{ loader: 'image-webpack' }]
    }]
  },
  // minify html and css
  reshape: { minify: true },
  postcss: {
    minify: true,
    warnForDuplicates: false // cssnano includes autoprefixer
  }
}
