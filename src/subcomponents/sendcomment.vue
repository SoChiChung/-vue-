<template>
  <div class="sendcomment">
    <!-- 底部发送评论组件 -->
    <input type="text" placeholder="发表你的评论" @click="changepopupVisible" />
    <!-- 弹出评论列表 -->
    <mt-popup position="bottom" v-model="popupVisible" popup-transition="popup-fade">
      <textarea
        placeholder="发表您的评论"
        cols="5"
        rows="3"
        v-model="content"
        @keyup.prevent.enter="send"
        v-focus
      ></textarea>
      <mt-button id="send-button" @click="send">发表</mt-button>
    </mt-popup>
  </div>
</template>
<style scoped>
.sendcomment {
  height: 50px;
  padding: 5px;
}
.mint-popup-bottom {
  width: 100%;
}
textarea {
  border: none;
}
#send-button {
  float: right;
}
</style>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      popupVisible: false,
      content: ""
    };
  },
  methods: {
    changepopupVisible() {
      this.popupVisible = !this.popupVisible;
      this.$emit("changepopupVisible", this.popupVisible);
    },
    send() {
      if (this.content == "") return;
      let url =
        "http://www.liulongbin.top:3005/api/postcomment/" +
        this.$route.params.id;
      let tosend = {
        //需要发送的数据
        user_name: "卢本伟",
        content: this.content
      };
      this.$http.post(url, tosend, { emulateJSON: true }).then(result => {
        if (result.body.status == 0) {
          Toast("提交成功");
          this.content = "";
        } else Toast("提交失败！");
      });
    }
  },
  directives: {
    'focus': {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>
