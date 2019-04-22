const path = require('path');
const rollup = require('rollup');
const typescript = require('rollup-plugin-typescript');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const uglify = require('rollup-plugin-uglify').uglify;

module.exports = async (inputOptions, outputOptions) => {
  const esBundle = await rollup.rollup(
    Object.assign(
      {
        external: ['react', 'react-dom'],
        plugins: [
          typescript({
            tsconfig: path.resolve(__dirname, '../../tsconfig.json')
          }),
          resolve(),
          commonjs(),
          postcss()
        ]
      },
      inputOptions
    )
  );
  await esBundle.write({
    format: 'es',
    file: path.join(outputOptions.path, 'bundle.es.js')
  });

  const umdBundle = await rollup.rollup(
    Object.assign(
      {
        external: ['react', 'react-dom'],
        plugins: [
          typescript({
            tsconfig: path.resolve(__dirname, '../../tsconfig.json')
          }),
          resolve(),
          commonjs(),
          postcss(),
          uglify()
        ]
      },
      inputOptions
    )
  );
  await umdBundle.write({
    format: 'umd',
    file: path.join(outputOptions.path, 'bundle.min.js'),
    name: outputOptions.name,
    globals: {
      react: 'React'
    }
  });
};
