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

// // If you use this one, you will get error of "Invalid CSS after "": expected 1 selector or at-rule, was "var content = requi""
// // It means there are multiple loader trying to transpile scss file.
// const path = require("path");
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         loaders: ["style-loader", "css-loader", "sass-loader"],
//         include: path.resolve(__dirname, "../")
//       }
//     ]
//   }
// }


// https://github.com/storybooks/storybook/issues/3814
// A few post said angular-cli already handle scss file. and storybook integrates with angular-cli.
// so you don't need webpack to handle scss, the link for https://storybook.js.org/configurations/custom-webpack-config/
// is for other framework like react and vue.
// So even if you comment out below and have a empty webpack.config.js file, scss file will still works.
const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["sass-loader"],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};

// const path = require("path");
//
// // Export a function. Accept the base config as the only param.
// module.exports = (storybookBaseConfig, configType) => {
//   // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
//   // You can change the configuration based on that.
//   // 'PRODUCTION' is used when building the static version of storybook.
//
//   // Make whatever fine-grained changes you need
//   storybookBaseConfig.module.rules.push({
//     test: /\.scss$/,
//     loaders: ["style-loader", "css-loader", "sass-loader"],
//     include: path.resolve(__dirname, "../")
//   });
//
//   // Return the altered config
//   return storybookBaseConfig;
// };

// module.exports = {
//   module: {
//     rules: [{
//       test: /\.scss$/,
//       use: [
//         "style-loader", // creates style nodes from JS strings
//         "css-loader", // translates CSS into CommonJS
//         {
//           loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default
//           options: {
//             includePaths: ["../"]
//           }
//         }
//       ]
//     }]
//   }
// };
