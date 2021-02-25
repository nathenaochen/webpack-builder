import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import babel from "rollup-plugin-babel";
import { DEFAULT_EXTENSIONS } from '@babel/core';
import pkg from './package.json';
console.log(process.env.NODE_ENV == 'production',process.env.NODE_ENV,process.env.NODE_ENV == 'production')
export default {
  input: 'src/tool.ts', // 打包入口'
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
    typescript({
      tsconfigOverride:{
        compilerOptions:{
          declaration: false
        }
      }
    }), // 解析TypeScript
    babel({
      runtimeHelpers: true,     // 使plugin-transform-runtime生效
      exclude: 'node_modules/**', // 只转换源代码，不运行外部依赖
      extensions: [   //babel 默认不支持 ts 需要手动添加
        ...DEFAULT_EXTENSIONS,
        '.ts',
      ],
    }),
    json(),    //解析json数据格式的文件
    process.env.NODE_ENV == 'production' && terser()  //压缩代码
  ]
};