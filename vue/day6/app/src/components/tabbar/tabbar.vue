<template > <!-- vue实例外创建 -->
    <div class="weui-tabbar">
    <a v-for="(item,index) in datas" href="javascript:;" :key="index" @click="cl(index)" :class="[ 'weui-tabbar__item', {'weui-bar__item_on':offset === index}]">
        <span style="display: inline-block;position: relative;">
                <img :src="icon" alt="" class="weui-tabbar__icon">
                <span class="weui-badge" v-if="item.math>0" v-text="item.math" style="position: absolute;top: -2px;right: -13px; "></span>
        <span class="weui-badge weui-badge_dot" v-if="item.dot" style="position: absolute;top: 0;right: -6px;"></span>
        </span>
        <p class="weui-tabbar__label" v-text="item.title"></p>
    </a>

</div>
</template>
<!-- 调用   <mycom></mycom> -->

<script>

import icon from '../../images/icon_tabbar.png'
import se from '../../../chajian/chajian'
    export default{
         data() {
        return {
            icon,
            datas: [{
                url: "/we",
                title: "微信",
                dot: false,
                math: 8

            }, {
                url: "/phone",
                title: "通讯录",
                dot: false,
                math: 0
            }, {
                url: "/see",
                title: "发现",
                dot: "true",
                math: 0
            }, {
                url: "/me",
                title: "我的",
                dot: false,
                math: 0
            }],
            offset: 0
        }
    },
   
    methods: {
        cl(index) {
            this.offset = index
            console.log(index)
            se.emit('setIndex', index)
        }
    }
    }
</script>