module.exports = {
	presets: [
		[
			'@babel/preset-env', // какой пресет использовать
			{
				targets: { // какие версии браузеров поддерживать
					esmodules: true,
					edge: '17',
					ie: '11',
					firefox: '50',
					chrome: '64',
					safari: '11.1'
				},
			}],
		'@babel/preset-react',
	],
	plugins: [
		['@babel/transform-runtime']
	]
};
