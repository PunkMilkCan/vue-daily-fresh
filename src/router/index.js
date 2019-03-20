import Vue from 'vue'
import Router from 'vue-router'

const TabbarLayout = () => import('@/layouts/TabbarLayout')

const ShouYe = () => import('@/pages/shouye/ShouYe')
const AddressChose = () => import('@/pages/addressChose/AddressChose')
const CityList = () => import('@/pages/addressChose/CityList')
const LocationSearch = () => import('@/pages/addressChose/LocationSearch')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TabbarLayout',
      component: TabbarLayout,
      children: [
        {
          path: '/',
          name: '首页',
          component: ShouYe
        }
      ]
    },
    {
      path: '/addressChose',
      name: '选择地址',
      component: AddressChose
    },
    {
      path: '/cityList',
      name: '支持城市列表',
      component: CityList
    },
    {
      path: '/locationSearch',
      name: '搜索地址',
      component: LocationSearch
    }
  ]
})
