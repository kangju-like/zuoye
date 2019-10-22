<template> <!-- vue实例外创建 -->
    <div v-bind:abc="title" :class="['weui-search-bar',{
    'weui-search-bar_focusing': isFocus
}]" id="searchBar">
    <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
            <i class="weui-icon-search"></i>
            <input v-model="searchText" type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
            <a @click="clear" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label @click="toggleFocus" class="weui-search-bar__label" id="searchText"
            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
            <i class="weui-icon-search"></i>
            <span>{{title}}</span>
        </label>
    </form>
    <a v-on:click="toggleFocus" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">{{cancel}}</a>
</div>
</template>




<!-- 调用   <mycom></mycom> -->
<script>
import se from '../../../chajian/chajian.js'
    export default{
        data() {

        return {
            isFocus: true,

            searchText: '',
            title: "你好",
            cancel: '取消',
        }
    },


    methods: {
        clear() {
            this.searchText = '',
                console.log('把输入框清空');

        },
        toggleFocus() {
            this.isFocus = !this.isFocus
        }
    },
    watch: {
        // 监听搜索框
        searchText() {
            // 使用观察者模式
            se.emit('setSeatchText', this.searchText)
        }
    }
    }
</script>