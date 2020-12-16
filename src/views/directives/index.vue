<template>
	<div class="directives">
		<a-list :header="自定义指令">
			<a-list-item>
				<a-comment author="v-focus" avatar="https://lh3.googleusercontent.com/ogw/ADGmqu8rlFwo2Fg_4TJiJFvpcnsfTtEqywOdLCkWSWs=s64-c-mo">
					<p slot="content">
						<textarea type="text" v-focus style="width: 70vw;"></textarea>
					</p>
				</a-comment>
			</a-list-item>
			<a-list-item>
				<a-comment author="v-copy" avatar="https://lh3.googleusercontent.com/ogw/ADGmqu8rlFwo2Fg_4TJiJFvpcnsfTtEqywOdLCkWSWs=s64-c-mo">
					<p slot="content">{{pre}}</p>
					<template slot="actions">
						<a href="javascript:;" v-copy="pre">复制文本</a>
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
			pre: `关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉，辗转反侧。参差荇菜，左右采之。窈窕淑女，琴瑟友之。参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。`,
			
		};
	}
};
</script>

<style></style>
