<template>
    <div class="header">
        <div class="content-wrapper">
            <img class="icon" src="../assets/images/onemt-logo.png"/>
            <div class="title">ONEMT SDK</div>
            <el-button class="output-button" type="primary" @click="output">导出文件</el-button>
        </div>
    </div>
</template>

<script>
    import PlistParser from  '../js/plist_parser'
    export default {
        name: "Header",
        data() {
            return {
                // moduleTemplate: {},
            }
        },
        methods: {
            output() {
                const plistStr = PlistParser.toPlist(this.$store.state.template);

                const urlObject = window.URL || window.webkitURL || window;
                const export_blob = new Blob([plistStr]);
                let save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
                save_link.href = urlObject.createObjectURL(export_blob);
                save_link.download = 'omtsdk.plist';
                const ev = document.createEvent("MouseEvents");
                ev.initMouseEvent(
                    "click", true, false, window, 0, 0, 0, 0, 0
                    , false, false, false, false, 0, null
                );
                save_link.dispatchEvent(ev);
            }
        },
    }

</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .header
        position relative
        width 100%
        height 100%
        box-sizing border-box
        display flex
        flex-direction column
        justify-content center
        .content-wrapper
            margin 0 20px
            height 40px
            line-height 40px
            display flex
            .icon
                float left
                height inherit
            .title
                height inherit
                line-height inherit
                text-align left
                color white
                margin 0 20px
                font-size 1.8rem
                font-weight bold
                flex 1
            .output-button
                float right

</style>
