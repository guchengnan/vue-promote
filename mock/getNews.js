module.exports = (req) => {
	const { url, method, query } = req
	return {
		code: '200',
		message: '成功',
		'data|4': [{
			title: '@cword(5, 10)',
			content: '@cparagraph()',
			url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
		}]
	}
}
