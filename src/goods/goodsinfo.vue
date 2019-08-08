<template>
  <div>
    <h3>{{goods[0].title}}</h3>
    <div v-html="goods[0].content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      goods: [{ title: "", content: "" }]
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/goods/getdesc/" + this.id)
        .then(result => {
          if (result.body.status == 0) {
            console.log(result.body.message);
            this.goods = result.body.message;
          } else alert("获取评论列表失败！");
        });
    }
  }
};
</script>