<template>
	<div id="app">
		<router-view class="container" />
	</div>
</template>
<script>
	import config from "../package.json";
	export default {
		mounted() {
			console.log("当前版本号：", config.version);
		},
	};
</script>

<style lang="scss">
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: scroll;
		background-color: #efefef;
	}
</style>
