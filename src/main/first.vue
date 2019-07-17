

<template>
  <div>
    <!-- 轮播图 -->
    <div class="swipe">
      <!-- <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../images/1.jpg" alt="" width="500" height="300"></mt-swipe-item>
      <mt-swipe-item><img src="../images/2.jpg" alt="" width="500" height="300"></mt-swipe-item>
      <mt-swipe-item><img src="../images/3.jpg" alt="" width="500" height="300"></mt-swipe-item>
      </mt-swipe>-->

      <mt-swipe :auto="4000">
        <!-- <mt-swipe-item>
        <img src="../images/1.jpg" alt width="500" height="300" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../images/2.jpg" alt width="500" height="300" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../images/3.jpg" alt width="500" height="300" />
        </mt-swipe-item>-->
        <mt-swipe-item v-for="item in swipeList" :key="item.id">
          <a :href="item.url">
            <img :src="item.img" alt />
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 九宫格列表 -->

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <div class="mui-row">
        <div class="center">
          <li class="mui-table-view-cell mui-media">
            <router-link to="/newslist">
              <span class="mui-icon mui-icon-email"></span>
              <div class="mui-media-body">newslist</div>
            </router-link>
          </li>
          <router-link to="/photoslist">
            <li class="mui-table-view-cell mui-media">
              <a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">photoslist</div>
              </a>
            </li>
          </router-link>
          <li class="mui-table-view-cell mui-media">
            <router-link to="/goodslist">
              <span class="mui-icon mui-icon-phone"></span>
              <div class="mui-media-body">goodslist</div>
            </router-link>
          </li>
        </div>
      </div>
      <div class="mui-row">
        <div class="center">
          <li class="mui-table-view-cell mui-media">
            <a href="#">
              <span class="mui-icon mui-icon-gear"></span>
              <div class="mui-media-body">Setting</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a href="#">
              <span class="mui-icon mui-icon-info"></span>
              <div class="mui-media-body">about</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a href="#">
              <span class="mui-icon mui-icon-more"></span>
              <div class="mui-media-body">more</div>
            </a>
          </li>
        </div>
      </div>
    </ul>
  </div>

  <!-- 九宫格列表 -->
</template>
<style scoped>
.mint-swipe {
  /* //设置轮播图的宽度 */
  height: 120px;
  width: 66.7%;
  margin: 50px auto;
}
.mint-swipe-item {
  text-align: center;
}
.mint-swipe-item a img {
  height: 100%;
  width: 100%;
}
.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: none;
}
.mui-grid-view.mui-grid-9 {
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
/* 使用>>>改变样式 */
.swipe >>> .mint-swipe-indicator {
  width: 4px !important;
  height: 4px !important;
  margin: 0 1px !important;
}
.center {
  display: inline-block;
  margin-top: 2.5%;
}
.mui-row {
  text-align: center;
}
</style>



<script>
export default {
  //不需要创建vue 对象
  data() {
    return {
      swipeList: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      //获取数据列表的方法
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          var result = result.body;
          console.log("result:");
          console.log(result);
          this.swipeList = result.message;
        });
    }
  }
};
</script>