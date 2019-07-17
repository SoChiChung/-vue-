import VueRouter from 'vue-router'
/* 导入组件 */
import first from './main/first.vue'
import second from './main/second.vue'
import third from './main/third.vue'
import fourth from './main/fourth.vue'
import newslist from './main/newslist.vue'
import news from './main/news.vue'
import photoslist from './photoslist/photoslist.vue'
import goodslist from './goods/goodslist.vue'
import goodsinfo from './goods/goodsinfo.vue'
import buygoods from './goods/buygoods.vue'

var router = new VueRouter({
    mode: 'history',//去掉# 如果只使用mode：history而不再webpack的配置添加上 
    //historyApiFallback: true 刷新页面会返回404 对于这个问题，我们只需要在服务器配置如果URL匹配不到任何静态资源，就跳转到默认的index.html。 
    //vue-router的默认hash模式——使用URL的hash来模拟一个完整的URL，当URL改变时，页面不会重新加载。但是这种hash很丑，也不符合对URL的使用习惯。
    //所以，需要使用另外一个叫history模式来实现URL跳转而无须重新加载页面。
    routes: [
        { path: "/", redirect: '/first' },
        { path: "/first", name: "homepage", component: first },
        { path: "/second", name: "homepage", component: goodslist ,children:[
           /*  {path:"goodsinfo/:id",component:goodsinfo} */
        ]},
        { path: "/third", name: "homepage", component: buygoods },
        { path: "/fourth", name: "homepage", component: fourth },
        { path: "/newslist", name: "newslist", component: newslist },
        { path: "/news/:id", name: "newsinfo", component: news },
        { path: "/photoslist", component: photoslist },
        {path:"/goodsinfo/:id",component:goodsinfo},
        {path:"/buygoods/:id",component:buygoods},

    ],
    linkActiveClass: 'mui-active'//路由高亮的属性linkActiveClass设置为mui的原本样式 mui-active
})
module.exports = {
    router
}