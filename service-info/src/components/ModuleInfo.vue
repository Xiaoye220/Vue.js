<template>
    <div class="info-wrapper">
        <ul>
            <li class="cell-wrapper" v-for="(info, keyPath) in moduleConfig" :key="keyPath" :style="{'width': cellWidth(info, keyPath)}">
                <my-info-cell :key-path="keyPath" :info="info" v-bind:template="moduleTemplate"></my-info-cell>
            </li>
        </ul>
    </div>
</template>

<script>
    import MyInfoCell from '@/components/InfoCell'
    import axios from 'axios'
    import utils from "@/js/utils";

    export default {
        name: "ModuleInfo",
        props: {
            game: String,
            moduleName: {
                type: String,
                default: ''
             }
        },
        data() {
            return {
                moduleConfig: {},
                currentKeyPath: ''
            }
        },
        methods: {
            getModuleConfig(){
                axios.get('/mock/config.json')
                    .then(res => {
                        const data = res.data;
                        if(data) {
                            const arr = this.moduleName.split('-');
                            if( arr.length === 1) {
                                this.moduleConfig = utils.parseConfigObjc(data[this.moduleName]);
                            } else  {
                                this.moduleConfig = utils.parseConfigObjc(data[arr[0]][arr[1]]);
                            }
                        }
                    })
            },
            setValueWithPath(key, value) {
                utils.setValue(this.moduleTemplate, key, value);
            },
            cellWidth(info, keyPath) {
                // const currentKeyPathArr = this.currentKeyPath.split('-');
                // const keyPathArr = keyPath.split('-');
                // if(currentKeyPathArr.length >= 2 && keyPathArr.length >= 2) {
                //     if(currentKeyPathArr[currentKeyPathArr.length - 1] === keyPathArr[keyPathArr.length - 1]) {
                //         return '100%';
                //     }
                // }
                // this.currentKeyPath = keyPath;
                // console.log(this.currentKeyPath)

                if(info.type === 'Input') {
                    if(this.moduleName === 'SDK_Host') {
                        return '33%';
                    } else  if(this.moduleName === 'SDK_AdReport-Adjust') {
                        return '50%';
                    }
                    return '50%';
                } else if(info.type === 'Radio') {
                    return '100%';
                } else if(info.type === 'Switch') {
                    return '25%';
                } else if(info.type === 'Select') {
                    return '100%';
                }
                return '100%';
            }
        },
        watch: {
            moduleTemplate: {
                handler: function (val) {
                    this.$store.commit('updateModule', {'name': this.moduleName, 'template': val});
                },
                deep: true
            }
        },
        computed: {
            moduleTemplate() {
                const arr = this.moduleName.split('-');

                let moduleTemplate = {};
                if( arr.length === 1) {
                    moduleTemplate =  this.$store.state.template[this.moduleName];
                } else  {
                    moduleTemplate =  this.$store.state.template[arr[0]];
                    if(moduleTemplate !== undefined) {
                        moduleTemplate = moduleTemplate[arr[1]];
                    }
                }
                return moduleTemplate === undefined ? {} : moduleTemplate;
            },
            valueWithPath() {
                return function(key) {
                    return utils.getValue(this.moduleTemplate, key);
                };
            }
        },
        mounted() {
            this.getModuleConfig();
        },
        components: {
            MyInfoCell
        }
    }
</script>

<style lang="stylus" scoped>
    .info-wrapper
        width 100%
        height 100%
        font-size 1.5rem
        text-align left
    ul li
        display inline
        float left
        /*margin 0 20px*/

</style>
