<template>
	<div class="module-a">
		<h1>Module-A组件</h1>
		<h2>{{ $store.state.msg }} | {{ $store.state.A.msg }}</h2>
		<button @click="handleChange(true)">修改公共</button>
		<button @click="handleChange(false)">修改ModuleA</button>
	</div>
</template>

<script>
export default {
	name: 'ModuleA',
	methods: {
		handleChange(status) {
			if (status) {
				// 公共方法
				this.$store.commit('changeMsg', 'A让我改变');
			} else {
				// 模块A自己方法
				this.$store.commit('A/changeMsg', 'AAAAAAAA')
			}
		}
	}
};
</script>

<style scoped lang="scss"></style>
