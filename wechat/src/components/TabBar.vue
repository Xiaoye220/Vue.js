<template>
    <div class="tabBar-wrapper">
        <router-link tag="span"
                     class="item"
                     :style="{ width: iconWidth }"
                     v-for="(item, index) in items"
                     :to="item.path"
                     :id="index"
                     @click.native="selectedIndex = index">
            <div class="iconfont icon" v-if="selectedIndex !== index">{{item.icon}}</div>
            <div class="iconfont icon" v-if="selectedIndex === index">{{item.selectedIcon}}</div>
            <div class="title">{{item.title}}</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        props: {
            /**
             * { icon, title, path } 的数组
             */
            items: Array
        },
        data: function () {
            return {
                selectedIndex: 0,
            }
        },
        methods: {

        },
        computed: {
            iconWidth() {
                return 100/this.items.length + "%"
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/variables.scss";
    .tabBar-wrapper {
        position: absolute;
        width: 100%;
        height: $tabBar-height;
        background: $tabbar-color;
        bottom: 0;
        border-top: 1px solid $border-color;
        .item {
            float: left;
            .icon {
                margin-top: 5px;
                font-size: 1.5rem;
            }
            .title {
                font-size: 0.2rem;
            }
        }
    }
</style>
