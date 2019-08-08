<template>
  <div class="app-container">
    <mt-header fixed title="测试的header" ref="header">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button slot="right">分享</mt-button>
    </mt-header>
    <!-- header -->
    <!--  <mt-header title="标题">
      <router-link to="/" slot="right">
        <mt-button icon="back">返回s</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>-->

    <!-- router -->
    <div class="router">
      <transition name="router-change">
        <router-view></router-view>
      </transition>
    </div>
    <!-- tabbar 底部导航栏-->
    <nav class="mui-bar mui-bar-tab" fixed="true" v-if="!(this.$route.name=='newsinfo')">
      <router-link to="/first" class="mui-tab-item1">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/second" class="mui-tab-item1">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">第二</span>
      </router-link>
      <router-link to="/third" class="mui-tab-item1">
        <span class="mui-icon mui-icon-contact">
          <span id="badge" class="mui-badge">{{this.$store.getters.getSumofcar}}</span>
        </span>
        <span class="mui-tab-label">第三</span>
      </router-link>
      <router-link to="/fourth" class="mui-tab-item1">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">第四</span>
      </router-link>

      <!-- 这是老样式 -->
      <!-- <a class="mui-tab-item mui-active" href="#first">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>-->
      <!-- <a class="mui-tab-item" href="#second">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#third">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#fourth">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>-->
    </nav>

    <nav class="mui-bar mui-bar-tab" fixed="true" v-if="(this.$route.name=='newsinfo')">
      <sendcomment :changepopupVisible="changepopupVisible"></sendcomment>
    </nav>
  </div>
</template>
<style scoped>
.router-change-enter {
  opacity: 0;
  transform: translateX(100%);
}

.router-change-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  /* 取代mode out-in 为了脱离文档流*/
  position: absolute;
}
.router-change-enter-active,
.router-change-leave-active {
  transition: all 1s;
}
/* @keyframes move {
  from{
    margin-left: 0
  }
  to{
    margin-left:-100%
  }
} */
.router {
  margin-top: 50px;
  /* animation: move 1s infinite */
}
.app-container {
  /* 避免出现滚动条 */
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 60px;
}
.mui-bar-tab .mui-tab-item1.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item1 .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<script>
import sendcomment from "./subcomponents/sendcomment.vue";
export default {
  data() {
    return {sum:0}
  },
  methods: {
    changepopupVisible(v) {
      this.popupVisible = v;
    }
  },
  components: {
    sendcomment
  }
};
</script>