<template>
  <div>
    <page-title>
      <div class="search">
        <input v-model="keyword" placeholder="请输入溯源码查询" type="text">
        <button @click="getList">查询</button>
      </div>
    </page-title>
    <div class="content" v-show="dataList">
      <div class="line-item" v-for="item in dataList" :key="item.id">
        <div class="item-text">供应商：{{item.cSeller}}</div>
        <div class="item-text">操作人：{{item.cBuyer}}({{item.cAction}})</div>
        <div class="item-text">{{item.tDate | sqlDate}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [],
      keyword: ''
    }
  },
  methods: {
    async getList() {
      let {data} = await this.$http(['GetSourceLog', 'GetProducSourceLog'][this.$route.query.type], {
        params: {
          code: this.keyword
        }
      })
      if (data.Code == 10000) {
        this.dataList = data.Content.List
      } else {
        alert(data.Message)
      }
    }
  }
}
</script>
<style scoped>
.content{
  padding: 20px 0;
}
.line-item {
  position: relative;
  padding-left: 10px;
  padding-bottom: 20px;
  margin: 0 5px;
  border-left: 2px solid #0d8de9;
}
.line-item:before {
  content: '';
  width: 10px;
  height: 10px;
  background: #0d8de9;
  display: block;
  border-radius: 50%;
  position: absolute;
  left: -6px;
}
</style>
