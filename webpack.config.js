import path from "path";

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: "./index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
    ],
  },
  output: {
    path: path.resolve("./dist"),
  },
  plugins: [],
};

export default config;
