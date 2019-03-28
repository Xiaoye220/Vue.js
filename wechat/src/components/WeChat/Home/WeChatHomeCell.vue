<template>
    <div class="cell">
        <img class="img" :src="`${publicPath}image/${content.avatar}`"/>
        <div class="info">
            <div class="title-wrapper">
                <div class="title">{{content.title}}</div>
                <div class="time">{{content.time}}</div>
            </div>
            <div class="detail">{{content.detail}}</div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeCell",
        props: {
            content: Object
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
        height: $homeCell-height;
        background: white;
        display: flex;
        .img {
            margin: 10px;
            width: $homeCell-height - 20px;
            height: $homeCell-height - 20px;
            border-radius: 5px;
        }
        .info {
            flex: 1;
            position: relative;
            border-bottom: 1px solid $border-color;
            .title-wrapper {
                display: flex;
                margin: 15px 10px 5px 0;
                line-height: 100%;
                .title {
                    flex: 1;
                    text-align: left;
                    @include ellipsis;
                }
                .time {
                    font-size: 0.5rem;
                    color: #999;
                }
            }
            .detail {
                font-size: 0.8rem;
                color: #999;
                text-align: left;
                @include ellipsis;
            }
        }
    }
</style>
