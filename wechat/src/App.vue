<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>

<style>
    .router-view {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: all 0.3s;
    }
    .slide-left-enter {
        opacity: 0;
        transform: translate(100%, 0);
    }

    .slide-left-leave-to {
        opacity: 0.8;
        /*transform: translate(-100%, 0);*/
    }
    .slide-right-enter {
        opacity: 0;
        transform: translate(-100%, 0);
    }
    .slide-right-leave-to {
        opacity: 0.8;
    }
</style>

<script>
    import WeChat from "@/views/WeChat";
    export default {
        components: {WeChat},
        data() {
            return {
                transitionName: 'slide-left'
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
            }
        }
    }
</script>
