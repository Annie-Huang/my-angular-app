// const path = require("path");
//
// module.exports = {
//   module: {
//     rules: [{
//       test: /\.less$/,
//       loaders: ["style-loader", "css-loader", "less-loader"],
//       include: path.resolve(__dirname, "../")
//     }]
//   }
// };

// const path = require('path');
// module.exports = {
//   module: {
//     loaders: [
//       {
//         test: /\.scss$/,
//         loaders: ["style", "css", "sass"],
//         include: path.resolve(__dirname, '../')
//       }
//     ]
//   }
// }


module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        {
          loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default
          options: {
            includePaths: ["../"]
          }
        }
      ]
    }]
  }
};
