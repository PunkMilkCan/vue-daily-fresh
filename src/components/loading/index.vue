<template>
  <div class="loading-mask">
    <img src="https://static-as.missfresh.cn/frontend/mfs3/web/static/img/loading-gif.0ea1e7d.gif">
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="less">
.loading-mask {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: white;
  z-index: 900;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2.34rem;
    margin-left: -1.17rem;
    margin-top: -1.17rem;
  }
}
</style>
