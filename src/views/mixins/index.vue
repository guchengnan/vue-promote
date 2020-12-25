<template>
	<div class="mixins">
		<h1>mixins</h1>
		<hr/>
		<MinxinsA></MinxinsA>
		<hr/>
		<MinxinsB></MinxinsB>
		<hr/>
		<MinxinsC></MinxinsC>
	</div>
</template>

<script>
import MinxinsA from './components/MixinsA.vue';
import MinxinsB from './components/MixinsB.vue';
import MinxinsC from './components/MixinsC.vue';
export default {
	name: 'Mixins',
	components: {
		MinxinsA,
		MinxinsB,
		MinxinsC
	}
};
</script>

<style></style>
