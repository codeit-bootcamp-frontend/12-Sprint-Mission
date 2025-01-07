const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // index.ts -> index.tsx로 변경
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // .tsx 확장자를 추가
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // .tsx 파일을 처리할 수 있도록 설정
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.module\.css$/,
        use: ["style-loader", "css-loader?modules"],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
