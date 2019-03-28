<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .header
        position relative
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        background $bgColor
        color #fff
        font-size 0.32rem
        .back-icon
            font-size 0.4rem
            width 0.64rem
            text-align center
            position absolute
            top 0
            left 0
            color #fff
</style>
