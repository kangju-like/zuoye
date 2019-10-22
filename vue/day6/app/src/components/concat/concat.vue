<template> <!-- vue实例外创建 -->
    <div>
    <Header style="background:red;color:#fff;"v-text="datas"></Header>
    </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import Header from "../header/header.vue";
export default{
  data() {
        return {
            datas: "网易云音乐"
        }
    }, 
    temponent:{
        Header
    } 
}
    
</script>