<template>
  <!-- 商品购买页面 -->
  <div>
    <!--     <div class="mui-card">
      <div
        class="mui-card-header mui-card-media"
        style="height:40vw;background-image:url(../images/cbd.jpg)"
      ></div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>Posted on January 18, 2016</p>
          <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <a class="mui-card-link">Like</a>
        <a class="mui-card-link">Read more</a>
      </div>
    </div>-->

    <!-- swiper -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :swipeList="swipeList" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <!--  <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in swipeList" :key="item.id">
          <a :href="item.url">
            <img :src="item.img" alt />
          </a>
        </mt-swipe-item>
    </mt-swipe>-->
    <!-- 添加进购物车 -->
    <div class="mui-card">
      <div class="mui-card-header">
        <h2>{{goods.title}}</h2>
      </div>
      <div class="mui-card-content buy">
        <div>
          销售价：
          <span class="sell-price">￥{{goods.sell_price}}</span>
          市场价：
          <span class="market-price">{{goods.market_price}}</span>
        </div>
        <div class="mui-numbox" data-numbox-min="0" data-numbox-step="1">
          <!-- "-"按钮，点击可减小当前数值 -->
          <button class="mui-btn mui-numbox-btn-minus" @click="count>0?count--:''">-</button>
          <input class="mui-numbox-input" type="number" v-model="count" />
          <!-- "+"按钮，点击可增大当前数值 -->
          <button
            class="mui-btn mui-numbox-btn-plus"
            @click="count<goods.stock_quantity?count++:''"
          >+</button>
        </div>
        <button class="mui-btn-primary">加入购物车</button>
      </div>
    </div>

    <!-- 商品简略信息 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <h2>商品信息</h2>
          <hr />
          <p style="color: #333;">商品名称：{{goods.title}}</p>
          <p style="color: #333;">上架时间：{{goods.add_time|datefilter}}</p>
          <p style="color: #333;">库存数量：{{goods.stock_quantity}}</p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">
        <h2>商品详情</h2>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <goodsinfo></goodsinfo>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
h2 {
  margin: 0;
  line-height: 1.5em;
  letter-spacing: 0.1em;
}
.market-price {
  text-decoration: line-through;
  padding: 0 1% 0 2%;
}
.sell-price {
  font-weight: bolder;
  color: red;
  font-size: 200%;
  padding: 0 1% 0 0;
}
.buy {
  padding: 3%;
}
</style>

<script>
import swiper from "../subcomponents/swiper.vue";
import goodsinfo from "./goodsinfo.vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id,
      goods: [],
      count: 0,
      swipeList: []
    };
  },
  created() {
    this.getGoods();
    this.getGoodsInfo();
  },
  methods: {
    /* 获取商品参数区的价格 标题 */
    getGoods() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/goods/getinfo/" + this.id)
        .then(result => {
          if (result.body.status == 0) {
            this.goods = result.body.message[0];
          } else
            Toast("获取商品信息失败！ 错误代码：" + result.body.status == 0);
        });
    },
    getGoodsInfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(result => {
          if (result.body.status == 0) {
            result.body.message.forEach(item => {
              if (item.src) item.img = item.src;
            });
            console.log(result.body.message);
            this.swipeList = result.body.message;
          } else
            Toast("获取商品轮播图片失败！错误代码：" + result.body.status == 0);
          console.log(this.swipeList);
        });
    }
  },
  components: {
    swiper,
    goodsinfo
  }
};
</script>