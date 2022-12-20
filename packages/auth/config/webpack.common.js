module.exports = {
  module: {
    // rules, loader, tell webpack to process types of files;
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // @babel/preset-react, babel will process react code, .jsx;
            // @babel/preset-env, babel will convert ES 2015,...,ES2021 to ES5;
            // @babel/plugin-transform-runtime, babel will add some features inside the browser, eg. async await;
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
