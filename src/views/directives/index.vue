<template>
	<div class="directives">
		<a-list header="自定义指令">
			<a-list-item>
				<a-comment author="v-focus" avatar="https://lh3.googleusercontent.com/ogw/ADGmqu8rlFwo2Fg_4TJiJFvpcnsfTtEqywOdLCkWSWs=s64-c-mo">
					<p slot="content">
						<textarea type="text" v-focus style="width: 70vw;"></textarea>
					</p>
				</a-comment>
			</a-list-item>
			<a-list-item>
				<a-comment author="v-copy" avatar="https://lh3.googleusercontent.com/ogw/ADGmqu8rlFwo2Fg_4TJiJFvpcnsfTtEqywOdLCkWSWs=s64-c-mo">
					<p slot="content" v-html="pre"></p>
					<template slot="actions">
						<a href="javascript:;" v-copy="pre">复制文本</a>
						<small>（{{ time }}s后刷新）</small>
					</template>
				</a-comment>
			</a-list-item>			
		</a-list>
	</div>
</template>

<script>
import moment from 'moment';
export default {
	data() {
		return {
			time: 5,
			pre: '\u5c8c',	
		};
	},
	created() {
			this.randomText()
	},
	methods: {
		randomText() {
			setInterval(() => {
				this.time--
				if(!this.time){
					this.pre = `\\u${(Math.round(Math.random() * 20901) + 19968).toString(16)}`
					this.time = 5
				}
			}, 1000)
		}
	}
};
</script>

<style></style>
