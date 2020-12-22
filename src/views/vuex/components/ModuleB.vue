<template>
  <div class="module-a">
    <h1>Module-B组件</h1>
	<h2>{{ $store.state.msg }} | {{ $store.state.B.msg }}</h2>
	<button @click="handleChange(true)">修改公共</button>
	<button @click="handleChange(false)">修改ModuleB</button>
  </div>
</template>

<script>
export default {
  name: 'ModuleB',
  methods: {
	  handleChange(status) {
	  	if (status) {
	  		// 公共方法
	  		this.$store.commit('changeMsg', 'B让我改变');
	  	} else {
	  		// 模块A自己方法
			/* 
				开启命名空间 this.$store.commit('模块名称/方法名')
				不开启命名空间 this.$store.commit('方法名') - 如果模块内部和公有都有同一方法名则使用公有的
			*/
	  		this.$store.commit('B/changeMsg', 'BBBBBBB')
	  	}
	  }
  }
}
</script>

<style scoped lang="scss">

</style>
