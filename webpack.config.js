const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "docs/dist"),
		filename: "vanjs.js",
		library: "vanjs",
		libraryTarget: "umd",
		globalObject: "this",
	},
};
