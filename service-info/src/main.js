import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import store from './store/index'

import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont/iconfont.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
    store,
  render: h => h(App)
}).$mount('#app');
