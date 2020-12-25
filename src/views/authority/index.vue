<template>
	<div class="authority">
		<h1>我的任务</h1>
		<a-table :columns="columns" :data-source="data" :pagination="false"></a-table>
	</div>
</template>

<script>
const columns = [
	{
		title: '姓名',
		dataIndex: 'name'
	},
	{
		title: '角色',
		dataIndex: 'role'
	},
	{
		title: '操作',
		dataIndex: 'operation',
		key: 'operation',
		customRender: (text, record) => {
			console.log(text, record);
			const buttonList = ['学院活动', '团员活动', '班级活动']
			return(
				buttonList.map(item => {
					return item
				})
			)
			// switch (record.authority) {
			// 	case 0:
			// 		return <div>1234</div>
			// // 	case 2:
			// // 		return {
			// // 			record,
			// // 			buttonList: ['团员活动', '班级活动']
			// // 		};
			// // 	default:
			// // 		return {
			// // 			record,
			// // 			buttonList: ['班级活动']
			// // 		};
			// }
		}
	}
];
const data = [
	{
		key: 1,
		name: '张三',
		role: '老师',
		authority: 0
	},
	{
		key: 2,
		name: '李四',
		role: '班长',
		authority: 1
	},
	{
		key: 3,
		name: '王五',
		role: '团支书',
		authority: 2
	},
	{
		key: 4,
		name: '赵六',
		role: '学习委员',
		authority: 3
	},
	{
		key: 5,
		name: '田七',
		role: '体育委员',
		authority: 4
	},
	{
		key: 6,
		name: '王八',
		role: '生活委员',
		authority: 5
	},
	{
		key: 7,
		name: '孙九',
		role: '学生',
		authority: 6
	},
	{
		key: 8,
		name: '何十',
		role: '学生',
		authority: 7
	}
];
export default {
	data() {
		return {
			data,
			columns
		};
	}
};
</script>

<style></style>
