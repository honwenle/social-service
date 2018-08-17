<template>
  <div>
    <div class="top">
      <div class="wrap-width">
        <div class="logo-title">社会公众服务平台<div class="sub-title">SHEHUIGONGZHONGFUWUPINGTAI</div></div>
        <div class="nav">
          <div class="nav-item">
            <router-link to="/">
              <font-icon name="home"></font-icon>
              首页
            </router-link>
          </div>
          <div class="nav-item">
            <span>
              <font-icon name="barrage"></font-icon>
              信息服务
            </span>
            <div class="sub-nav">
              <router-link v-for="item in typeList" :key="item.id" to="/list">{{item.cTitle}}</router-link>
            </div>
          </div>
          <div class="nav-item">
            <span>
              <font-icon name="pc"></font-icon>
              技术服务
            </span>
            <div class="sub-nav">
              <router-link to="/product">农资信息</router-link>
              <router-link to="/source">农资溯源</router-link>
              <router-link to="/source">农产品溯源</router-link>
            </div>
          </div>
          <div class="nav-item">
            <span>
              <font-icon name="message"></font-icon>
              互动服务
            </span>
            <div class="sub-nav">
              <router-link to="/list">咨询服务</router-link>
              <router-link to="/report">微动服务</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-width">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      typeList: []
    }
  },
  mounted() {
    this.getTypeList()
  },
  methods: {
    async getTypeList() {
      let {data} = await this.$http('GetNewsTypeList')
      if (data.Code == 10000) {
        this.typeList = data.Content.List
      }
    }
  }
}
</script>

<style>
html,body{
  margin: 0;
}
.top{
  background: url('./assets/top.png');
  background-position: center;
  height: 260px;
  position: relative;
  z-index: 2;
}
@media screen and (max-width: 1024px) {
  .top{
    height: 130px;
    background-size: cover;
  }
  .nav-item{
    flex: 1;
    font-size: 13px;
  }
}
.wrap-width{
  max-width: 1000px;
  margin: auto;
  position: relative;
  height: 100%;
}
.nav {
  position: absolute;
  bottom: 0;
  background: #0d8ee9;
  width: 100%;
  display: flex;
  color: #fff;
}
.nav a{
  color: #fff;
  text-decoration: none;
}
.nav-item{
  padding: 10px;
  position: relative;
  text-align: center;
}
.sub-nav{
  display: none;
  background: #0e84d7;
  position: absolute;
  font-size: 14px;
  top: 100%;
  left: 0;
  width: 100%;
  line-height: 1.5;
}
.nav-item:hover{
  background: #0e84d7;
}
.nav-item:hover .sub-nav{
  display: block;
}
.sub-nav a{
  display: block;
}
</style>
