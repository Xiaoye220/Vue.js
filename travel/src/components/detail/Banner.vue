<template>
    <div>
        <div class="banner" @click="bannerClick">
            <img class="banner-img" :src="bannerImg"/>
            <div class="banner-info">
                <div class="banner-title">
                    {{sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    39
                </div>
            </div>
        </div>
        <fade>
            <common-gallary v-if="showGallary" :images="gallaryImgs" @close="gallaryClick"></common-gallary>
        </fade>
    </div>
</template>

<script>
    import CommonGallary from '@common/gallary/Gallary'
    import Fade from '@common/fade/Fade'

    export default {
        name: "DetailBanner",
        props: {
            sightName: String,
            gallaryImgs: Array,
            bannerImg: String
        },
        data() {
            return {
                showGallary: false,
            }
        },
        methods: {
            bannerClick() {
                this.showGallary = true
            },
            gallaryClick() {
                this.showGallary = false
            }
        },
        components: {
            CommonGallary,
            Fade
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        overflow hidden
        position relative
        width 100%
        padding-bottom 55%
        .banner-img
            position absolute
            width 100%
            height 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                padding 0 .4rem
                height .32rem
                line-height .32rem
                background rgba(0, 0, 0, 0.8)
                border-radius .2rem
                font-size .24rem
                margin .14rem .2rem
                .banner-icon
                    font-size .24rem
</style>
