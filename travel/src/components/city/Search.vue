<template>
    <div>

        <div class="search">
            <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keyword"/>
        </div>
        <div class="search-content" ref="search" v-show="isShowSearchContent">
            <ul>
                <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="isNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "CitySearch",
        props: {
            cities: Object
        },
        data() {
            return {
                keyword: "",
                timer: null,
                list: []
            }
        },
        methods: {
            handleClick (city) {
                this.$store.commit('changeCity', city);
                this.$router.push('/');
            }
        },
        computed: {
            isShowSearchContent() {
                return !!this.keyword;
            },
            isNoData() {
                return !this.list.length;
            }
        },
        watch: {
            keyword () {
                if(this.timer) {
                    clearTimeout(this.timer)
                }
                if(!this.keyword) {
                    this.list = [];
                    return
                }
                this.timer = setTimeout(() => {
                    let result = [];
                    for(let letter in this.cities) {
                        this.cities[letter].forEach((value) => {
                            if(value.spell.indexOf(this.keyword) !== -1 || value.name.indexOf(this.keyword) !== -1) {
                                result.push(value)
                            }
                        })
                    }
                    this.list = result;
                }, 100)
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.search)
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"

    .search
        height 0.72rem
        background $bgColor
        padding 0 .1rem
        .search-input
            box-sizing border-box
            width 100%
            height 0.62rem
            line-height 0.62rem
            text-align center
            border-radius 0.06rem
            color #666
            padding 0 0.1rem
    .search-content
        overflow hidden
        position absolute
        z-index 1
        top 1.56rem
        left 0
        right 0
        bottom 0
        background #eee
        .search-item
            line-height 0.64rem
            color #666
            padding-left .2rem
            background #fff
</style>
