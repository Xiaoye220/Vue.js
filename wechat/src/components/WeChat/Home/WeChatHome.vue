<template>
    <div class="home-wrapper">
        <my-header bg-color="#f2f2f2" color="black">
            <div slot="title">微信</div>
            <div slot="right" class="iconfont icon" @click="handlePopover">&#xe6e0;</div>
        </my-header>
        <div class="home-list" ref="scroll-wrapper">
            <ul>
                <li ref="search">
                    <my-search></my-search>
                </li>
                <router-link tag="li" v-for="(item, index) in list" :id="index" ref="cell" :to="'/chatView/' + item.title">
                    <my-cell :content="item"></my-cell>
                </router-link>
            </ul>
        </div>
        <transition name="popover">
            <my-popover v-show="isShowPopover"
                        :list="popoverList"
                        @clickMask="handlePopover"
                        @clickCell="handlePopover">
            </my-popover>
        </transition>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import axios from 'axios'
    import MyHeader from '@/components/Header'
    import MySearch from '@/components/Search'
    import MyCell from '@/components/WeChat/Home/WeChatHomeCell'
    import MyPopover from '@/components/WeChat/WeChatPopoverView'
    import MyChatView from '@/components/WeChat/ChatView/WeChatView'

    export default {
        name: "WeChatHome",
        components: {
            MyHeader,
            MySearch,
            MyCell,
            MyPopover,
            MyChatView
        },
        data() {
            return {
                list: [],
                popoverList: [],
                isShowPopover: false
            }
        },
        methods: {
            getHomeInfo(){
                axios.get('/mock/home.json')
                    .then(res => {
                        const list = res.data.list;
                        const popoverList = res.data.popoverList;
                        if(list) {
                            this.list = list;
                        }
                        if(popoverList) {
                            this.popoverList = popoverList;
                        }
                    })
            },
            handlePopover() {
                this.isShowPopover = !this.isShowPopover;
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs["scroll-wrapper"], { click: true });

            this.scroll.on('scrollEnd', () => {
                let y = this.scroll.y;
                if(-25 < y && y < 0) {
                    this.scroll.scrollToElement(this.$refs["search"], 200);
                } else if (-50 < y && y <= -25) {
                    this.scroll.scrollToElement(this.$refs["cell"][0].$el, 200);
                }
            });

            this.getHomeInfo()
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/variables.scss";
    .home-wrapper {
        width: 100%;
        height: 100%;
        .icon {
            font-size: 1.5rem;
        }
        .home-list {
            position: absolute;
            top: $statusBar-height + $header-height;
            bottom: $tabBar-height;
            left: 0;
            right: 0;
            background: $header-color;
        }
        .popover-leave-active {
            transition: opacity .5s;
        }
        .popover-enter, .popover-leave-to {
            opacity: 0;
        }
        .chat-view {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 1000;
        }
    }


</style>
