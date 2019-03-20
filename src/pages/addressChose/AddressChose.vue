<template>
  <div class="address-chose">
    <x-header class="vux-1px-b" :left-options="{showBack: false}"><p>选择收货地址</p></x-header>
    <div class="address-wrapper">
      <SearchBox :options="searchBoxOptions" @click.native="handelLocationSearch">
        <div slot="left" @click.stop="handelChoseCity">{{citySelected}}<i class="iconfont icon-xiala"></i></div>
      </SearchBox>
    </div>
    <div class="address-tip">因各地区商品和配送服务不同，请您选择准确收货地址</div>
    <div class="address-location">
      <i class="iconfont icon-target-lock"></i>
      <p v-if="!isGetLocation">{{city}}<span class="color-9">当前位置</span></p>
      <p v-else class="color-9">正在获取您的地址</p>
      <i class="iconfont icon-shuaxin color-9" :class="{ animationRotate: isGetLocation }" @click="getLocation"></i>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import SearchBox from '@/components/searchBox'
import { mapState } from 'vuex'
import { loadScript } from '@/utils'
export default {
  name: 'AddressChose',
  components: {
    XHeader,
    SearchBox
  },
  computed: {
    ...mapState({
      citySelected: (state) => state.com.city
    })
  },
  data () {
    return {
      searchBoxOptions: {
        placeholder: '请输入要收货的小区/写字楼'
      },
      isGetLocation: true,
      city: '上海'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      /*
        加载一个js文件用于定位
        */
      let script = loadScript('http://api.map.baidu.com/getscript?v=2.0&ak=6yAoynmTPNlTBa8z1X4LfwGE&services=&t=20190123111209')
      script.then(() => {
        this.getLocation()
      }).catch(() => {
        this.isGetLocation = false
        this.$vux.toast.text('获取定位失败')
      })
    },
    getLocation () {
      /*
        定位中...
        */
      let _this = this
      if (_this.isGetLocation) return
      _this.isGetLocation = true
      // eslint-disable-next-line
      var geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function (r) {
        // eslint-disable-next-line
        if (this.getStatus() === BMAP_STATUS_SUCCESS) {
          // eslint-disable-next-line
          var mk = new BMap.Marker(r.point)
          var currentLat = mk.point.lat
          var currentLon = mk.point.lng
          // eslint-disable-next-line
          var pt = new BMap.Point(currentLon, currentLat)
          // eslint-disable-next-line
          var geoc = new BMap.Geocoder()
          geoc.getLocation(pt, function (rs) {
            _this.isGetLocation = false
            _this.city = rs.addressComponents.city
            _this.citySelected = _this.city
            console.log(rs)
          })
        }
      })
    },
    handelChoseCity () {
      this.$router.push({path: '/cityList', query: this.$route.query})
    },
    handelLocationSearch () {
      this.$router.push({path: '/locationSearch'})
    }
  }
}
</script>

<style lang="less" scoped>
.address-chose {
  height: 100%;
  background: #f5f5f5;
  .address-wrapper {
    padding: .7em 1em;
    background: #fff;
  }
  .address-tip {
    font-size: 12px;
    padding: 1em;
    color: #f4a22d;
  }
  .address-location {
    font-size: 13px;
    padding: .4em 1em;
    display: flex;
    align-items: center;
    color: #333;
    background: #fff;
    .icon-target-lock {
      font-size: 25px;
      color: rgb(255, 44, 65);
    }
    p {
      flex: 1;
      margin-left: 5px;
      span {
        margin-left: 5px;
      }
    }
  }
}
.vux-header {
  background: #fff;
  p {
    color: #333;
    font-size: 17px;
  }
}
.vux-header.vux-1px-b:after {
  transform: scaleY(0.3);
}
</style>
