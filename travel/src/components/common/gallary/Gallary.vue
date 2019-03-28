<template>
    <div class="container" @click="gallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item, index) in images" :key="item">
                    <img class="gallary-img" :src="item"/>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonGallary",
        props: {
            images: Array
        },
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observer: true,
                    observeParents: true
                }
            }
        },
        methods: {
            gallaryClick() {
                this.$emit('close')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 10
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background #000
        .wrapper
            background #fff
            width 100%
            height 0
            padding-bottom 100%
            .gallary-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
</style>
