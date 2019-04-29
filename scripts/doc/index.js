const VirtualModulesPlugin = require('webpack-virtual-modules');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const { getPackages } = require('../utils');
const start = require('../start/start');

const packages = getPackages();
const distPath = path.join(__dirname, 'dist');
const entryPath = path.join(distPath, 'entry.tsx');

const appPath = path.join(__dirname, 'app.tsx').replace(/\\/g, '/');

const getEntryCode = () => {
  return `
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from '${appPath}';
const components = [
  ${packages
    .map(
      pkg => `{
        entry: React.lazy(() => import('${pkg.testPath}')),
        pkg: JSON.parse('${JSON.stringify(pkg)}')
      }`
    )
    .join(',')}
];

ReactDOM.render(
  <Router>
    <App components={components}/>
  </Router>,
  document.getElementById('app')
);

  `;
};

const virtualModules = new VirtualModulesPlugin({
  [entryPath]: getEntryCode()
});

const config = {
  devServer: {
    host: '127.0.0.1',
    port: 4001
  }
};

const webpackConfig = {
  entry: {
    index: entryPath
  },
  output: {
    path: distPath
  },
  plugins: [
    virtualModules,
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'index.ejs')
    })
  ]
};

start(config, webpackConfig);
