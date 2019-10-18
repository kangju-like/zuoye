import Vue from 'vue/dist/vue'
import 'weui'
import './styles/styles.css'
import './components/header/header'
import './components/search/search.js'
import './components/panel/panel'
import './components/tabbar/tabbar'
import "./components/concat/concat";
import "./components/wechat/wechat";
import "./components/douyin/douyin";
import "./components/douyu/douyu";
import "./components/main/main";
new Vue({
    el: "#app",
    template: `
    <div>
        <z-main></z-main>
        <z-tabbar></z-tabbar>
    </div>
`
})