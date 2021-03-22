<template>
	<van-tabbar safe-area-inset-bottom placeholder active-color="#999999" inactive-color="#999999" route>
		
		<van-tabbar-item to="/">
			<span>首页</span>
			<template #icon="props">
				<img :src="props.active ? icon.report_select : icon.report" />
			</template>
		</van-tabbar-item>
		
		<van-tabbar-item to="/my">
			<span>个人中心</span>
			<template #icon="props">
				<img :src="props.active ? icon.my_select : icon.my" />
			</template>
		</van-tabbar-item>
		
	</van-tabbar>
</template>

<script>
	export default {
		data() {
			return {
				icon: {
					report: require("@/assets/tabbar/report.png"),
					report_select: require("@/assets/tabbar/report_select.png"),
					my: require("@/assets/tabbar/my.png"),
					my_select: require("@/assets/tabbar/my_select.png"),
				},
			};
		},
	};
</script>

<style>
</style>
