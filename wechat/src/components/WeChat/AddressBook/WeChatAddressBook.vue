<template>
    <div>
        <my-header bg-color="#f2f2f2" color="black">
            <div slot="title">通讯录</div>
            <div slot="right" class="iconfont icon">&#xe6e3;</div>
        </my-header>

        <div class="list" ref="scroll-wrapper">
            <div>
                <my-search ref="search"></my-search>
                <ul v-for="(section, index) in sections" :id="index" ref="section">
                    <li class="header-wrapper" v-if="section.title.length !== 0">
                        <div class="header">{{section.title}}</div>
                    </li>
                    <li v-for="(row, index) in section.rows" :id="index" ref="row">
                        <my-cell :content="row" :show-border-bottom="index !== section.rows.length - 1 "></my-cell>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import axios from 'axios'
    import MyHeader from '@/components/Header'
    import MySearch from '@/components/Search'
    import MyCell from '@/components/WeChat/WeChatCell'

    export default {
        name: "WeChatAddressBook",
        components: {
            MyHeader,
            MySearch,
            MyCell
        },
        data() {
            return {
                sections: []
            }
        },
        methods: {
            getAddressBookInfo(){
                axios.get('/mock/addressBook.json')
                    .then(res => {
                        const sections = res.data.sections;
                        if(sections) {
                            this.sections = sections;
                        }
                    })
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs["scroll-wrapper"]);

            this.scroll.on('scrollEnd', () => {
                let y = this.scroll.y;
                if(-25 < y && y < 0) {
                    this.scroll.scrollToElement(this.$refs["search"].$el, 200);
                } else if (-50 < y && y <= -25) {
                    this.scroll.scrollToElement(this.$refs["section"][0], 200);
                }
            });
            this.getAddressBookInfo()
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/variables.scss";
    .icon {
        font-size: 1.5rem;
    }
    .list {
        position: absolute;
        top: $statusBar-height + $header-height;
        bottom: $tabBar-height;
        left: 0;
        right: 0;
        background: $header-color;
        .header-wrapper {
            text-align: left;
            padding-left: 15px;
            color: #999;
            font-size: 0.8rem;
            height: 30px;
            line-height: 30px;
            background: $header-color;
            border-top: 1px solid $border-color;
            border-bottom: 1px solid $border-color;
        }
    }
</style>
