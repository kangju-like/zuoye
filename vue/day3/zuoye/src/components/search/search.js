import Vue from 'vue/dist/vue'
import template from './search.html'
import txt from './search.txt'

let search = new Vue({
    el: '#search',
    data: {

        isFocus: true,

        searchText: '',
        title: txt,
        cancel: '取消',
    },

    template,
    methods: {
        clear() {
            this.searchText = '',
                console.log('把输入框清空');

        },
        toggleFocus() {
            this.isFocus = !this.isFocus
        }
    },
})
export default search