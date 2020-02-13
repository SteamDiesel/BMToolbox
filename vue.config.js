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
		workboxPluginMode: 'GenerateSW',
		// workboxPluginMode: 'InjectManifest',
		// workboxOptions: {
		// 	// swSrc is required in InjectManifest mode.
		// 	swSrc: 'service-worker.js',
		// 	// ...other Workbox options...
		// }
	}
}