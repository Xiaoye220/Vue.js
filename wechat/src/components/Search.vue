<template>
    <div class="search">
        <label>
            <input type="text" class="search-input iconfont" :placeholder="placeholder"/>
        </label>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                placeholder: "\ue741 搜索"
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/variables.scss";

    .search {
        height: $search-height;
        padding: 10px 8px;
        background: $header-color;
        .search-input {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            line-height: 100%;
            border-radius: 5px;
            background: white;
            text-align: center;
            color: $header-color;
            outline: none;
            border: none;
            font-size: 0.9rem;
        }
    }
</style>
