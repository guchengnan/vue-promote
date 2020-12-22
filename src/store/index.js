import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		msg: '公共数据'
	},
	mutations: {
		changeMsg(state, val) {
			// 只能接收两个参数，如果有多个值第二个参数改成对象形式
			state.msg = val
		}
	},
	actions: {},
	modules: {
		A: {
			namespaced: true, // 开启命名空间 this.$store.commit('A/changeMsg')
			state: {
				msg: 'ModuleA数据'
			},
			mutations: {
				changeMsg(state, val) {
					state.msg = val
				}
			},
		},
		B: {
			namespaced: true,
			state: {
				msg: 'ModuleB数据'
			},
			mutations: {
				changeMsg(state, val) {
					state.msg = val
				}
			}
		}
	}
})
