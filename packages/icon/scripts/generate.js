const path = require('path');
const fs = require('fs-extra');
const klaw = require('klaw-sync');
const svgr = require('@svgr/core').default;
const changeCase = require('change-case');
const prettier = require('prettier');
const chalk = require('chalk');

async function generate() {
  const rootPath = path.join(__dirname, '..');
  const svgsPath = path.join(rootPath, 'svgs');
  const iconsPath = path.join(rootPath, 'icons');

  fs.emptyDirSync(iconsPath);

  const svgs = klaw(svgsPath, {
    nodir: true,
    depthLimit: 0
  })
    .filter(svg => path.extname(path.basename(svg.path)) === '.svg')
    .map(svg => {
      const name = path.basename(svg.path).replace('.svg', '');

      return {
        name,
        srcPath: svg.path,
        distPath: path.join(iconsPath, name + '.tsx'),
        componentName: changeCase.pascalCase(name)
      };
    });

  console.log(chalk.yellow('start generating icons'));

  const doneList = [];
  const failList = [];

  for (let i = 0; i < svgs.length; i++) {
    const svg = svgs[i];

    try {
      const svgSource = fs.readFileSync(svg.srcPath);
      const svgCode = await svgr(
        svgSource,
        { icon: true },
        { componentName: svg.componentName }
      );
      fs.outputFileSync(
        path.join(svg.distPath),
        prettier.format(svgCode, {
          semi: true,
          singleQuote: true,
          parser: 'babel'
        })
      );
      doneList.push(svg.name);
    } catch (e) {
      failList.push(svg.name);
    }
  }

  if (doneList.length > 0) {
    console.log('\n****** Done ******');
    doneList.forEach(i => {
      console.log(chalk.green(i));
    });
  }
  if (failList.length > 0) {
    console.log('\n****** Done ******');
    failList.forEach(i => {
      console.log(chalk.red(i));
    });
  }

  const entryCode = `
  ${svgs
    .map(svg => `import ${svg.componentName} from './${svg.name}'`)
    .join('\n')}
  
  export default {
    ${svgs.map(svg => `['${svg.name}']: ${svg.componentName}`).join(',')}
  }
  
  `;

  fs.outputFileSync(
    path.join(iconsPath, 'index.ts'),
    prettier.format(entryCode, {
      semi: true,
      singleQuote: true,
      parser: 'babel'
    })
  );
}

generate();
