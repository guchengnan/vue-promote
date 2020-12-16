// 引入axios
import axios from "axios"

// 环境的配置，区分生产环境和开发环境
axios.defaults.baseURL = "http://localhost:8080/";

// 设置超时时间，单位毫秒
axios.defaults.timeout = 50000
// 设置是否允许跨域和是否允许携带凭证，如果该设置为false，请求时不允许携带凭证
axios.defaults.withCredentials = true

axios.interceptors.request.use(
	config => {
		// 携带token，从本地读取到token，然后添加到请求头
		const token = localStorage.getItem("token")
		token && (config.headers.Authorization = token)
		return config
	},
	error => {
		return Promise.reject(error)
	}
);

axios.interceptors.response.use(
	response => {
		// 成功后返回response的主体，其他数据一般并不需要，这样在使用中只需要关注数据主体就可以
		return response.data
	},
	error => {
		let {
			response
		} = error // 等效于error.response
		if (response) {
			// 服务器返回了结果
			// 这里能够读出服务器返回的错误HTTP状态码，根据不同状态码进行不同处理
			// 这个根据业务需求操作即可
			switch (response.status) {
				case 401:
					// 权限不够，一般是未登录
					// ...
					break
				case 403:
					// 服务器已经接受，但是拒绝访问，通常是登录过期
					// ...
					localStorage.removeItem("token");
					break
				case 404:
					// 找不到资源
					// ...
					break
			}
		} else {
			// 服务器根本就没有返回任何东西
			// 这里一般只有两种情况，服务器崩溃，客户端没有网。
			// 通常在这里做断网处理
			if (!window.navigator.onLine) {
				// 处理断网
				// ...
				return
			}
			// 什么都不是，返回一个错误
			return Promise.reject(error)
		}
	}
);
export default axios
