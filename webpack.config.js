const path = require('path');
const os = require('os');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
var webpackMode;

function makeClosureCompiler() {
    const externDir = path.join(__dirname, "externs");
    const externs = [
        path.join(externDir, "performance.js"),
        path.join(externDir, "webassembly.js")
    ];

    var pluginOptions = {
        compiler: {
            compilation_level: "ADVANCED",
            create_source_map: true,
            externs: externs
        },
        concurrency: os.cpus().length
    };

    if (process.env.CLOSURE_PATH) {
        pluginOptions.compiler.jar = process.env.CLOSURE_PATH;
    }

    return new ClosureCompilerPlugin(pluginOptions);
}

var plugins = [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
        {
            from: 'assets/bootstrap.min.css',
            to: 'assets/'
        },
        {
            from: 'assets/bootstrap.min.js',
            to: 'assets/'
        },
        {
            from: 'assets/popper.min.js',
            to: 'assets/'
        },
        {
            from: 'assets/jquery.min.js',
            to: 'assets/'
        }
    ]),
    new HtmlWebpackPlugin({
        inject: true,
        template: 'html/index.html',
        filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
        inject: true,
        template: 'html/index_dark.html',
        filename: 'index_dark.html',
    })
];

if (process.env.PRODUCTION) {
    plugins.push(makeClosureCompiler());
    webpackMode = "production";
} else {
    webpackMode = "development";
}


module.exports = {
    entry: "./src/ui.ts",
    output: {
        filename: "assets/bundle.[hash].js",
        path: path.join(__dirname, "dist")
    },
    plugins: plugins,
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    mode: webpackMode,
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{loader: 'ts-loader', options: {transpileOnly: true}}]
            }
        ]
    }
}
