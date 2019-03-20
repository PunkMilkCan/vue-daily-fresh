// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'lib-flexible'
import _ from 'lodash' // 引入第三方JavaScript 实用工具库

import { ToastPlugin } from 'vux'

import { setUuid } from '@/utils'

import '@/common/styles/base.css'
import '@/common/styles/common.css'

Vue.config.productionTip = false

Vue.prototype._ = _
Vue.use(ToastPlugin)

setUuid() // 在vuex中存储随机生成的uuid

// 路由跳转前的钩子
router.beforeEach(function (to, from, next) {
  store.commit('isLoading', true)
  next()
})

// 路由跳转后的钩子
router.afterEach(function (to) {
  store.commit('isLoading', false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
