<template>
    <div class="wrapper">
        <swiper :options="swiperOption"  v-if="showSwipper" ref="mySwiper">
            <swiper-slide v-for="item in list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props: {
            list: Array
        },
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                }
            }
        },
        computed: {
            showSwipper () {
                return this.list.length
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper >>> .swiper-container
        height 0
        width 100%
        padding-bottom 31.5%
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom: 31.5%
        background #eee
        .swiper-img
            width 100%
</style>
