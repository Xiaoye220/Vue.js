<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item in list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
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
        background #eee
    .item-img-wrapper
        overflow hidden
        height 0
        width 100%
        padding-bottom 37%
        .item-img
            width 100%
    .item-info
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
</style>
