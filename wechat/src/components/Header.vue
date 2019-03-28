<template>
    <div>
        <div class="statusBar-wrapper" :style="{ background: bgColor }"></div>
        <div class="header-wrapper" :style="{ background: bgColor, color: color }">
            <div class="left">
                <slot name="left"></slot>
            </div>
            <div class="title">
                <slot name="title"></slot>
            </div>
            <div class="right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            bgColor: String,
            color: String,
        },
        methods: {
            handleBack() {
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/global.scss";
    .statusBar-wrapper {
        z-index: 999;
        position: relative;
        width: 100%;
        height: $statusBar-height;
        background: #000;
    }
    .header-wrapper {
        z-index: 999;
        position: relative;
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background: #000;
        color: white;
        display: flex;
        .left {
            height: inherit;
            line-height: inherit;
            width: 44px;
        }
        .title {
            flex: 1;
            height: inherit;
            line-height: inherit;
            margin: 0 auto;
        }
        .right {
            height: inherit;
            line-height: inherit;
            width: 44px;
        }
    }
</style>
