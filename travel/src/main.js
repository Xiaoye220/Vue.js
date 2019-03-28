import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import App from './App.vue'
import router from './router'
import store from './store/index'
import fastClick from 'fastclick'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper, {});

fastClick.attach(document.body);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
