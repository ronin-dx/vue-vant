<template>
  <div class="home">
    <router-view class="router" />
    <van-tabbar
      v-model="active"
      placeholder
      safe-area-inset-bottom
      active-color="#999999"
      inactive-color="#999999"
      @change="handleTabbarClick"
      route
    >
      <van-tabbar-item to="/">
        <span>查询报告</span>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        report: require("@/assets/tabbar/report.png"),
        report_select: require("@/assets/tabbar/report_select.png"),
        my: require("@/assets/tabbar/my.png"),
        my_select: require("@/assets/tabbar/my_select.png"),
      },
    };
  },
  created() {},
  methods: {
    handleTabbarClick(e) {
      this.active = e;
    },
  },
};
</script>
<style lang="scss" scoped>
.router {
  width: 100%;
  height: 100%;
}
.home {
  width: 100%;
  height: 100%;
}
.van-tabbar-item {
  background-color: #eeedee;
}
</style>
