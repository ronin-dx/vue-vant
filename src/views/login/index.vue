<template>
	<div class="container">
		<van-cell-group>
			<van-field v-model="value" label="文本" placeholder="请输入用户名" />
		</van-cell-group>
		<van-cell-group>
			<van-field v-model="value" label="文本" placeholder="请输入用户名" />
		</van-cell-group>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				value: ""
			};
		},
		//离开页面清除keep-alive的缓存
		deactivated() { 
			// this.$destroy(true)
		},
		computed: {},
		created() {

		},
		methods: {}
	}
</script>
<style lang='scss' scoped>
	
</style>
