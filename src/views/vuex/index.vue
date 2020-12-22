<template>
	<div class="vuex">
		<h1>VUEX</h1>
		<hr/>
		<ModuleA></ModuleA>
		<hr/>
		<ModuleB></ModuleB>
	</div>
</template>

<script>
	import ModuleA from './components/ModuleA.vue'
	import ModuleB from './components/ModuleB.vue'
	export default {
		name: 'Vuex',
		components: {
			ModuleA,
			ModuleB
		}
	}
</script>

<style>
</style>
