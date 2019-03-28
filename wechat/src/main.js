import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/style/app.scss"
import '@/assets/style/iconfont/iconfont.css'
// import '@/assets/styles/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
