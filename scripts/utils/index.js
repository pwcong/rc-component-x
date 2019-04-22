const path = require('path');
const fs = require('fs-extra');
const klaw = require('klaw-sync');
const changeCase = require('change-case');

const rootPath = (exports.rootPath = path.resolve(__dirname, '../..'));
const packagesPath = (exports.packagesPath = path.join(rootPath, 'packages'));

const getPackages = (exports.getPackages = () => {
  const packages = klaw(packagesPath, {
    depthLimit: 0,
    nofile: true
  })
    .filter(package => {
      return fs.existsSync(path.join(package.path, 'package.json'));
    })
    .map(package => {
      const json = fs.readJSONSync(path.join(package.path, 'package.json'));
      return Object.assign({}, json, {
        path: package.path,
        componentName: changeCase.pascalCase(path.basename(package.path))
      });
    });

  return packages;
});

const getPackagesMap = (exports.getPackagesMap = () => {
  const packages = getPackages();

  const map = {};
  packages.forEach(package => {
    map[package.name] = package;
  });

  return map;
});
