const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/_full.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "tdt.canvas-markers.js",
    }
};

