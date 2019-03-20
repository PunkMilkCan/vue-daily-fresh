<template>
  <div class="location-search">
    <div class="location-search-wrapper">
      <SearchBox></SearchBox>
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/searchBox'
export default {
  name: 'LocationSearch',
  components: {
    SearchBox
  },
  data () {
    return {
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
    }
  }
}
</script>

<style lang="less" scoped>
.location-search {
  min-height: 100%;
  background: #f5f5f5;
  .location-search-wrapper {
    padding: .5em 1em;
    background: #fff;
  }
}
</style>
