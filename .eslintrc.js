module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
		'cypress/globals': true,
		es6: true,
	},
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
		'simple-import-sort',
		'unused-imports',
		'cypress',
		'unicorn',
	],
	extends: [
		'plugin:cypress/recommended',
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'next',
		'next/core-web-vitals',
		'prettier',
		'plugin:sonarjs/recommended',
		'plugin:unicorn/recommended',
	],
	rules: {
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					// un-ban a type that's banned by default
					'{}': false,
				},
				extendDefaults: true,
			},
		],
		'react/no-unescaped-entities': 'off',
		'no-console': ['warn', { allow: ['error'] }],
		curly: 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/display-name': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'react/jsx-curly-brace-presence': [
			'warn',
			{
				props: 'never',
				children: 'never',
			},
		],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		//#region  //*=========== Unused Import ===========
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		//#endregion  //*======== Unused Import ===========
		//#region  //*=========== Import Sort ===========
		'simple-import-sort/exports': 'warn',
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					// ext library & side effect imports
					['^@?\\w', '^\\u0000'], // {s}css files
					['^.+\\.s?css$'], // Lib and hooks
					['^@/lib', '^@/hooks'], // static data
					['^@/data'], // components
					['^@/components', '^@/container'], // zustand store
					['^@/store'], // Other imports
					['^@/'], // relative paths up until 3 level
					[
						'^\\./?$',
						'^\\.(?!/?$)',
						'^\\.\\./?$',
						'^\\.\\.(?!/?$)',
						'^\\.\\./\\.\\./?$',
						'^\\.\\./\\.\\.(?!/?$)',
						'^\\.\\./\\.\\./\\.\\./?$',
						'^\\.\\./\\.\\./\\.\\.(?!/?$)',
					],
					['^@/types'], // other that didnt fit in
					['^'],
				],
			},
		], //#endregion  //*======== Import Sort ===========

		//#region  //*=========== Unicorn ===========
		'unicorn/prevent-abbreviations': [
			'error',
			{
				replacements: {
					props: false,
					args: false,
				},
				allowList: {
					ProcessEnv: true,
				},
			},
		],
		'unicorn/filename-case': 0,
		'unicorn/no-null': 0,
		'unicorn/no-array-reduce': 0,
		'unicorn/prefer-module': 0,
		//#endregion  //*======== Unicorn ===========
		// Cypress
		'cypress/no-assigning-return-values': 'error',
		'cypress/no-unnecessary-waiting': 'error',
		'cypress/assertion-before-screenshot': 'warn',
		'cypress/no-force': 'warn',
		'cypress/no-async-tests': 'error',
		'cypress/no-pause': 'error',
	},
	globals: {
		React: true,
		JSX: true,
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
		{
			files: ['cypress/**/*.{js,ts}', '*.{jsx,tsx}'],
			rules: {
				'sonarjs/no-duplicate-string': 'off',
			},
		},
	],
};
