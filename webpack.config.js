"use strict";
var path = require("path");

module.exports = {

    entry: path.join(__dirname, "src", "app-client.js"),
    output: {
        path: path.join(__dirname, "src", "static", "js"),
        publicPath: "/js/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                loader: "babel-loader",
                query: {
                    cacheDirectory: "babel-cache",
                    presets: ["react", "es2015"]
                }
            }
        ]
    }
};