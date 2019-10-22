import Vue from 'vue/dist/vue'
import template from './search.html'
import txt from './search.txt'
import se from '../../../chajian/chajian.js'


export default Vue.component('z-search', {

    data() {

        return {
            isFocus: true,

            searchText: '',
            title: txt,
            cancel: '取消',
        }
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
    watch: {
        // 监听搜索框
        searchText() {
            // 使用观察者模式
            se.emit('setSeatchText', this.searchText)
        }
    }
})

// console.log(weux);