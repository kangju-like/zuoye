const path = require('path');
// 导出模块，必须这样写，webpack定制的写法，webpack的命令使用
module.exports = {
    mode: 'production', // 可以设置为开发模式或者生产模式 production
    entry: './src/index.js', // 配置我需要处理的入口模块
    output: {
        filename: 'bundle.js', // 把入口模块所有的模块，通通打包进bundle.js文件里面
        path: path.resolve(__dirname, 'dist') // 配置打包输出的地方
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.jade$/, use: 'jade-loader' },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.scss|css$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }
        ]
    }
};