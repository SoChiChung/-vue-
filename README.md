### 这是一个学习Vue的时候制作的商城项目

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些：
 + 先把 扩展图标的 css 样式，拷贝到 项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据， 如何获取呢， 使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造 九宫格 区域的样式

## 商品列表模块
1. 使用了flex布局和懒加载制作图片列表 价格页面的宽度还没调整得理想
2. 利用router的继承式导航完成了页面跳转
3. 改进了轮播图 实现组件化
4. 实现了购物车小球动画 针对不同的屏幕分辩率 实现小球从添加购物车按钮到底部的购物车栏：
+ 使用getBoundingClientRect()获取小球和购物车的当前高度 两者的坐标轴偏移量就是小球的运动轨迹
