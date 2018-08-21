<template>
  <div class="ov">
    <div class="home-left home-col __w100p">
      <div class="part" v-if="dataInfo.Part1">
        <div class="h1">{{dataInfo.Part1.NewsTitle}}</div>
        <div class="list">
          <div class="item __w100p" v-for="item in dataInfo.Part1.NewsContent" :key="item.id">
            <div class="img">
              <img :src="item.cPic" alt="">
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
        <div class="h1">{{dataInfo.Part2.NewsTitle}}</div>
        <div class="list">
          <div class="item __w100p" v-for="item in dataInfo.Part2.NewsContent" :key="item.id">
            <div class="img">
              <img :src="item.cPic" alt="">
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
          <swiper-slide v-for="item in dataInfo.Part3.NewsContent" :key="item.id">
            <div class="swiper-item" :style="`background: url(${item.cPic})`"></div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="part" v-if="dataInfo.Part4">
        <div class="page-title">
          <div class="title-left">{{dataInfo.Part4.NewsTitle}}</div>
          <div>更多</div>
        </div>
        <div class="list2">
          <div class="item" v-for="item in dataInfo.Part4.NewsContent" :key="item.id">
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
          <div class="item" v-for="item in dataInfo.Part5.NewsContent" :key="item.id">
            <div>{{item.cTitle}}</div>
            <div><img :src="item.cPic" alt=""></div>
            <div>{{item.cSubtitle}}</div>
          </div>
        </div>
      </div>
      <div class="part" v-if="dataInfo.Part6">
        <div class="h2">{{dataInfo.Part6.NewsTitle}}</div>
        <div class="list3">
          <div class="item" v-for="item in dataInfo.Part6.NewsContent" :key="item.id">
            <div>{{item.cTitle}}</div>
            <div><img :src="item.cPic" alt=""></div>
            <div>{{item.cSubtitle}}</div>
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
  width: 76%;
}
.home-right{
  width: 24%;
}
.list{
  overflow: hidden;
}
.list .item{
  float: left;
  width: 50%;
}
</style>
