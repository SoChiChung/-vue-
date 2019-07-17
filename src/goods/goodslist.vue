<template>
  <div>
    <div class="items">
      <div class="item" v-for="(item) in goodslist" :key="item.id">
        <router-link :to="'/buygoods/'+item.id" tag="div">
          <img v-lazy="item.img_url" alt />
          <h3>{{item.title}}</h3>
          <div class="price">
            <div class="prices">
              <span class="sell_price">￥{{item.sell_price}}</span>
              <span class="market_price">￥{{item.market_price}}</span>
            </div>
            <span class="stock">库存：{{item.stock_quantity}}</span>
          </div>
        </router-link>
      </div>
    </div>
    <mt-button size="large" type="danger" @click="getMore()">获取更多</mt-button>
  </div>
</template>
<style >
.items {
  display: flex;
  flex-wrap: wrap; /* flex-wrap属性定义，如果一条轴线排不下，如何换行：
  1.nowrap（默认）：不换行。
  2.wrap：换行，第一行在上方。
  3. wrap-reverse：换行，第一行在下方。*/

  /* 利用padding和justify-content: space-between 实现居中对齐 */
  padding: 2% 7%;
  justify-content: space-between;
}
.item {
  display: flex;
  width: 45%;
  border: #ccc 0.5px solid;
  border-radius: 4px;
  box-shadow: 0 0 5px;
  /*  padding: 2%;
  padding-bottom:0;
  */
  margin-bottom: 5%;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  overflow: hidden;
}
.item   h3 {
  letter-spacing: 1px;
  line-height: 150%;
  font-size: 50%;
  padding: 0 5%;
  margin: 1% auto;
  flex-basis: 90%;
}
.item   img {
  padding: 5%;
}
.price {
  display: flex; /* 我服了还得这么声明 */
  width: 100%;
  padding-top: 1%;
  background-color: lightsalmon;
  align-self: flex-end;
  align-items: flex-end;
  justify-content: space-between;
}
.prices {
  display: flex;
  align-items: baseline;
}
.sell_price {
  color: red;
  font-size: 53%;
  font-weight: bold;
}
.market_price {
  margin-left: 2%;
  text-decoration: line-through;
  font-size: 40%;
}
.stock {
  font-size: 10%;
  padding-right: 0.5%;
}
</style>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      goodslist: [],
      /*  id:"",
                title:"",
                add_time:"",
                zhaiyao:"" */
      pageindex: 1
    };
  },
  created() {
    this.getgoodsBypages();
  },
  methods: {
    //请求商品数据
    getgoodsBypages(pageindex = 1) {
      this.$http
        .get(
          "http://www.liulongbin.top:3005/api/getgoods?pageindex=" + pageindex
        )
        .then(result => {
          if (result.body.status == 0) {
            if (result.body.message == "") Toast("所有信息已加载完毕");
            else this.goodslist = this.goodslist.concat(result.body.message); //不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
          } else {
            Toast("获取失败 错误代码：" + result.body.status);
          }
        });
    },
    getMore() {
      //加载更多 获取下一页的列表
      this.pageindex++;
      this.getgoodsBypages(this.pageindex);
    }
  }
};
</script>