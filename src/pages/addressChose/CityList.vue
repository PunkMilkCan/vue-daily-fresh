<template>
  <div class="city-list" @click="handelClick">
    <div v-for="aera in cityList" :key="aera.ordering">
      <div class="city-title">- {{aera.name}} -</div>
      <div v-for="city in aera.areas" :key="city.area_code" :data-code="city.area_code" class="city-card" :class="{ active: city.name === citySelected }">{{city.name}}</div>
    </div>
    <div class="city-bottom color-9">我们将为更多城市提供优质服务，敬请期待</div>
  </div>
</template>

<script>
import { api } from '@/config/api'
import { mapState } from 'vuex'
export default {
  name: 'CityList',
  computed: {
    ...mapState({
      uuid: (state) => state.com.uuid,
      citySelected: (state) => state.com.city
    })
  },
  data () {
    return {
      cityList: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let params = {
        device_id: this.uuid,
        env: 'web',
        platform: 'web',
        uuid: this.uuid,
        access_token: null,
        version: '4.5.1.0.2',
        fromSource: 'zhuye',
        screen_height: 360,
        screen_width: 640
      }
      api('v2/address/list', params).then(res => {
        if (res.status === 200) {
          this.cityList = res.data
        } else {
          this.$vux.toast.text('获取城市列表失败')
        }
      })
    },
    handelClick (e) {
      if (e.target.dataset.code) {
        this.$store.commit('city', e.target.innerText)
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.city-list {
  padding: 0 1.5em;
}
.city-title {
  font-size: 13px;
  padding: 1.5em 0 0;
  color: #333;
}
.city-card {
  padding: .7em 0;
  width: 6em;
  border: 1px solid #000;
  display: inline-block;
  margin: 1.4em 1.2em 0 0;
  text-align: center;
  background: #f1f4f4;
}
.city-card.active {
  color: #fff;
  border: 1px solid #ff4891;
  background: #ff4891;
}
.city-bottom {
  font-size: 13px;
  text-align: center;
  padding: 3em 0;
}
</style>
