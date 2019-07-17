import Vue from '../node_modules/vue/dist/vue';
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueRouter);
Vue.use(MintUI)

import app from './app.vue'
import './lib/MUI/dist/css/mui.css'//导入MUI
import './lib/AmazeUI-1.0.1/assets/css/amazeui.css'//导入amaze-ui
import {router} from './router'//路由



import { Header,Swipe, SwipeItem,Navbar, TabItem,TabContainer, TabContainerItem,Toast} from "mint-ui";
import { Lazyload } from 'mint-ui';


Vue.use(Lazyload);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Toast.name, Toast)

import resource from "vue-resource";
import { stringify } from 'querystring';
Vue.use(resource);

Vue.filter("datefilter",(dateStr)=>dateStr.substring(0,10))
Vue.component(Header.name, Header)
var vm = new Vue({
    el: "#app",
    data:{
      popupVisible:false
    },
   render: c => c(app),
   router,
   methods: {
      
   },

})