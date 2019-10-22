<template> <!-- vue实例外创建 -->
     <div>
    <Header style="background:#000;color:#fc0;"v-text="datas"></Header>
    </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import Header from "../header/header.vue";
  export default{
      data() {
        return {
            datas: "傻逼抖音"
        }
    },
    temponents:{
        Header
    }
  }
</script>