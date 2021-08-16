import { createStore } from 'vuex'
import {getLyric} from '@/api/index.js'

export default createStore({
  state: {
    playlist: [{
      name: "如初 (Demo)", 
      id: 1457932485,
      al:{
        id: 91453655,
        name: "如初",
        pic: 109951165087160910,
        picUrl: "http://p4.music.126.net/viTq07NF-_wBrlPtVzqUcw==/109951165087160916.jpg",
        pic_str: "109951165087160916"
      }}],
    playCurrentIndex: 0,
    lyric: '',
    currentTime:0,
    intervalId:0,
  },
  getters: {
    //歌词处理
    lyricList: function (state) {
      let arr = state.lyric.split(/\n/igs).map((item,i,arr) => {
          let min = parseInt(item.slice(1,3));
          let sec = parseInt(item.slice(4,6));
          let mill = parseInt(item.slice(7,10));
          return {
            min,
            sec,
            mill,
            lyric:item.slice(11,item.length),
            content:item,
            time:mill+sec+min*60*1000
          }
      })
      arr.forEach((item,i) => {
        if (i==0) {
          item.pre = 0;
        }else {
        item.pre = arr[i-1].time
        }
      })
      return arr
  }
  },
  mutations: {
    setPlaylist:function(state,value) {
      state.playlist = value;
    },
    setPlayIndex:function(state,value) {
      state.playCurrentIndex = value;
    },
    setLyric:function(state,value) {
      state.lyric = value;
    },
    setCurrentTime:function(state,value) {
      state.currentTime = value;
    }
  },
  actions: {
    async reqLyric(content,payload) {
      let result = await getLyric(payload.id)
      content.commit('setLyric',result.data.lrc.lyric);
      //console.log(payload)
    },
  },
  modules: {
  }
})

