const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const DashboardPlugin = require("@module-federation/dashboard-plugin");

const deps = require("./package.json").dependencies;
module.exports = {
  // output: {
  //   publicPath: "http://localhost:8083/",
  // },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8083,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-react", {
              runtime: "automatic"
            }]],
          },
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "tickets",
      filename: "remoteEntry.js",
      remotes: {
        user: "user@http://localhost:8082/remoteEntry.js"
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    // new ModuleFederationPlugin({
    //   name: "checkout",
    //   filename: "remoteEntry.js",
    //   remotes: {
    //     checkout: "checkout@http://localhost:8082/remoteEntry.js",
    //     search: "search@http://localhost:8081/remoteEntry.js",
    //     home: "home@http://localhost:8080/remoteEntry.js",
    //   },
    //   exposes: {
    //     "./Checkout": "./src/CheckoutContent",
    //     "./AddToCart": "./src/AddToCart",
    //     "./checkout": "./src/checkout",
    //     "./store": "./src/store",
    //   },
    //   shared: {
    //     ...deps,
    //     react: {
    //       singleton: true,
    //       requiredVersion: deps.react,
    //     },
    //     "react-dom": {
    //       singleton: true,
    //       requiredVersion: deps["react-dom"],
    //     },
    //   },
    // }),
    // new DashboardPlugin({
    //   dashboardURL: "http://localhost:3000/api/update",
    //   metadata: {
    //     source: {
    //       url: "http://github.com",
    //     },
    //     remote: "http://localhost:8081/remoteEntry.js",
    //   },
    // }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};