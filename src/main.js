import Vue from '../node_modules/vue/dist/vue';
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(MintUI);
Vue.use(Vuex)

import app from './app.vue'
import './lib/MUI/dist/css/mui.css'//导入MUI
import './lib/MUI/dist/css/app.css'

import { router } from './router'//路由



import { Header, Switch, Swipe, SwipeItem, Navbar, TabItem, TabContainer, TabContainerItem, Toast } from "mint-ui";
import { Lazyload } from 'mint-ui';


Vue.use(Lazyload);
Vue.component(Switch.name, Switch);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Toast.name, Toast)

import resource from "vue-resource";

Vue.use(resource);

Vue.filter("datefilter", (dateStr) => dateStr.substring(0, 10))

Vue.component(Header.name, Header);

window.addEventListener("beforeunload", () => {
  ctool.setObj('store', store.state);
})

var car = JSON.parse(localStorage.getItem("car") || "[]");

var store = new Vuex.Store({
  state: {
    car: car,//购物车 商品内容包括：商品id，单价，selected，数量
  },
  mutations: {
    addtoCar(state, goodsinfo) {//添加进购物车
      let flag = state.car.some(item => {
        if (item.id == goodsinfo.id) { item.count += goodsinfo.count; return true }
      });
      if (!flag) state.car.push(goodsinfo)
    },
    delete(state, id) {//从购物车中删除指定商品

      state.car.some((item, index) => {
        if (item.id == id) { state.car.splice(index, 1); return true }


      });
    },
    change(state, id) {//改变商品的选中
      state.car.some((item, index) => {
        if (item.id == id) { item.selected = !item.selected; return true }
      })
    }
  }, getters: {
    getSumofcar(state) { return state.car.length },
    getCar(state) {
      return state.car;
    }
  }
})

const vm = new Vue({
  el: "#app",
  data: {
    popupVisible: false
  },
  render: c => c(app),
  router,
  methods: {
    addtostorage() {
      let acar = this.$store.getters.getCar;
      localStorage.setItem("car", JSON.stringify(acar));
    }
  }, store,//别忘了挂载！
  mounted() {//监听刷新
    window.addEventListener('beforeunload', e => this.addtostorage()
    );
  },



})