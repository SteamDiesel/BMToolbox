module.exports = {
	devServer: {
		host: 'lite.bdfi.test'
	},
	pwa: {
		name: 'BDFI',
		themeColor: '#2d3748',
		msTileColor: '#2d3748',
		appleMobileWebAppCapable: 'no',
		appleMobileWebAppStatusBarStyle: 'black',
		manifestPath: 'manifest.webmanifest',

		workboxPluginMode: 'GenerateSW',
	}
}