<template>
	<div class="mixins-b">
		<h1>MixinsC组件|覆盖Mixins</h1>
		<div>
			<mark>{{ count }}</mark>
			<button @click="handleClick(1)">操作+3</button>
		</div>
	</div>
</template>

<script>
import Mixins from './MixinsA.vue'
export default {
	name: 'MixinsB',
	mixins: [Mixins],
	methods: {
		handleClick() {
			this.count+= 3
		}
	}
};
</script>

<style scoped lang="scss"></style>
