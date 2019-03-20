<template>
  <div id="app">
    <Loading v-show="isLoading"></Loading>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '@/components/loading'
export default {
  name: 'App',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.com.isLoading
    })
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less'; // vux提供的1px解决方案
html, body, #app {
  height: 100%;
}
</style>
