const path = require("path");

module.exports = {
    entry: "./src/module/index",
    output: {
        path: path.resolve(__dirname, "../../dist"),
        filename: 'module.js'
    },
    mode: "development",
    module: {
        rules: [
          
        ]
    }
};