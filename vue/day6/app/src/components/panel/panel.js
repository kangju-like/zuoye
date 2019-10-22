import Vue from 'vue/dist/vue'
import template from './panel.html'
import axios from 'axios'
import se from '../../../chajian/chajian.js'
export default Vue.component("z-panel", {
    data() {
        return {
            news: [],
            page: 1,
            searchText: ""
        }

    },
    template,
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
})