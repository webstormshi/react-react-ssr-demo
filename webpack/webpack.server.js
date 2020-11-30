const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const nodeExternals = require("webpack-node-externals");

module.exports = merge(baseConfig, {
    target: "node",
    entry: path.resolve(__dirname, "../server/index.js"),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../build')
    },
    externals: [nodeExternals()]
});