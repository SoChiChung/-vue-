<template>
  <div class="news">
    <div class="headtitle">
      <h1 class="mytitle">{{news[0].title}}</h1>
      <div class="subtitle">
        <span>发布时间: {{news[0].add_time|datefilter}}</span>
        <span>浏览数: {{news[0].click}}</span>
      </div>
    </div>
    <div class="content" v-html="news[0].content"></div>
    <comment></comment>
  </div>
</template>
<style scoped>
.headtitle {
  margin-top: 5%;
}
.subtitle {
  margin-top: 15px;
  text-align: center;
}
.subtitle span {
  font-size: 10px;
  color: lightblue;
  letter-spacing: 1px;
}
.mytitle {
  color: lightskyblue;
  font-size: 16px;
  text-align: center;
}
.content {
  margin: 5% 3%;
}
</style>

<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      news: [{ title: "", click: "", add_time: "" }]
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      let url = "http://www.liulongbin.top:3005/api/getnew/" + this.id;
      this.$http.get(url).then(result => {
        if (result.body.status == 0) {
          this.news = result.body.message;
          console.log(this.news);
        } else alert("failed");
      });
    }
  },
  components: {
    comment
  }
};
</script>