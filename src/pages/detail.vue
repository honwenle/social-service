<template>
  <div class="fz14">
    <div class="h1">{{detail.cTitle}}</div><br>
    <div class="h2">发布人：{{detail.cReleaseUserName}}</div><br>
    <div class="h2">发布时间：{{detail.tReleaseDate | sqlDate}}</div><br><br>
    <div v-html="detail.cContent"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detail: {}
    }
  },
  async mounted() {
    let {data} = await this.$http('GetContent', {
      params: {id: this.$route.query.id}
    })
    if (data.Code == 10000) {
      this.detail = data.Content
    }
  }
}
</script>
<style scoped>
.fz14{
  font-size: 14px;
}
.h1,.h2{
  text-align: center;
}
.h1{
  font-size: 25px;
}
</style>
