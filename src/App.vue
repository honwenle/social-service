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
              <router-link
                v-for="item in typeList"
                :key="item.id"
                :to="{
                  path: 'list',
                  query: {
                    type: 0,
                    id: item.id,
                    title: item.cTitle
                  }
                }"
                v-html="item.cTitle"
              />
            </div>
          </div>
          <div class="nav-item">
            <span>
              <font-icon name="pc"></font-icon>
              技术服务
            </span>
            <div class="sub-nav">
              <router-link :to="{path: '/product', query: {title: '农资信息'}}">农资信息</router-link>
              <router-link :to="{path: '/source', query: {title: '农资溯源', type: 0}}">农资溯源</router-link>
              <router-link :to="{path: '/source', query: {title: '农产品溯源', type: 1}}">农产品溯源</router-link>
            </div>
          </div>
          <div class="nav-item">
            <span>
              <font-icon name="message"></font-icon>
              互动服务
            </span>
            <div class="sub-nav">
              <router-link :to="{
                path: 'list',
                query: {type: 1, title: '咨询服务'}
              }">咨询服务</router-link>
              <router-link :to="{path: '/report', query: {title: '微动服务'}}">微动服务</router-link>
            </div>
          </div>
        </div>
        <div class="path">
          当前位置：首页
        </div>
      </div>
    </div>
    <div class="wrap-width body-content">
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
img{
  max-width: 100%;
}
.center{
  text-align: center;
}
.ov{
  overflow: hidden;
}
.top{
  background: url('./assets/top.png');
  background-position: center;
  height: 260px;
  position: relative;
  z-index: 2;
}
.wrap-width{
  max-width: 1000px;
  margin: auto;
  position: relative;
  height: 100%;
}
.nav {
  position: absolute;
  bottom: 60px;
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
  line-height: 2;
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
.path{
  position: absolute;
  bottom: 0;
  color: #0d8ee9;
  font-size: 12px;
}
.title-left{
  font-size: 18px;
  color: #df3216;
  font-weight: bold;
  padding: 15px 0;
  border-bottom: 2px solid;
  min-width: 120px;
  float: left;
}
.title-right{
  float: right;
}
.page-title{
  border-bottom: 2px solid #f3f3f3;
  overflow: hidden;
}
.title-more{
  text-align: right;
  line-height: 50px;
  font-size: 14px;
  color: #666;
}
.row{
  overflow: hidden;
  padding: 5px 0;
}
.col{
  float: left;
}
.col-left{
  width: 70%;
}
.col-right{
  width: 30%;
  text-align: right;
}
.product-cell{
  width: 50%;
  float: left;
  overflow: hidden;
  margin: 10px 0;
}
.btn {
  cursor: pointer;
  display: inline-block;
  background: #0D8EE9;
  padding: 5px 1em;
  color: #fff;
  border-radius: 3px;
}
.btn.btn-cancel{
  background: #EEEEEE;
  color: #959595;
}
.logo-title {
  padding: 45px;
  font-size: 30px;
  color: #DF3216;
}
.sub-title {
  font-size: 14px;
  color: #000;
}
@media screen and (max-width: 1024px) {
  .body-content{
    padding: 10px;
  }
  .top{
    height: 130px;
    background-size: cover;
  }
  .nav-item{
    flex: 1;
    font-size: 13px;
  }
  .nav{
    bottom: 0;
  }
  .path{
    display: none;
  }
  .title-left{
    padding: 6px 0;
    font-weight: normal;
  }
  .__w100p{
    width: 100% !important;
  }
  .__hidden{
    display: none !important;
  }
  .logo-title{
    padding: 12px 5%;
  }
}
</style>
