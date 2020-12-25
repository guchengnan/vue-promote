export default {
	data() {
		return {
			count: 1
		}
	},
	methods: {
		handleClick(num) {
			this.count += num
		}
	}
}