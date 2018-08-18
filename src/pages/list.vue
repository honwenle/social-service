<template>
  <div>
    <page-title>
      <div v-show="$route.query.type" class="bt">发起提问</div>
    </page-title>
    <div class="list" v-if="dataList.length > 0">
      <div class="row" v-for="item in dataList" :key="item.id">
        <div class="col col-left">{{item.cTitle}}</div>
        <div class="col col-right">{{$route.query.type ? item.tPostDate : item.tReleaseDate | sqlDate}}</div>
      </div>
    </div>
    <div v-else>暂无记录</div>
    <div class="nav-page">
      <div class="nav-page-item" @click="pageIndex--">上一页</div>
      <span>{{pageIndex}}/{{pageCount}}</span>
      <div class="nav-page-item" @click="pageIndex++">下一页</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [],
      pageIndex: 1,
      pageCount: 1
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    '$route'(to, from) {
      this.init()
    },
    pageIndex(ne, ol) {
      if (ne > this.pageCount) {
        this.pageIndex = ol
      } else if (ne < 1) {
        this.pageIndex = 1
      } else {
        this.getList()
      }
    }
  },
  methods: {
    init() {
      this.pageIndex = 1
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
        this.pageCount = data.Content.PageCount
      }
    }
  }
}
</script>
<style scoped>
.list{
  min-height: 400px;
}
.nav-page{
  text-align: center;
  padding: 15px 0;
  font-size: 14px;
  color: #0d8ee9;
}
.nav-page-item{
  display: inline-block;
}
</style>
