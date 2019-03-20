<template>
  <div class="my-search-box" :style="{ backgroundColor: settings.backgroundColor }">
    <slot name="left"></slot>
    <div class="my-search-group">
      <i class="iconfont icon-sousuo"></i>
      <div class="my-search-input" @click="handelInput">
        <input type="text" ref="input" v-model="inputValue" @focus="handelFocus" @blur="handelBlur" />
        <p class="my-search-placeholder" v-show="isFocus && !inputValue" :style="{ color: settings.placeholderColor }">{{settings.placeholder}}</p>
      </div>
      <i class="iconfont icon-guanbi" v-show="inputValue" @click="handelClear"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddressChose',
  props: [
    'options'
  ],
  data () {
    return {
      settings: {
        placeholder: '',
        placeholderColor: '#333',
        backgroundColor: '#f5f5f5'
      },
      isFocus: true,
      inputValue: ''
    }
  },
  mounted () {
    // eslint-disable-next-line
    _.merge(this.settings, this.options) // 调用lodash中提供的merge函数合并配置
  },
  methods: {
    handelInput () {
      this.$refs.input.focus()
    },
    handelFocus () {
      this.isFocus = false
    },
    handelBlur () {
      this.isFocus = true
    },
    handelClear (e) {
      this.inputValue = ''
    }
  }
}
</script>

<style lang="less" scoped>
.my-search-box {
  display: flex;
  border-radius: 5px;
  font-size: 13px;
  padding: .6em;
  align-items: center;
  .my-search-group {
    flex: 1;
    display: flex;
    .icon-sousuo {
      font-size: 13px;
      margin: 0 .5em;
      color: #999;
    }
    .icon-sousuo:before {
      position: relative;
      top: 1px;
    }
    .icon-guanbi {
      font-size: 13px;
      color: #999;
    }
    .my-search-input {
      flex: 1;
      position: relative;
      input {
        width: 100%;
        padding-right: 2%;
        background: rgba(0, 0, 0, 0);
        position: absolute;
        top: 2px;
      }
      .my-search-placeholder {
        position: relative;
        top: 2px;
      }
    }
  }
}
</style>
