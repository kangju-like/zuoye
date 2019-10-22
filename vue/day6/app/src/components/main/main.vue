<template>
  <!-- vue实例外创建 -->
  <div>
    <keep-alive>
      <component :is="tabbar"></component>
    </keep-alive>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import se from "../../../chajian/chajian";
import Wechat from "../../components/wechat/wechat.vue";
import Concat from "../../components/concat/concat.vue";
import Douyin from "../../components/douyin/douyin.vue";
import Douyu from "../../components/douyu/douyu.vue";
export default {
  data() {
    return {
      tabbar: "Wechat"
    };
  },

  mounted() {
    se.on("setIndex", index => {
      switch (index) {
        case 0:
          this.tabbar = "Wechat";
          break;

        case 1:
          this.tabbar = "Concat";
          break;
        case 2:
          this.tabbar = "Douyin";
          break;
        case 3:
          this.tabbar = "Douyu";
          break;
      }
    });
  },
  components: {
    Wechat,
    Concat,
    Douyu,
    Douyin
  }
};
</script>