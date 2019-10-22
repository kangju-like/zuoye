<template> <!-- vue实例外创建 -->
     <div>
    <Header style="background:#fc1;color:#312;"v-text="datas"></Header>
    </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import Header from  "../header/header.vue";
    export default{
         data() {
        return {
            datas: "斗鱼直播"
        }
    },
    components:{
        Header
    }
    }
    
</script>