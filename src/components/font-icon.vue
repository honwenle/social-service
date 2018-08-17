<template>
  <span :style="{color: color, fontSize: size}" :class="'iconfont icon-' + name"></span>
</template>
<script>
export default {
  props: {
    name: String,
    color: {
      default: ''
    },
    size: {
      default: '16px'
    }
  }
}
</script>
<style scoped>
@import "//at.alicdn.com/t/font_795253_ryc1pulayp9.css";
.iconfont{
  display: inline-block;
  vertical-align: middle;
}
</style>
