<template>
	<div>
		<div>首页</div>
		<tabbar />
	</div>
</template>

<script>
	import Tabbar from "@/components/Tabbar/index"
	export default {
		components: {
			Tabbar
		},
		data() {
			return {
				value: ""
			};
		},
		computed: {},
		mounted() {},
		methods: {
			onLoginPage() {
				this.$router.push({
					path: 'login'
				})
			}
		},
	};
</script>
<style lang="scss" scoped></style>
