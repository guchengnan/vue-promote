const A = {
	namespaced: true, // 开启命名空间 this.$store.commit('A/changeMsg')
	state: {
		msg: 'ModuleA数据'
	},
	mutations: {
		changeMsg(state, val) {
			state.msg = val
		}
	},
}

export default A
