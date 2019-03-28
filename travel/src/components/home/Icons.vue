<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper" v-if="showSwipper">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl"/>
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        props: {
            list: Array
        },
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    autoplay: false
                }
            }
        },
        computed: {
            showSwipper () {
                return this.list.length
            },
            pages () {
                const pages = [];
                this.list.forEach((item, index) => {
                    const page = Math.floor(index / 8);
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                });
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    @import "~@/assets/styles/global.styl"

    .wrapper >>> .swiper-container
        height 0
        width 100%
        padding-bottom 50%
    .wrapper
        margin-top 0.2rem
    .icon
        position: relative
        height 0
        width 25%
        padding-bottom 25%
        float left
        overflow hidden
        .icon-img
            position: absolute
            left 0
            right 0
            top 0
            bottom .44rem
            box-sizing border-box
            padding .1rem
            .icon-img-content
                display block
                margin 0 auto
                height 100%
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            text-align center
            color $darkTextColor
            ellipsis()
</style>
