<template>
    <div class="playList">
        <div class="playListTop">
            <div class="left">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang3"></use>
                </svg>
                <div class="text">
                    <div class="title">播放全部</div>
                    <div class="num">(共{{playlist.tracks.length}}首)</div>
                </div>
            </div>
            <div class="btn">
                + 收藏（{{changeValue(playlist.subscribedCount)}}）
            </div>
        </div>
        <div class="list">
            <div class="playItem" v-for="(item,index) in playlist.tracks" :key="index">
                <div class="left">
                    <div class="index">{{index+1}}</div>
                    <div class="content">
                        <div class="title">{{item.name}}</div>
                        <div class="anthor">
                            <!-- <span class="tag" v-for="(tag,i) in playlist.tags" :key="i">{{tag}}</span> -->
                            <span>{{item.al.name}}</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <svg class="icon" aria-hidden="true" @click="setPlayIndex(index)">
                        <use xlink:href="#icon-bofang2"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-diandiandian1"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props: [
        'playlist'
    ],
    methods: {
        changeValue: function(num) {
            let res = 0;
            res = num;
            if (num >= 100000000) {
                res = num/100000000;
                return res.toFixed(2) + '亿'
            }else if (num >= 10000){
                res = num/10000;
                res = res.toFixed(2) + '万'
            }
            return res
        },
    ...mapMutations(['setPlayIndex'])

    },
}
</script>
<style lang="less" scoped>
.playList {
        width: 7.5rem;
        padding: 0 0.4rem;
        background-color: #fff;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        margin-top:0.4rem;
        .playListTop {
        display: flex;
        justify-content: space-between;
        height: 1rem;
        align-items: center;
        .left {
            display: flex;
            align-items: center;
            .icon {
                width: 0.4rem;
                height: 0.4rem;
            }
            .title {
                font-size: 0.34rem;
                font-weight: 900;
            }
            .num {
                font-size: 0.24rem;
                color: #ccc;
            }
            .text {
                display: flex;
                align-items: center;
                margin-left: 0.2rem;
            }
        }
        .btn {
            font-size: 0.24rem;
            color: #fff;
            background-color: orangered;
            height: 0.6rem;
            line-height: 0.6rem;
            padding: 0.1rem;
            display: flex;
            align-items: center;
            border-radius: 0.4rem;
        }
    }
    .list {
        .playItem {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1rem;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            .left {
                display: flex;
                align-items: center;
                color: #666;
                .index {
                    width: 0.4rem;
                }
                .content {
                    margin-left: 0.4rem;
                    width: 4.5rem;
                }
                .title {
                    font-size: 0.3rem;
                    font-weight: 900;
                    color: #000;
                    margin-bottom: 0.05rem;
                    margin-top: 0.1rem;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                }
                .tag {
                    font-size: 0.2rem;
                    color: orangered;
                    border: 1px solid orangered;
                    border-radius: 0.05rem;
                }
                .author {
                    color: #666;
                }
            }
            .right {
                display: flex;
                align-items: center;
                .icon {
                    margin: 0 0.2rem;
                    width: 0.4rem;
                    height: 0.4rem;
                }
            }
        }
    }
}
</style>