<template>
  <div>
    <div class="mui-numbox" data-numbox-min="0">
      <!-- "-"按钮，点击可减小当前数值 -->
      <button class="mui-btn mui-numbox-btn-minus">-</button>
      <input
        class="mui-numbox-input"
        type="number"
        value="value"
        ref="numberbox"
        @change="oncountChanged"
      />
      <!-- "+"按钮，点击可增大当前数值 -->
      <button class="mui-btn mui-numbox-btn-plus">+</button>
    </div>
  </div>
</template>

<script>
 import mui from '../lib/MUI/dist/js/mui.min.js' ;
/* 如果这样子import会让numbox有时候增加的步长变为2 
我在网上搜了很多，最终发现一个方法，把MUI相关引用的JS放在body标签后面即可

我最后这样是成功了，这应该是MUI的一个BUG吧 */
export default {
  data() {
    return {
      showball: false
    };
  },
  methods: {
    oncountChanged() {
      this.$emit("setCount", parseInt(this.$refs.numberbox.value));
    }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  props:["value"]
};
</script>