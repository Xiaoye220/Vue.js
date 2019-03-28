<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back-icon">&#xe624;</div>
            </router-link>
            详情
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailHeader",
        data() {
            return {
                showAbs: true,
                opacityStyle:  {
                    opacity: 0
                }
            }
        },
        methods: {
            handleScroll() {
                const top = document.documentElement.scrollTop;
                if (top > 60) {
                    let opacity = top / 140;
                    opacity = opacity > 1 ? 1 : opacity;
                    this.opacityStyle = { opacity };
                    this.showAbs = false
                } else {
                    this.showAbs = true
                }
            }
        },
        activated () {
            window.addEventListener('scroll', this.handleScroll)
        },
        deactivated () {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"

    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        border-radius .4rem
        background rgba(0, 0, 0, 0.8)
        .back-icon
            color #fff
            text-align center
            font-size .35rem
    .header-fixed
        z-index 2
        position fixed
        top 0
        left 0
        right 0
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        background $bgColor
        color #fff
        font-size 0.32rem
        .header-fixed-back-icon
            font-size 0.4rem
            width 0.64rem
            text-align center
            position absolute
            top 0
            left 0
            color #fff
</style>
