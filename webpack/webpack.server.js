const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    target: "node",
    mode: "development",
    entry: path.resolve(__dirname, "../server/index.js"),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ["react", "stage-0", ["env", {
                    targets: {
                        browsers: ["last 2 version"]
                    }
                }]]
            }
        }]
    }
}