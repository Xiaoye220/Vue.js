<template>
    <div class="home">
        <el-container>
            <el-header height="60px">
                <my-header></my-header>
            </el-header>
            <el-container>
                <el-aside width="200px" :style="{'text-align': 'left'}">
                    <el-menu :default-openeds="['1']">
                        <el-submenu index="1">
                            <template slot="title">模块</template>
                            <div v-for="(module, moduleName, index) in modules" :key="moduleName">
                                <el-menu-item v-if="module.subModule === undefined"
                                              :index="'1-' + index"
                                              @click="showModule(moduleName)">
                                    {{module.title}}
                                </el-menu-item>
                                <el-submenu  v-else :index="'1-' + index">
                                    <template slot="title">{{module.title}}</template>
                                    <div v-for="(subModule, subModuleName, subIndex) in module.subModule" :key="subModuleName">
                                        <el-menu-item :index="'1-' + index + '-' + subIndex"
                                                      @click="showModule(moduleName, subModuleName)">
                                            {{subModuleName}}
                                        </el-menu-item>
                                    </div>
                                </el-submenu>
                            </div>

                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <div v-for="(module, moduleName) in modules" :key="moduleName">
                        <div v-if="module.subModule === undefined">
                            <my-module :module-name="moduleName"
                                       v-show="showFlag[moduleName]">
                            </my-module>
                        </div>
                        <div v-else v-for="(subModule, subModuleName) in module.subModule" :key="subModuleName">
                            <!--<my-module :module-name="module.subModule === undefined ? moduleName : moduleName + '-' +subModuleName "-->
                                       <!--v-show="module.subModule === undefined ? module.isShowing : module.subModule[subModuleName].isShowing">-->
                            <!--</my-module>-->
                            <my-module :module-name="moduleName + '-' +subModuleName"
                                       v-show="showFlag[moduleName + '-' +subModuleName]">
                            </my-module>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import axios from 'axios'
    import MyHeader from '@/components/Header'
    import MyModule from '@/components/ModuleInfo'

    export default {
        name: 'home',
        components: {
            MyHeader,
            MyModule
        },
        data() {
            return {
                modules: {
                    // "module": {
                    //     title: "",
                    //     subModule: {
                    //         "subModule": {
                    //             title: "",
                    //         }
                    //     }
                    // }
                },
                showFlag: {

                },
                // showModules: [],
                currentModule: ''
            }
        },
        methods: {
            showModule(module, subModule) {
                let showModuleName = '';
                if(subModule !== undefined) {
                    showModuleName = module + '-' + subModule;
                } else {
                    showModuleName = module;
                }

                if(showModuleName !== this.currentModule) {
                    this.showFlag[showModuleName] = true;
                    this.showFlag[this.currentModule] = false;

                    this.currentModule = showModuleName;
                }
            }
        },
        mounted() {
            axios.get('/mock/template.json')
                .then(res => {
                    const template = res.data;
                    if(template) {
                        this.$store.commit('updateTemplate', template);
                    }
                });

            axios.get('/mock/config.json')
                .then(res => {
                    const config = res.data;
                    if(config) {
                        this.modules = {};
                        let showFlag = {};
                        for(const moduleName in config) {
                            const moduleConfig = config[moduleName];
                            let module = {};
                            module.title = moduleConfig.title ? moduleConfig.title : moduleName;

                            if(this.currentModule === '') {
                                this.currentModule = moduleName;
                                showFlag[moduleName] = true;
                            } else  {
                                showFlag[moduleName] = false;
                            }

                            if(moduleConfig["needSubMenu"] !== undefined && moduleConfig["needSubMenu"]) {
                                module.subModule = {};
                                for(const subModuleName in moduleConfig) {
                                    if(subModuleName === "title" || subModuleName === "needSubMenu") {
                                        continue;
                                    }
                                    const subModuleConfig = moduleConfig[subModuleName];
                                    let subModule = {};
                                    subModule.title = subModuleConfig.title ? subModuleConfig.title : subModuleName;
                                    showFlag[moduleName + '-' + subModuleName] = false;
                                    module.subModule[subModuleName] = subModule;
                                }
                            }
                            this.$set(this.modules, moduleName, module);
                        }
                        this.showFlag = showFlag;
                    }
                });

        }
    }
</script>

<style lang="stylus" scoped>
    .home
        position relative
        width 100%
        height 100%
        display flex
        .el-header
            background-color #B3C0D1
            color #333
            text-align center
        .el-aside
            background-color #D3DCE6
            color #333
            text-align center
        .el-main
            background-color #E9EEF3
            color #333
            text-align center

</style>
