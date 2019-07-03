const execSync = require('child_process').execSync;
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');

const packageJson = require('./package');

execSync('./node_modules/.bin/webpack', {stdio: 'inherit'});

fs.removeSync('../lib-local');
packageJson.files
  .map(x => glob.sync(x))
  .reduce((acc, curr) => acc.concat(curr), [])
  .forEach(x => fs.copySync(x, path.join('../lib-local', x)));
fs.copySync('package.json', path.join('../lib-local', 'package.json'));
