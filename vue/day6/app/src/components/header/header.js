import Vue from 'vue/dist/vue'
export default
Vue.component("z-header", {

    data() {
        return { title: '网易新闻' }
    },
    template: `
        <header>{{title}}</header>
    `
})