<template>
  <div class="fz14">
    <div class="h1">{{detail.cTitle}}</div>
    <div class="h2">发布人：{{detail.cReleaseUserName}}</div>
    <div class="h2">发布时间：{{detail.tReleaseDate | sqlDate}}</div>
    <div v-html="detail.cContent"></div>
  </div>
</template>
<script>
export default {
  computed: {
    detail() {
      return this.$store.state.detailData
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
