module.exports = (req) => {
	const { url, method, query } = req
	return {
		code: '200',
		message: '成功',
		'data|5-10': [{
			url: '@url()'
		}]
	}
}
