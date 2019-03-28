import Vue from 'vue'
import Router from 'vue-router'
import WeChat from './views/WeChat'
import WeChatHome from './components/WeChat/Home/WeChatHome'
import WeChatDiscover from './components/WeChat/Discover/WeChatDiscover'
import WeChatAddressBook from './components/WeChat/AddressBook/WeChatAddressBook'
import WeChatMe from './components/WeChat/Me/WeChatMe'
import WeChatView from './components/WeChat/ChatView/WeChatView'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'wechat',
        component: WeChat,
        redirect: '/home',
        children: [{
            path: 'home',
            component: WeChatHome
        },{
            path: 'addressBook',
            component: WeChatAddressBook
        },{
            path: 'discover',
            component: WeChatDiscover
        },{
            path: 'me',
            component: WeChatMe
        }]
    }, {
        path: '/chatView/:friend',
        component: WeChatView,
        props: true
    }]
})
