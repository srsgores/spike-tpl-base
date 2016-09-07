module.exports = {
	root: true,
	parser: "babel-eslint",
	parserOptions: {
		sourceType: "module"
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: "standard",
	// add your custom rules here
	"rules": {
		// allow paren-less arrow functions
		"arrow-parens": 0,
		// allow async-await
		"generator-star-spacing": 0,
		"indent": ["error", "tab"],
		"quotes": ["error", "double"],
		"space-before-function-paren": ["error", {"anonymous": "never", "named": "never"}],
		semi: ["error", "always"]
	}
}
