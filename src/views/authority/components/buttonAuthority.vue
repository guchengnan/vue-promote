<script>
export default {
	name: 'ButtonAuthority',
	props: {
		renderButton: {
			type: Object
		}
	},
	methods: {
		handleClick() {
			alert(1)
		}
	},
	render(createElement, params) {
		const { record, buttonList } = this.renderButton
		return createElement('template', {}, {
			buttonList.map(item => {
				return createElement('a',{
					attrs: {
				        href: 'javascript:;'
				    },
					domProps: {
						innerHTML: item
					},
					on: {
						click: this.handleClick
					}
				})
			})
		});
	}
};
</script>
