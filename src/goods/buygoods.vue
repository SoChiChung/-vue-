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

    <!-- 添加进购物车 -->
    <div class="mui-card">
      <div class="mui-card-header">
        <h2>{{goods.title}}</h2>
      </div>
      <div class="mui-card-content">
        <div>
          市场价：
          <span class="market-price">{{goods.market_price}}</span>
          销售价：
          <span class="sell-price">{{goods.sell_price}}</span>
        </div>
        <div class="mui-numbox">
          <!-- "-"按钮，点击可减小当前数值 -->
          <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
          <input class="mui-numbox-input" type="number" />
          <!-- "+"按钮，点击可增大当前数值 -->
          <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
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
  </div>
</template>
<style>
h2 {
  margin: 0;
  line-height: 1.5em;
  letter-spacing: 0.1em;
}
</style>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      goods: []
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    /* 获取商品参数区的价格 标题 */
    getGoods() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/goods/getinfo/" + this.id)
        .then(result => {
          if (result.body.status == 0) {
            console.log(result.body.message);
            this.goods = result.body.message[0];
          } else alert("获取商品信息失败！");
        });
    }
  }
};
</script>