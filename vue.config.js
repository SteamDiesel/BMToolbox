module.exports = {
	devServer: {
		host: 'lite.bdfi.test'
	},
	pwa: {
		name: 'BDFI',
		themeColor: '#2d3748',
		msTileColor: '#2d3748',
		appleMobileWebAppCapable: 'no',
		appleMobileWebAppStatusBarStyle: 'default',
		manifestPath: 'manifest.json',
		workboxPluginMode: 'InjectManifest',
		
		workboxOptions: {
			// swSrc is required in InjectManifest mode.
			swSrc: 'sw.js',
			// ...other Workbox options...
			}
		
	}
}