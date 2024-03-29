module.exports = {
	presets: [
		'@vue/cli-plugin-babel/preset'
	],
	plugins: [
		['import', {
			libraryName: 'vant',
			libraryDirectory: 'es',
			style: true
		}, 'vant']
	],
	'env': {
		'development': {
			'plugins': ['dynamic-import-node']
		},
		'production': {
			'plugins': ['transform-remove-console']
		}
	}
}
