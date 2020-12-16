module.exports = {
	publicPath: "./",
	outputDir: "dist",
	devServer: {
		open: true,
		host: '0.0.0.0',
		port: 8080,
		https: false,
		hotOnly: false,
		proxy: {
			'/api': {
				target: "http://app.rmsdmedia.com",
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					"^/api": ""
				}
			}
		},
		before: require('./mock/index.js')
	}
}
