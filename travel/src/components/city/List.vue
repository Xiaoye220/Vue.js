<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"  v-for="item in hotCities" :key="item.id" @click="handleClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="city in item" :key="city.id" @click="handleClick(city.name)">
                        {{city.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "CityList",
        props: {
            hotCities: Array,
            cities: Object,
            letter: String
        },
        methods: {
            handleClick (city) {
                this.$store.commit('changeCity', city);
                this.$router.push('/');
            }
        },
        watch: {
            letter() {
                if(this.letter) {
                    const element = this.$refs[this.letter][0];
                    this.scroll.scrollToElement(element, 200);
                }
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper);
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"

    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc

    .list
        overflow hidden
        position absolute
        top 1.56rem
        left 0
        right 0
        bottom 0
        .title
            line-height 0.54rem
            color #666
            padding-left  0.2rem
            background #eee
            font-size 0.26rem
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                width 33.33%
                float left
                .button
                    padding .1rem
                    margin .1rem
                    border #ccc solid .01rem
                    border-radius .05rem
                    text-align center
        .item-list
            .item
                line-height .76rem
                padding-left .2rem
</style>
