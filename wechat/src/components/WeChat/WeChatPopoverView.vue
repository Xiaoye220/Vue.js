<template>
    <div class="mask" @click="$emit('clickMask')">
        <div class="popover-wrapper">
            <ul>
                <li class="cell" v-for="(item, index) in list" :id="index" @click.stop="$emit('clickCell', index)">
                    <my-cell :content="item"
                             :show-avatar="false"
                             :show-icon="true"
                             :show-border-bottom="index !== list.length - 1"
                             :style="{'color': 'white', 'background': '#666'}">
                    </my-cell>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import MyCell from '@/components/WeChat/WeChatCell'
    export default {
        name: "WeChatPopoverView",
        components: {
            MyCell
        },
        props: {
            list: Array
        }
    }
</script>

<style lang="scss" scoped>
    .mask {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        .popover-wrapper {
            position: absolute;
            width: 150px;
            top: 64px;
            right: 5px;
            overflow: scroll;
            z-index: 1000;
            border-radius: 5px;
        }
    }
</style>
