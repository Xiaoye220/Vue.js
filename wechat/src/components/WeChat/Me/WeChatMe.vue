<template>
    <div>
        <my-header bg-color="transparent" color="black">
            <div slot="right" class="iconfont icon">&#xe6e8;</div>
        </my-header>
        <div class="list" ref="scroll-wrapper">
            <div>
                <div class="userInfo-wrapper">
                    <img class="img" :src="`${publicPath}image/${userInfo.avatar}`"/>
                    <div class="userInfo">
                        <div class="name">{{userInfo.name}}</div>
                        <div class="detail">
                            <div class="userId">微信号：{{userInfo.userId}}</div>
                            <div class="iconfont icon RQCode">&#xe609;</div>
                            <div class="iconfont icon indicator">&#xe619;</div>
                        </div>
                    </div>
                </div>
                <ul class="section" v-for="(section, index) in sections" :id="index" ref="section">
                    <li v-for="(row, index) in section.rows" :id="index" ref="row">
                        <my-cell :content="row"
                                 :show-avatar="false"
                                 :show-icon="true"
                                 :show-indicator="true"
                                 :show-border-bottom="index !== section.rows.length - 1">
                        </my-cell>
                    </li>
                </ul>
                <div class="fix-holder" style="background-color: transparent"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import axios from 'axios'
    import MyHeader from '@/components/Header'
    import MyCell from '@/components/WeChat/WeChatCell'

    export default {
        name: "WeChatMe",
        components: {
            MyHeader,
            MyCell
        },
        data() {
            return {
                sections: [],
                userInfo: {},
                publicPath: process.env.BASE_URL
            }
        },
        methods: {
            getMyInfo(completion){
                axios.get('/mock/me.json')
                    .then(res => {
                        const sections = res.data.sections;
                        const userInfo = res.data.userInfo;
                        if(sections) {
                            this.sections = sections;
                        }
                        if(userInfo) {
                            this.userInfo = userInfo;
                        }
                        completion();
                    })
            },
            getScrollContentHeight() {
                const sectionCount = this.sections.length;
                let rowsCount = 0;
                this.sections.forEach((value) => {
                    rowsCount += value.rows.length;
                });

                return sectionCount * 10 + rowsCount * 50 + 120;
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs["scroll-wrapper"]);

            this.getMyInfo(() => {
                const fixHolderHeight = this.$refs["scroll-wrapper"].offsetHeight - this.getScrollContentHeight();
                if(fixHolderHeight >= 0) {
                    this.$el.querySelector('.fix-holder').style.height = (fixHolderHeight + 21) + 'px';
                }
            });
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
        .userInfo-wrapper {
            border-bottom: 1px solid $border-color;
            margin-bottom: 10px;
            display: flex;
            height: 120px;
            background: white;
            .img {
                margin: auto 15px;
                width: 60px;
                height: 60px;
                border-radius: 5px;
            }
            .userInfo {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .name {
                    font-size: 1.2rem;
                    font-weight: bold;
                    text-align: left;
                    height: 30px;
                    line-height: 30px;
                }
                .detail {
                    display: flex;
                    color: #999;
                    height: 30px;
                    line-height: 30px;
                    .userId {
                        flex: 1;
                        text-align: left;
                    }
                    .RQCode {
                        margin-right: 10px;
                        float: right;
                        font-size: 0.9rem;
                    }
                    .indicator {
                        margin-right: 10px;
                        float: right;
                        font-size: 0.8rem;
                    }
                }
            }
        }
        .section {
            border-bottom: 1px solid $border-color;
            border-top: 1px solid $border-color;
            margin-bottom: 10px;
        }
    }
</style>
