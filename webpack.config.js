/* 这是webpack的配置文件 */
const path = require('path')
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: {
        main: __dirname + "/src/main.js"//在任何模块文件内部，可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径。
    },
    /* 在 webpack 中配置 output 属性的最低要求是，将它的值设置为一个对象，包括以下两点：

    1. filename 用于输出文件的文件名。
    2.目标输出目录 path 的绝对路径。 */
    output: {
        filename: 'bundle.js',
        path: __dirname + "/dist",
        publicPath:"/"
    },
    /* 如果entry有多个js文件，则output的filename为[name].js */
    /* 配置完成后，当mainjs有改动的时候 控制台输入webpack就可以及时更新bundlejs */


    // 当我们在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
    //  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
    //  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
    //  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
    //  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；


    /* 不是全局安装的模块 无法在终端直接用命令使用 只能通过package.json去配置 */
    /* 配置步骤：
    1.在config.js里添加devServe
    2.在packgejson添加一个 script 脚本，可以直接运行开发服务器(dev server)  如果scripts没有dev 要加上一句"dev": "webpack-dev-server",
    3.在命令行中运行 npm start，就会看到浏览器自动加载页面。如果现在修改和保存任意源文件，web 服务器就会自动重新加载编译后的代码
     */
    devServer: {
        contentBase: './',//设置托管的根路径,
        open: true,//自动打开
        port: 8080,//设置端口
        hot: true,//启用热更新
        historyApiFallback: true
    },
    plugins: [
        new htmlWebpackPlugin({//创建一个内存中生成html的页面插件
            //此时物理的index可以去掉对bundle的引用 也就是说使用了插件后可以停止对bundle.js的引用
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
        //htmlwebpackplugin的作用：
        //1. 自动在内存根据指定的页面生成一个内存页面
        //2.自动把打包好的bundle.js追加到页面中 无需对bundle.js进行引用
    ],
    module: {//这个节点用于配置所有第三方模块的加载器
        rules: [// 很多时候会用到 require，import，@import 导入 css ，那么就要用到 css-loader 进行转换
            //style-loader： 通过注入 <style> 标签将 CSS 添加到 DOM
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']//调用规则 从右到左
            },
            {
                test: /\.(jpg|png|bmp|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {//设置传给loader的参数 需要传参数的时候建议把loader写成对象
                        limit: 955,//在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
                        /* url-loader可以将图片转为base64字符串，能更快的加载图片，一旦图片过大，
                        就需要使用file- loader的加载本地图片，故url- loader可以设置图片超过多少字节时，使用file - loader加载图片。 */
                        name: '[hash:8]-[name].[ext]'//设定文件的名字 字符串
                    }
                }]

            }, {
                test: /\.(ttf|woff|woff2|eot|svg|otf)$/, use: ['url-loader']

            },
            { test: /\.vue$/, use: [{ loader: 'vue-loader' }] }

        ]
    }

}