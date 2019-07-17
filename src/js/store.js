import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

/* 利用vuex实现面包屑 */
export default store = new Vuex.Store({
    state: {
      breadListState:[
        {name:'首页',path:'/'}
      ]
    },
    mutations: {
      breadListStateAdd(state,obj){
        state.breadListState.push(obj);
      },
      breadListStateRemove(state,num){
        state.breadListState.splice(num,state.breadListState.length-num);
      }
    }
  
  })
  






