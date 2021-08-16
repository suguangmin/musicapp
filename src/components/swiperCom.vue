<template>
<div id="swipercom">
    <div class="swiper-container" id="swiperIndex">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
            <img :src="item.pic">
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
      <!-- 滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
</div>
</template>
<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
import axios from 'axios'
import {getBanner} from '@/api/index.js'
export default {
    data: function(){
        return {
            imgs: [
            {pic: require('../assets/img/1.png')},
            {pic: require('../assets/img/2.png')},
            {pic: require('../assets/img/3.png')}
        ]
        }
    },
    async mounted() {
    var mySwiper = new Swiper('#swiperIndex',{
        //direction: 'vertical',  //垂直切换选项
        loop: true, //循环模式选项
        //分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // //前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        // //滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // }
      });

      let result = await getBanner(1)
      this.imgs = result.data.banners
  }
}

</script>

<style lang="less">
#swipercom {
    width: 7.5rem;
    #swiperIndex.swiper-container {
    width: 7.1rem;
    height: 2.6rem;
    border-radius: 0.1rem;
    }
    .swiper-slide img {
        width: 100%;
    }
    .swiper-pagination-bullet-active {
        background-color: orangered;
    }
}
</style>
