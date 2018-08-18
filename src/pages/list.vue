<template>
  <div>
    <page-title>
      <div v-show="$route.query.type" class="bt">发起提问</div>
    </page-title>
    <div class="list">
      <div class="row" v-for="item in dataList" :key="item.id">
        <div class="col col-left">{{item.cTitle}}</div>
        <div class="col col-right">{{$route.query.type ? item.tPostDate : item.tReleaseDate | sqlDate}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [],
      pageIndex: 1
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    '$route'(to, from) {
      this.init()
    }
  },
  methods: {
    init() {
      this.dataList = []
      this.getList()
    },
    async getList() {
      let {data} = await this.$http(['GetNewsPages', 'GetPostByPages'][this.$route.query.type], {
        params: {
          fCategoryId: this.$route.query.id,
          pageIndex: this.pageIndex,
          pageSize: 10
        }
      })
      if (data.Code == 10000) {
        this.dataList = data.Content.List
      }
    }
  }
}
</script>
