<template>
	<div class="mixins-b">
		<h1>MixinsB组件|引用UI和Mixins</h1>
		<Common></Common>
	</div>
</template>

<script>
import Common from './common.vue'
import Mixins from './MixinsA.vue'
export default {
	name: 'MixinsB',
	mixins: [Mixins],
	components: {
		Common
	}
};
</script>

<style scoped lang="scss"></style>
