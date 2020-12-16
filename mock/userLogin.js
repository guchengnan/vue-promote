module.exports = (req) => {
	const {
		url,
		method,
		params
	} = req
	console.log(JSON.stringify({
		url,
		method,
		params
	}, null, 4))
	return {
		code: '200',
		message: '成功',
		data: {
			tokenValue: '@guid()',
			userName: '@cname()',
			userId: '@id()',
		}
	}
}
