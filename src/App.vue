<template>
  <div>
    <div class="top">
      <div class="wrap-width">
        <div class="logo-title">社会公众服务平台<div class="sub-title">SHEHUIGONGZHONGFUWUPINGTAI</div></div>
        <div class="nav-pos">
          <div class="nav">
            <div class="nav-item">
              <router-link to="/">
                首页
              </router-link>
            </div>
            <div class="nav-item" @mouseover="showSub = true" @mouseout="showSub = false">
              <span>
                信息服务
              </span>
            </div>
            <div class="nav-item" v-if="item.fIsShow" v-for="item in typeList" :key="item.id">
              <router-link
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
            <div class="nav-item">
              <router-link :to="{path: '/product', query: {title: '农资信息'}}">农资信息</router-link>
            </div>
            <div class="nav-item">
              <router-link :to="{path: '/source', query: {title: '农资溯源', type: 0}}">农资溯源</router-link>
            </div>
            <div class="nav-item">
              <router-link :to="{path: '/source', query: {title: '农产品溯源', type: 1}}">农产品溯源</router-link>
            </div>
            <div class="nav-item">
              <router-link :to="{
                path: 'list',
                query: {type: 1, title: '咨询服务'}
              }">咨询服务</router-link>
            </div>
            <div class="nav-item">
              <router-link :to="{path: '/report', query: {title: '微动服务'}}">微动服务</router-link>
            </div>
          </div>
          <div class="sub-nav" v-show="showSub" @mouseover="showSub = true" @mouseout="showSub = false">
            <router-link
              v-if="!item.fIsShow"
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
        <div class="path __hidden">
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
      typeList: [],
      showSub: false
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
.nav-pos{
  position: absolute;
  bottom: 60px;
  width: 100%;
}
.nav {
  background: #0d8ee9;
  color: #fff;
  overflow-x: auto;
  white-space: nowrap;
}
.nav-pos a{
  color: #fff;
  text-decoration: none;
}
.nav-item{
  padding: 10px;
  position: relative;
  text-align: center;
  display: inline-block;
}
.sub-nav{
  background: #0e84d7;
  position: absolute;
  font-size: 14px;
  top: 100%;
  left: 50px;
  line-height: 2;
  z-index: 1;
  padding: 5px;
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

.search {
  overflow: hidden;
}
.search-icon{
  padding: 0 10px;
  border: 1px solid #ddd;
  border-right: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.search button{
  background: #0d8de9;
  border: none;
  color: #fff;
  padding: 0 15px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.search input{
  border: none;
  padding: 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.search input, .search button, .search-icon {
  float: left;
  height: 31px;
  line-height: 31px;
  box-sizing: border-box;
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
  .nav-pos{
    bottom: 0;
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
  .search input{
    width: 130px;
  }
}
</style>
