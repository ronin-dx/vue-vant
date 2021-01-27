<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import config from '../package.json'
export default {
  created() {
    console.log('当前版本号：',config.version)
  }
}
</script>

<style lang="scss">

</style>
