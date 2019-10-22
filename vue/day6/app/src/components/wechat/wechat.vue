<template>
  <!-- vue实例外创建 -->
  <div>
    <Header color="green">微信</Header>
    <Search></Search>
    <Panel></Panel>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import Header from "../../components/header/header.vue";
import Search from "../../components/search/search.vue";
import Panel from "../../components/panel/panel.vue";
export default {
  components: {
    Header,
    Search,
    Panel
  }
};
</script>