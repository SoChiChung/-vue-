<template>
  <!-- 评论列表组件 -->
  <div>
    <div v-for="comment in commentslist" :key="comment.index">
      <article class="am-comment">
        <!-- 评论容器 -->
        <!-- 评论者头像 -->
        <!-- <a href>
          <img class="am-comment-avatar" alt />
         
        </a>-->

        <div class="am-comment-main">
          <!-- 评论内容容器 -->
          <header class="am-comment-hd">
            <!--<h3 class="am-comment-title">评论标题</h3>-->
            <div class="am-comment-meta">
              <!-- 评论元数据 -->
              <a href="#link-to-user" class="am-comment-author">{{comment.user_name}}</a>
              <!-- 评论者 -->
              评论于
              <time>{{comment.add_time|datefilter}}</time>
            </div>
          </header>

          <div class="am-comment-bd">{{comment.content}}</div>
          <!-- 评论内容 -->
        </div>
      </article>
    </div>
    <div style="items-align='center'">
      <mt-button type="primary" @click="pageindex++">加载更多</mt-button>
    </div>
    
  </div>
</template>
<style scoped>
.am-comment-main {
  margin-left: 0;
}
.am-comment-bd {
  font-size: 15px;
}
</style>

<script>
import { parse } from 'path';

export default {
  data() {
    return {
      commentslist: [],
      pageindex: 1
    };
  },
  created() {
    this.loadComments();
  },
  methods: {
    loadComments() {
      let url =
        "http://www.liulongbin.top:3005/api/getcomments/" +
        this.$route.params.id +
        "?pageindex="+this.pageindex;
      this.$http.get(url).then(result => {
        if (result.body.status == 0) {
          console.log(result.body)
          this.commentslist =this.commentslist.concat(result.body.message );
        } else if (result.body.status == 1) {
          alert("没有更多的评论了！");
        } else alert("获取评论列表失败！");
      });
    }
  },
  watch: {
    pageindex: function() {
      this.loadComments();
    }
  }
};
</script>
