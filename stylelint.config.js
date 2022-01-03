module.exports = {
	customSyntax: 'postcss-html',
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recommended-vue',
		'stylelint-config-prettier',
	],
	// add your custom config here
	// https://stylelint.io/user-guide/configuration
	rules: {
		'at-rule-no-unknown': null,
		'no-empty-source': null,
		'rule-empty-line-before': null,
		'selector-list-comma-newline-after': null,
		'no-descending-specificity': null,
		'declaration-colon-space-after': 'always',
		'color-function-notation': 'legacy',
	},
};
