<template>
	<div class="mixins-a">
		<h1>MixinsA组件 | 引用Mixins</h1>
		<div>
			<mark>{{ count }}</mark>
			<button @click="handleClick(1)">操作+1</button>
		</div>
	</div>
</template>

<script>
import Mixins from './mixins.js'
export default {
	name: 'MixinsA',
	mixins: [Mixins]
};
</script>

<style scoped lang="scss"></style>
