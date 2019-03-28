import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        template: {}
    },
    actions: {
        // changeTemplate(ctx, moduleTemplate) {
        //     ctx.commit('changeTemplate', moduleTemplate)
        // }
    },
    mutations: {
        updateModule(state, module) {
            const arr = module.name.split('-');
            if( arr.length === 1) {
                state.template[module.name] = module.template;
            } else  {
                state.template[arr[0]][arr[1]] = module.template;
            }
        },
        updateTemplate(state, template) {
            state.template = template;
        }
    }
});
