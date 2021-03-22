<template>
	<div>
		<div class="not-page">
			<img src="../assets/404.png" />
			<div class="btn-warp">
				<div @click="onGoHome">返回首页</div>
				<div @click="onGoBack">返回上一页</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			onGoHome() {
				this.$router.replace({path: '/'})
			},
			onGoBack() {
				this.$router.go(-1)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.not-page {
		width: 70%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-80%);

		img {
			width: 100%;
			height: 240px;
		}
		
		.btn-warp {	
			display: flex;
			align-items: center;
			justify-content: space-around;

			div {
				font-size: 14px;
				width: 40%;
				text-align: center;
				border-radius: 4px;
				height: 30px;
				line-height: 30px;

				&:first-child {
					border: 1px solid #1A6BE6;
					color: #1A6BE6;
				}

				&:last-child {
					color: #fff;
					background-color: #1A6BE6;
				}
			}
		}
	}
</style>
