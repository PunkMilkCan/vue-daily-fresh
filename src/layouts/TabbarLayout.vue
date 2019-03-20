<template>
  <div class="tab-bar-wrapper-flex">
    <div class="body">
      <router-view/>
    </div>
    <div class="tab-bar-wrapper">
      <tabbar>
        <tabbar-item>
          <img slot="icon" src="https://common.cnblogs.com/images/copycode.gif">
          <span slot="label">Wechat</span>
        </tabbar-item>
        <tabbar-item show-dot>
          <img slot="icon" src="https://common.cnblogs.com/images/copycode.gif">
          <span slot="label">Message</span>
        </tabbar-item>
        <tabbar-item selected link="/component/demo">
          <img slot="icon" src="https://common.cnblogs.com/images/copycode.gif">
          <span slot="label">Explore</span>
        </tabbar-item>
        <tabbar-item badge="2">
          <img slot="icon" src="https://common.cnblogs.com/images/copycode.gif">
          <span slot="label">News</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'TabbarLayout',
  components: {
    Tabbar,
    TabbarItem
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.tab-bar-wrapper-flex {
  display: flex;
  flex-direction: column;
  height: 100%;
  .body {
    flex: 1;
    overflow: hidden;
  }
  .tab-bar-wrapper {
    .weui-tabbar {
      position: relative;
      background-color: rgba(247, 247, 250, 0.95);
    }
  }
}
</style>
