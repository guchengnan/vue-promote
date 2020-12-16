// 用户相关的接口
import axios from './index.js'

//向外暴露一个方法 谁调用这个方法 相当于 返回一个ajax的实例
export default {
	getVideos() {
		return axios.request({
			url: '/user/getVideos',
			method: 'get'
		})
	},
	getNews() {
		return axios.request({
			url: '/user/getNews',
			method: 'get'
		})
	}
}