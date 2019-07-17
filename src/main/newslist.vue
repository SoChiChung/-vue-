
<template>
  <div class="newslist">
    <ul class="mui-table-view" v-for="item in newslist" :key="item.id">
      <li class="mui-table-view-cell mui-media">
        <router-link :to ="'/news/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span id="date">发布时间：{{item.add_time|datefilter}}</span>
              <span id="date">点击数：{{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<style scoped>
h1 {
  font-size: 14px;
}
/* .newslist{
  padding-bottom: 50px;
} */
.mui-ellipsis {
  font-size: 12px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
</style>

<script>
export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnewslist")
        .then(result => {
          console.log("newslist:");
          console.log(result.body);
          this.newslist = result.body.message;
        });
    }
  }
};
</script>
