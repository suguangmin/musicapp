<template>
    <div class="playController">
        <div class="left" @click="show=!show">
            <img :src="playlist[playCurrentIndex].al.picUrl" alt="">
            <div class="content">
                <div class="title">{{playlist[playCurrentIndex].al.name}}</div>
                <div class="tips">横滑可以切换上下首哦</div>
            </div>
        </div>
        <div class="right">
            <svg v-show="paused" class="icon search" aria-hidden="true" @click="play">
                <use xlink:href="#icon-bofang1"></use>
            </svg>
             <svg v-show="!paused" class="icon search" aria-hidden="true" @click="play">
                <use xlink:href="#icon-a-zantingtingzhi"></use>
            </svg>
            <svg class="icon search" aria-hidden="true">
                <use xlink:href="#icon-liebiao1"></use>
            </svg>
        </div>
        <play-music :play='play' :paused='paused' @back="show=!show" v-show="show" :playDetail="playlist[playCurrentIndex]"></play-music>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import playMusic from '@/components/playMusic.vue'
export default {
    data(){
        return {
            paused:true,
            show: false
        }
    },
    computed: {
        ...mapState(['playlist','playCurrentIndex'])
    },
    mounted(){
        this.$store.dispatch('reqLyric',{id:this.playlist[this.playCurrentIndex].id})
    },
    updated() {
        console.log(this.playlist[this.playCurrentIndex])
    },
    methods: {
        play:function() {
            if (this.$refs.audio.paused) {
                //判断是否为暂停状态
                this.$refs.audio.play()
                this.paused = false
                this.UpdateTime()
            }else {
                this.$refs.audio.pause()
                this.paused = true
                clearInterval(this.$store.state.id)
            }
            console.log([this.$refs.audio])
            console.log(this.paused)
        },
        //更新时间
        UpdateTime() {
        this.$store.state.id = setInterval(() => {
            this.$store.commit('setCurrentTime',this.$refs.audio.currentTime)
        },1000)
        }
    },
    components:{
        playMusic
    }
}
</script>

<style lang="less" scoped>
.playController {
    background-color: #fff;
    width: 7.5rem;
    height: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    .left {
        display: flex;
        padding: 0 0.2rem;
        img {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.4rem;
        }
        .content {
            padding: 0 0.2rem;
            .tips {
                font-size: 0.2rem;color: #999;
            }
        }
    }
    .right {
        .icon {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0 0.2rem;
        }
    }
}
</style>