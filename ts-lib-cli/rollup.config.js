import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import json from 'rollup-plugin-json';
import pkg from './package.json';
// console.log(pkg,'pkg')
export default {
  input: 'src/index.ts', // 打包入口
  output: [
    { // 打包出口
      file: pkg.main, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
      name: 'toll',
      format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
      sourcemap: true
    },
    {file: pkg.module, format: 'es', sourcemap: true},
],
  plugins: [ // 打包插件
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript(), // 解析TypeScript
    json()    //解析json数据格式的文件
  ]
};