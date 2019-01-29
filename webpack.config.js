const path = require("path");

module.exports = {
    mode: "development",
    entry: "./fileEs6/tdt.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "tdt.js",
    }
};

