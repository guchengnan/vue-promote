<template>
	<div class="request">
		<a-tabs default-active-key="1" @change="handleChange">
			<a-tab-pane key="1" tab="音频地址">
				<a-list size="small" bordered :data-source="videosList">
				      <a-list-item slot="renderItem" slot-scope="item, index">
				        {{ item.url }}
				      </a-list-item>
				    </a-list>
			</a-tab-pane>
			<a-tab-pane key="2" tab="新闻列表">
				<a-list :loading="loading" :data-source="newsList">
					<a-list-item slot="renderItem" slot-scope="item, index">
						<a-list-item-meta :description="item.content">
							<a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
							<a-avatar slot="avatar" :src="item.url" />
						</a-list-item-meta>
					</a-list-item>
				</a-list>
			</a-tab-pane>
		</a-tabs>
		<!--  -->
		<a-affix  :style="{ position: 'absolute', top: '123px', right: '50px'}">
			<a-icon type="reload" @click="handleChange(key)" />
		</a-affix>
	</div>
</template>

<script>
import API from '../../request/api.js';
export default {
	name: 'Request',
	data() {
		return {
			videosList: [],
			newsList: [],
			loading: false,
			key: 1
		};
	},
	created() {
			this.getVideos()
	},
	methods: {
		handleChange(key) {
			if (Number(key) === 1) {
				this.getVideos();
			} else {
				this.getNews();
			}
			this.key = Number(key)
		},
		getVideos() {
			API.getVideos().then(result => {
				this.videosList = result.data
			});
		},
		async getNews() {
			this.loading = true;
			const result = await API.getNews();
			this.loading = false;
			this.newsList = result.data;
		}
	}
};
</script>

<style lang="scss" scoped>
.request{
	div:last-child{
		cursor: pointer;
	}
}
</style>
