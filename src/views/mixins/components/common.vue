<template>
	<div class="common">
		<mark>{{ count }}</mark>
		<button @click="handleClick(2)">操作+2</button>
	</div>
</template>

<script>
import Mixins from './mixins.js';
export default {
	name: 'Common',
	mixins: [Mixins]
};
</script>

<style></style>
