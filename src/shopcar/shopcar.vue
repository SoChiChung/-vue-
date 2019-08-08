<template>
  <div>
    <div class="mui-card" v-for="(item,index) in goods" :key="index">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch v-model="item.selected" @change="turn(item,item.id)">加入结算</mt-switch>
          <div class="content">
            <img :src="item.thumb_path" />
            <p>{{item.title}}</p>
            <numbox :value=""></numbox>
          </div>
          <button
            type="button"
            class="mui-btn mui-btn-danger"
            @click="deleteItem(item.id,item.index)"
          >删除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import numbox from "../subcomponents/buygoods_numbox.vue";
export default {
  data() {
    return {
      list: this.$store.state.car,
      goods: [] //商品详情
    };
  },
  created() {
    this.getgoods();
  },

  methods: {
    deleteItem(id, index) {//删除某一栏商品
      this.$store.commit("delete", id);
      this.goods.splice(index, 1);
    },
    getgoods() {//获取购物车商品详情
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
    turn(item,id) {//改变商品状态
      console.log("item:");
      console.log(item);
      this.$store.commit("change", id);
    }
  }
};
</script>
<style scoped>
.mui-card-content-inner {
  display: flex;
  align-items: center;
}
.content {
  flex: 7;
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
</style>


