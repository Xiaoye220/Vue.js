<template>
    <div class="cell">
        <div class="img-wrapper">
            <img v-if="showAvatar" class="img" :src="`${publicPath}image/${content.avatar}`"/>
            <div v-if="showIcon" class="iconfont icon" :style="{'color': content.iconColor}">{{content.icon}}</div>
        </div>
        <div class="info" :style="{'border-bottom-style': showBorderBottom ? 'solid' : 'none'}">
            <div class="title">{{content.title}}</div>
            <div v-if="showIndicator" class="iconfont icon indicator">&#xe619;</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeChatCell",
        props: {
            content: Object,
            showBorderBottom: {
                default: true,
                type: Boolean
            },
            showIndicator: {
                default: false,
                type: Boolean
            },
            showAvatar: {
                default: true,
                type: Boolean
            },
            showIcon: {
                default: false,
                type: Boolean
            }
        },
        data() {
            return {
                publicPath: process.env.BASE_URL
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/global.scss";
    .cell {
        position: relative;
        height: $cell-height;
        line-height: $cell-height;
        background: white;
        display: flex;
        .img-wrapper {
            margin: 6px 8px 6px 15px;
            width: $cell-height - 12px;
            height: $cell-height - 12px;
            line-height: $cell-height - 12px;
            .img {
                width: 100%;
                height: 100%;
                border-radius: 5px;
            }
            .icon {
                font-size: 1.5rem;
                width: 100%;
                height: 100%;
            }
        }
        .info {
            flex: 1;
            position: relative;
            line-height: $cell-height;
            width: 100%;
            text-align: left;
            @include ellipsis;
            border-bottom: 1px solid $border-color;
            display: flex;
            .title {
                flex: 1;
            }
            .icon {
                font-size: 0.8rem;
                color: #999;
            }
            .indicator {
                margin-right: 10px;
                float: right;
            }
        }
    }
</style>
