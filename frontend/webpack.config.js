const path = require('path')

module.exports = {
  entry: "./app/index.js",
  // here the application starts executing and webpack starts bundling

  output: {
    //options  related to how webpack emits results
    // __dirname is the directory name of the current module; local to each module
    path: path.resolve(__dirname, "dist"),
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    // path.resolve() resolves a sequence of paths or path segments into an absolute path

    filename: "bundle.js",
    // the filename tempalte for entry chunks

    publicPath: "/",
    // the url to the output directory resolved relative to the HTML page
  },

  module: {
    // configuration regarding modules

    rules: [
      // rules for modules (configure loaders, parser options, etc)

      {
        test: /\.jsx?$/,
        // include: [
          // path.resolve(__dirname, "app")
        // ],
        // these are matching conditions, each accepting a regex or string
        // test and include have the same behavior, both must be matched
        // best practices:
        // use regex only in test and for filename matching
        // use arrays of absolute paths in include and exclude
        // try to avoid exclude and prefer include

        loader: "babel-loader"
        // the loader which should be applied, it'll be resolved relative to the context
        //-loader suffix is no longer optional in webpack2 for clarity reasons
      }
    ]
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      "node_modules",
      path.resolve(__dirname, "app/components")
    ],
    // directories where to look for modules

    extensions: [".js", ".jsx"]
    //extensions that are used
  }
}
