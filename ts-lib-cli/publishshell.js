const {readFileSync,writeFileSync} = require('fs');
const path = require('path');
const colors = require('colors')
const pkg = JSON.parse(readFileSync(path.resolve(__dirname,'./','package.json')));
pkg.name = 'tools-nathen';
pkg.main = './tools.umd.js';
pkg.module = './tools.es5.js';
pkg.types = './types/src/tool.d.ts';
delete pkg.scripts;
delete pkg.devDependencies;
delete pkg.dependencies;
writeFileSync(path.resolve(__dirname,'./dist','package.json'),JSON.stringify(pkg,null,2));
console.log(colors.green('package done'))