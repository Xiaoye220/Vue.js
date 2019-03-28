<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <router-link tag="li" class="item border-bottom" v-for="item in list" :key="item.id"  :to="'/detail/' + item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props: {
            list: Array
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/global.styl"

    .title
        line-height 0.8rem
        text-indent 0.2rem
        margin-top 0.2rem
        background #eee
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            height 1.7rem
            width 1.7rem
            margin 0.1rem
        .item-info
            flex 1
            margin 0.1rem
            padding 0.1rem
            min-width 0
            .item-title
                font-size 0.32rem
                line-height 0.5rem
                ellipsis()
            .item-desc
                line-height 0.4rem
                color #ccc
                ellipsis()
            .item-button
                background #ff862a
                line-height 0.44rem
                border-radius 0.1rem
                color #fff
                padding 0 0.2rem
                margin-top 0.2rem
</style>
