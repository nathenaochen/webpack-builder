# webpack-builder

### np-cli   一个基于webpack支持react多页应用的打包脚手架

### np-cli-ts   一个基于webpack支持typescript react多页应用的打包脚手架  
+ 本脚手架基于babel 7.0以上搭建的，用babel @babel/preset-typescript 来进行ts的转换   用ts来进行类型检查。

编译ts有两套方案：

+ 1.基于ts-loader 具体过程为 ts -> js -> es5  此种方案需要用到两个编译器  tsc  和 babel 除了ts-loader 还有 awesome-typescript-loader
+ 2.基于@babel/preset-typescript 此种方式直接由ts -> es5 不需要tsc的参与，及时没有typescript也能正常编辑运行，只要需要babel即可。
