<template>
  <div>
    <page-title>
      <div class="search">
        <input v-model="keyword" placeholder="请输入PD码、产品名称查询" type="text">
        <button @click="getData">查询</button>
      </div>
    </page-title>
    <div class="content" v-show="dataInfo.id">
      <div class="product-cell __w100p" v-for="(item, i) in fieldList" :key="i">
        <div class="label">{{labelList[i]}}</div>
        <div class="value">{{dataInfo[item]}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: '',
      dataInfo: {},
      labelList: ['通用名','商品名','产品类别','剂型','毒性','生产地址','生产企业','登记证号','执行标准','有效成分','规格','生产许可证号','产品标准号','保质期','图片','备注'],
      fieldList: ['cCommonName','cBusinessName','cProductType','cJX','cToxic','cAddress','cProductor','cPDNumber','cZXBZ','cYXCF','fGroupType','cSCXKZH','cCPBZH','fQualityNum','cPics','cDesc']
    }
  },
  methods: {
    async getData() {
      let {data} = await this.$http('GetProductModelByNameOrNum', {
        params: {
          search: this.keyword
        }
      })
      if (data.Code == 10000) {
        this.dataInfo = data.Content
      } else {
        alert(data.Message)
      }
    }
  }
}
</script>
<style scoped>
.content{
  padding: 15px 0;
  overflow: hidden;
}
.label{
  width: 25%;
}
.value{
  border: 1px solid #e3e3e3;
  width: 65%;
  box-sizing: border-box;
  min-height: 1em;
  padding: 0 10px;
}
.label,.value{
  float: left;
  height: 30px;
  line-height: 30px;
}
</style>
