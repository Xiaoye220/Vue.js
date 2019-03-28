<template>
    <div class="wechat">
        <router-view></router-view>
        <my-tab-bar :items="tabBarItems"></my-tab-bar>
    </div>
</template>

<script>
    import MyTabBar from '@/components/TabBar'

    export default {
        name: "WeChat",
        components:{
            MyTabBar
        },
        data: function () {
            return {
                tabBarItems: [{
                    icon: "\ue70c",
                    selectedIcon: "\ue70d",
                    title: "微信",
                    path: "/home"
                }, {
                    icon: "\ue6e3",
                    selectedIcon: "\ue6e2",
                    title: "通讯录",
                    path: "/addressBook"
                }, {
                    icon: "\ue741",
                    selectedIcon: "\ue742",
                    title: "发现",
                    path: "/discover"
                }, {
                    icon: "\ue716",
                    selectedIcon: "\ue715",
                    title: "我",
                    path: "/me"
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wechat {
        height: 100%;
        width: 100%;
    }
</style>
