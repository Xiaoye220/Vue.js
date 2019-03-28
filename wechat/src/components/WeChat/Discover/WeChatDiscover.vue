<template>
    <div>
        <my-header bg-color="#f2f2f2" color="black">
            <div slot="title">发现</div>
        </my-header>

        <div class="list" ref="scroll-wrapper">
            <div>
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
    import axios from 'axios'
    import BScroll from 'better-scroll'
    import MyHeader from '@/components/Header'
    import MyCell from '@/components/WeChat/WeChatCell'

    export default {
        name: "WeChatDiscover",
        components: {
            MyHeader,
            MyCell
        },
        data() {
            return {
                sections: []
            }
        },
        methods: {
            getDiscoverInfo(completion){
                axios.get('/mock/discover.json')
                    .then(res => {
                        const sections = res.data.sections;
                        if(sections) {
                            this.sections = sections;
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

                return (sectionCount - 1) * 10 + rowsCount * 50;
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs["scroll-wrapper"]);
            this.getDiscoverInfo(() => {
                const fixHolderHeight = this.$refs["scroll-wrapper"].offsetHeight - this.getScrollContentHeight();
                if(fixHolderHeight >= 0) {
                    this.$el.querySelector('.fix-holder').style.height = (fixHolderHeight + 1) + 'px';
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/variables.scss";
    .list {
        position: absolute;
        top: $statusBar-height + $header-height;
        bottom: $tabBar-height;
        left: 0;
        right: 0;
        background: $header-color;
        .section {
            border-bottom: 1px solid $border-color;
            border-top: 1px solid $border-color;
            margin-bottom: 10px;
        }
    }
</style>
