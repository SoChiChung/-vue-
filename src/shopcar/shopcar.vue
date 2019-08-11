<template>
  <div>
    <!-- 购物列表 -->
    <div class="mui-card" v-for="(item,index) in goods" :key="index">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch :value="getStatusfromstore('item.id')"  @change="turn(item,item.id)"></mt-switch>
          <div class="content">
            <img :src="item.thumb_path" />
            <p>{{item.title}}</p>
            <div class="bottom">
              <span class=pricetag>￥{{item.sell_price}}</span>
            <numbox :value="getStatusfromstore(item.id).count" :id="item.id" @setCount="changeStatus"></numbox>
            </div>
          </div>
          <button
            type="button"
            
            @click="deleteItem(item.id,item.index)"
          >删除</button>
        </div>
      </div>
    </div>
  <!-- 结算  -->
  <div class="console">
    <p>已勾选：{{this.$store.getters.getallPrice.count}}件商品  总价：{{this.$store.getters.getallPrice.sum}}</p> <button  class="mui-btn mui-btn-danger">去结账</button>
  </div>
  </div>
</template>
<script>
import numbox from "../subcomponents/shopcar_numbox.vue";
export default {
  data() {
    return {
      list: this.$store.getters.getCar,
      goods: [] //商品详情
    };
  },
  created() {
    this.getgoods();
  },

  methods: {
    deleteItem(id, index) {
      //删除某一栏商品
      this.$store.commit("delete", id);
      this.goods.splice(index, 1);
    },
    getgoods() {
      //获取购物车商品详情
      let arr = [];
      this.list.forEach(item => arr.push(item.id));
      let url =
        "http://www.liulongbin.top:3005/api/goods/getshopcarlist/" +
        arr.join(",");

      this.$http.get(url).then(result => {
        if (result.body.status == 0) {
          this.goods = this.goods.concat(result.body.message);
          
        }

      });
    },
    turn(item, id) {
      //改变商品状态
      this.$store.commit("change", id);
    },
    getStatusfromstore(id) {
      return this.$store.getters.getStatus[id];
    },
    changeStatus(id,count){
      this.$store.commit('changeStatus',{id,count})
    }
  },
  components: {
    numbox
  }
};
</script>
<style scoped>
.mui-card-content-inner {
  display: flex;
  align-items: center;
}
.content {
  flex:8;
  text-align:center
}
.mui-card-content-inner > * {
  margin: 2px;
}
.mui-card-content-inner button {
  align-self: center;
}
.mui-card-content-inner .content img {
  width: 30%;
  height: 30%;
}
.bottom{
  display: flex;
  justify-content: space-around;
  align-items: center
}
.pricetag{
  color:red;
  font-weight: bold;
  font-size: 1.3em
}
</style>


