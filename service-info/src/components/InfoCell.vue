<template>
    <div class="info-cell-wrapper" >
        <div class="info-cell-group">
            <div class="cell-title">{{info.title}}</div>
            <div class="cell-content">
                <slot name="content"></slot>

                <el-input v-if="info.type === 'Input'"
                          placeholder="请输入内容"
                          :value="valueWithPath(keyPath)"
                          v-on:input="setValueWithPath(keyPath, $event) "
                          clearable
                          :style="{'max-width': '400px'}">
                </el-input>

                <!--选中意味着变量的值为相应 Radio label属性的值-->
                <el-radio v-if="info.type === 'Radio'"
                          v-for="(item, infoKey) in info.items"
                          :value="valueWithPath(keyPath)"
                          v-on:input="setValueWithPath(keyPath, $event) "
                          :label="infoKey">
                    {{item}}
                </el-radio>

                <!--v-model的值为当前被选中的el-option的 value 属性值-->
                <el-select v-if="info.type === 'Select'"
                           :value="valueWithPath(keyPath)"
                           v-on:input="setValueWithPath(keyPath, $event) "
                           placeholder="请选择">
                    <el-option v-for="(item, infoKey) in info.items" :key="infoKey" :label="item" :value="infoKey"></el-option>
                </el-select>

                <!-- 必须放在 computed 中才可以 bind -->
                <el-switch v-if="info.type === 'Switch'" :value="valueWithPath(keyPath)" v-on:change="setValueWithPath(keyPath, $event)"></el-switch>

                <el-checkbox-group v-if="info.type === 'Checkbox'" v-model="template[keyPath]">
                    <el-checkbox v-for="(item, infoKey) in info.items" :key="infoKey" :label="infoKey"></el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script>
    import utils from "@/js/utils";
    export default {
        name: "InfoCell",
        props: {
            keyPath: String,
            info: Object,
            template: Object
        },
        methods: {
            setValueWithPath(path, value) {
                utils.setValue(this.template, path, value);
            }
        },
        computed: {
            valueWithPath() {
                return function(path) {
                    return utils.getValue(this.template, path);
                };
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .info-cell-wrapper
        width 100%
        height 100%
        position relative
        display flex
        line-height normal
        font-size 1rem
        align-items center
        margin 10px 0
        .info-cell-group
            width 100%
            height 40px
            line-height 40px
            display flex
            .cell-title
                background-color #f5f7fa
                border 1px solid #dcdfe6
                border-radius 4px
                padding 0 10px
                color #909399
                width 100px
                text-align center
                overflow: hidden //超出的内容进行隐藏
                white-space: nowrap //内容不换行
                text-overflow: ellipsis //超出内容为省略号
            .cell-content
                padding 0 15px
                flex 1

</style>
