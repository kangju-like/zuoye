<template> <!-- vue实例外创建 -->
    <div class="weui-panel weui-panel_access">

    <div v-for="(item,index) in newsComputed" :key="index" class="weui-panel__bd">
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
                <img class="weui-media-box__thumb" :src="item.author.avatar_url" alt="">
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title" v-text="item.author.loginname"></h4>
                <p class="weui-media-box__desc" v-text="item.title"></p>
            </div>
        </a>

    </div>
    <div class="weui-panel__ft" @click="get">
        <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
            <div class="weui-cell__bd">查看更多</div>
            <span class="weui-cell__ft"></span>
        </a>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import se from '../../../chajian/chajian.js'
    export default{
          data() {
        return {
            news: [],
            page: 1,
            searchText: ""
        }

    },

    methods: {
        get() {
            axios.get('https://cnodejs.org/api/v1/topics', {
                params: {
                    page: this.page++, //Number 页数
                    tab: 'ask', // String 主题分类。目前有 ask share job good
                    limit: 10, // Number 每一页的主题数量
                    mdrender: false // String 当为 false 时
                }
            }).then((data) => {
                this.news = [...this.news, ...data.data.data]
            })
        }

    },
    computed: {
        newsComputed() {
            // console.log(this.searchText)
            // 有搜索值的时候就执行过滤逻辑，否则原封不动返回原数组
            if (this.searchText) {
                return this.news.filter((item) => {
                    if (item.title.indexOf(this.searchText) != -1) {
                        return item
                    }
                })
            } else {
                return this.news
            }
        }
    },
    mounted() {

        se.on('setSeatchText', (searchText) => {
            this.searchText = searchText
        })

        this.get()
    }
    }
</script>