<template>
	<div id="app">
		<a-layout>
			<a-layout-sider v-model="collapsed" :trigger="null" collapsible>
				<div class="logo" />
				<a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
					<a-menu-item key="1">
						<a-icon type="home" />
						<router-link to="/">首页</router-link>
					</a-menu-item>
					<a-menu-item key="2">
						<a-icon type="video-camera" />
						<router-link to="/about">关于</router-link>
					</a-menu-item>
					<a-menu-item key="3">
						<a-icon type="api" />
						<router-link to="/directives">指令</router-link>
					</a-menu-item>
				</a-menu>
			</a-layout-sider>
			<a-layout>
				<a-layout-header><a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" /></a-layout-header>
				<a-layout-content>
					<router-view />
				</a-layout-content>
			</a-layout>
		</a-layout>
	</div>
</template>

<script>
export default {
	data() {
		return {
			collapsed: false
		};
	},
};
</script>

<style lang="scss" scoped>
.logo {
	height: 32px;
	background: rgba(255, 255, 255, 0.2);
	margin: 16px;
}
.ant-menu-item {
	a {
		display: inline;
		color: rgba(255, 255, 255, 0.65);
	}
}
.ant-layout {
	.ant-layout-sider{
		height: 100vh;
	}
	.ant-layout-header {
		background: rgb(255, 255, 255);
		padding: 0px;
		.trigger {
			font-size: 18px;
			line-height: 64px;
			padding: 0 24px;
			cursor: pointer;
			transition: color 0.3s;
			&:hover {
				color: #1890ff;
			}
		}
	}
	.ant-layout-content{
		margin: 24px;
		padding: 24px;
		// height: calc(100vh - 160px);
		overflow-y: auto;
		background: rgb(255, 255, 255);
	}
}
</style>
