<template>
  <div class="ov">
    <div class="home-left home-col __w100p">
      <div class="part" v-if="dataInfo.Part1">
        <div class="h1 __hidden">{{dataInfo.Part1.NewsTitle}}</div>
        <div class="list">
          <div class="item __w100p" @click="goDetail(item)" v-for="item in dataInfo.Part1.NewsContent" :key="item.id">
            <div class="img" :style="{backgroundImage: `url(${$baseUrl + item.cPic})`}">
            </div>
            <div class="text">
              <div class="row">{{item.cTitle}}</div>
              <div class="row">{{item.cSubtitle}}</div>
              <div class="row">{{item.tReleaseDate | sqlDate}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="part" v-if="dataInfo.Part2">
        <div class="h1 __hidden">{{dataInfo.Part2.NewsTitle}}</div>
        <div class="list">
          <div class="item __w100p" @click="goDetail(item)" v-for="item in dataInfo.Part2.NewsContent" :key="item.id">
            <div class="img" :style="{backgroundImage: `url(${$baseUrl + item.cPic})`}">
            </div>
            <div class="text">
              <div class="row">{{item.cTitle}}</div>
              <div class="row">{{item.cSubtitle}}</div>
              <div class="row">{{item.tReleaseDate | sqlDate}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="part" v-if="dataInfo.Part3">
        <swiper :options="{
          pagination: {el: '.swiper-pagination'},
          loop: true,
          autoplay: true
        }">
          <swiper-slide @click.native="goDetail(item)" v-for="item in dataInfo.Part3.NewsContent" :key="item.id">
            <div class="swiper-item" :style="`background: url(${$baseUrl + item.cPic})`">
              <div class="swiper-title">{{item.cTitle}}</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="part" v-if="dataInfo.Part4">
        <div class="page-title">
          <div class="title-left">{{dataInfo.Part4.NewsTitle}}</div>
          <div class="title-more">更多&gt;</div>
        </div>
        <div class="list2">
          <div class="item" @click="goDetail(item)" v-for="item in dataInfo.Part4.NewsContent" :key="item.id">
            <div class="item-left">{{item.cTitle}}</div>
            <div class="item-right">{{item.tReleaseDate | sqlDate}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-right home-col __w100p">
      <div class="part" v-if="dataInfo.Part5">
        <div class="h2">{{dataInfo.Part5.NewsTitle}}</div>
        <div class="list3">
          <div class="item" @click="goDetail(item)" v-for="item in dataInfo.Part5.NewsContent" :key="item.id">
            <div class="row-item">{{item.cTitle}}</div>
            <div class="row-item"><img :src="$baseUrl + item.cPic" alt=""></div>
            <div class="row-item">{{item.cSubtitle}}</div>
          </div>
        </div>
      </div>
      <div class="part" v-if="dataInfo.Part6">
        <div class="h2">{{dataInfo.Part6.NewsTitle}}</div>
        <div class="list3">
          <div class="item" @click="goDetail(item)" v-for="item in dataInfo.Part6.NewsContent" :key="item.id">
            <div class="row-item">{{item.cTitle}}</div>
            <div class="row-item"><img :src="$baseUrl + item.cPic" alt=""></div>
            <div class="row-item">{{item.cSubtitle}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataInfo: {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    goDetail(item) {
      this.$store.commit('setDetail', item)
      this.$router.push('detail')
    },
    async getData() {
      let {data} = await this.$http('GetFirstPageNews')
      if (data.Code == 10000) {
        this.dataInfo = data.Content
      }
    }
  }
}
</script>
<style scoped>
.home-col{
  float: left;
}
.home-left{
  width: 74%;
  padding-right: 2%;
}
.home-right{
  width: 24%;
}
.list{
  overflow: hidden;
  margin-bottom: 10px;
}
.list .item{
  float: left;
  width: 50%;
  overflow: hidden;
  margin: 10px 0;
}
.item{
  cursor: pointer;
  transition: color .3s;
}
.item:hover{
  color: #0d8de9;
}
.list .row{
  padding: 0;
  font-size: 14px;
  line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.list .row:first-child{
  font-size: 18px;
}
.list .img {
  width: 25%;
  float: left;
  padding-bottom: 25%;
  height: 0;
  background-size: cover;
}
.list .text {
  float: left;
  width: 75%;
  padding: 0 10px;
  box-sizing: border-box;
}
.h1 {
  font-size: 20px;
  font-weight: 600;
  padding: 10px 0;
}
.swiper-item {
  height: 150px;
}
.swiper-title{
  position: absolute;
  bottom: 25px;
  left: 10%;
  font-weight: bold;
  color: #fff;
}
.list2 .item{
  overflow: hidden;
  padding: 2px 0;
  font-size: 14px;
}
.list2 .item-left, .list2 .item-right{
  float: left;
}
.list2 .item-left{
  width: 75%;
}
.list2 .item-right{
  width: 25%;
  text-align: right;
}
.h2 {
  margin: 15px 0;
}
.h2:before {
  content: '';
  border-left: 5px solid #df3216;
  margin-right: 5px;
}
.list3 .item{
  font-size: 14px;
  padding: 5px 0;
  border-top: 1px solid #ddd;
}
.list3 .row-item{
  padding: 5px 0;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media screen and (max-width: 1024px) {
  .list .item:nth-child(3),.list .item:nth-child(4){
    display: none;
  }
  .list3{
    overflow: auto;
    white-space: nowrap;
  }
  .list3 .item{
    width: 33%;
    display: inline-block;
  }
}
</style>
