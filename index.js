module.exports = {
	env: {
		es6: true,
		es2022: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:promise/recommended',
		'plugin:import/recommended',
        "plugin:regexp/recommended"
	],

	ignorePatterns: ['.prettierrc.cjs', 'dist', '.eslintrc.cjs'],

	plugins: [ 'unused-imports', 'sort', 'prefer-arrow-functions', 'promise', "regexp"],

	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
	},
	root: true,
	rules: {
        "max-params": ['error', {max: 6}],
		complexity: ['warn', { max: 10 }],
		'import/no-cycle': ['warn'],
		'import/no-self-import': ['error'],
		'import/no-unresolved': 'off',
		'max-lines': ['warn', { max: 500 }],
		'no-constant-condition': ['error'],
		'no-multiple-empty-lines': ['warn'],
		'no-negated-condition': ['error'],
        "no-shadow": "off",
		'no-unused-vars': 'off',
		'no-useless-rename': ['error'],
		'no-useless-return': ['error'],
		'object-shorthand': [
			'error',
			'always',
			{ avoidExplicitReturnArrows: true },
		],
        "no-nested-ternary" : ["warn"],
		'prefer-arrow-functions/prefer-arrow-functions': [
			'warn',
			{
				classPropertiesAllowed: false,
				disallowPrototype: false,
				returnStyle: 'implicit',
				singleReturnOnly: true,
			},
		],
		'promise/always-return': 'warn',
		'sort/destructuring-properties': 'warn',
		'sort/object-properties': 'warn',
		'sort/string-enums': 'warn',
		'sort/string-unions': 'warn',
		'sort/type-properties': 'warn',
	},
};
