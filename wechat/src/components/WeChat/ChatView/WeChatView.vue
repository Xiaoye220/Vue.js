<template>
    <div>
        <div class="chat-view">
            <my-header bg-color="#f2f2f2" color="black">
                <div slot="left" class="iconfont icon" @click="$router.back()">&#xe697;</div>
                <div slot="title">{{friend}}</div>
                <div slot="right" class="iconfont" :style="{'font-size': '1.8rem'}">&#xe710;</div>
            </my-header>
            <my-menu class="menu"></my-menu>
        </div>
    </div>
</template>

<script>
    import MyHeader from '@/components/Header'
    import MyMenu from '@/components/WeChat/ChatView/WeChatViewMenu'

    export default {
        name: "WeChatView",
        components: {
            MyHeader,
            MyMenu
        },
        props :{
            friend: ''
        }
    }
</script>

<style lang="scss" scoped>
    .chat-view {
        background: white;
        position: absolute;
        width: 100%;
        height: 100%;
        .icon {
            font-size: 1.5rem;
        }
        .menu {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }

</style>
