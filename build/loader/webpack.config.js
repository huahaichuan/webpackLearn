const path = require("path");

module.exports = {
    entry: "./src/loader",
    output: {
        path: path.resolve(__dirname, "../../dist"),
        filename: 'loader.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: path.resolve(__dirname, "../../loader/index.js"),
                        options: {
                            work: '996',
                            sick: 'ICU',
                        }
                    }
                ]
            }
        ]
    }
};