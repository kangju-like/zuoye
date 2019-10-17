import Vue from 'vue/dist/vue'
import template from './panel.html'
import axios from 'axios'
var vm = new Vue({
    el: '#panel',
    data: {
        news: [],
        page: 1

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

    }

})
vm.get()
export default vm