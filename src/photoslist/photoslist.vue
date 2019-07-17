<template>
  <div>
    <!-- 首页图片列表 -->
    <!-- 顶部滑动条 -->
    <!-- <div class="mui-content">
      <div id="slider" class="mui-slider">
        <div
          id="sliderSegmentedControl"
          class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
        >
          <div class="mui-scroll">
            <a
              v-for="(item,i) in category"
              :key="i"
              :class="[i==0?'mui-control-item mui-active':'mui-control-item']"
            >{{item.title}}</a>
          </div>
        </div>
      </div>
    </div>-->
    <mt-navbar v-model="selected">
      <!-- 自定义组件原生事件要加native修饰符 -->
      <mt-tab-item
        id="item.id"
        v-for="(item,i) in category"
        :key="i"
        @click.native="getimages(item.id)"
        :class="[i==0?'mint-tab-item is-selected':'mint-tab-item']"
      >{{item.title}}</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="item.id" v-for="(item,i) in category" :key="i">
        <ul>
          <li>
            <img v-for="image in images" :key="image.id" :src="image.img_url" />
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<style scoped>
.mui-slider {
  position: absolute;
  top: 50;
}
</style>

<script>
//导入js 去除严格模式
import mui from "../lib/MUI/dist/js/mui";
import webgroup from "../lib/MUI/dist/js/webviewGroup";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      category: {
        /* title: "",
        id: "" */
      },
      images: {},
      selected: null
    };
  },
  created(){
    this.getcategory();
    this.getimages("14");
    this.selected=14
  },
  /* created() {
    let sel=this;
    return new Promise(function(resolve,reject){
     sel.$http
        .get("http://www.liulongbin.top:3005/api/getimgcategory")
        .then(result => {
          if (result.body.status == 0) {
           sel.category = result.body.message;
          } else Toast("获取列表失败，错误代码为：" + result.body.status);
        });
        resolve();
    }).then(sel.getimages(sel.category[0].id)).catch((err)=>{console.log("赋值失败")})
    
  }, */
/*   初始化函数是怎么才能根据getcategory得到的id调用getimages方法呢 */

 /*  beforeUpdate() {
     console.log("mounted")
    console.log(this.category)
    this.getimages(this.category[0].id); 
  },
  beforeMount(){
    
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
     
}, */
  methods: {
    toinit() {
      let sel = this;
      return new Promise(function(resolve, reject) {
        sel.getcategory();
        resolve();
      })
        .then(function() {
          console.log("category");
          console.log(sel.category);
          sel.getimages(sel.category[0].id);
        })
        .catch(function(err) {
          console.log("失败了" + err);
        });
    },
    getcategory() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimgcategory")
        .then(result => {
          if (result.body.status == 0) {
            this.category = result.body.message;
          } else Toast("获取列表失败，错误代码为：" + result.body.status);
        });
    },
    getimages(cartid) {
      cartid = parseInt(cartid) + 3;
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimages/" + cartid)
        .then(result => {
          if (result.body.status == 0) {
            this.images = result.body.message;
          } else Toast("获取列表失败，错误代码为：" + result.body.status);
        });
    }
  }
};
</script>