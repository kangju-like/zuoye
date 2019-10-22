import Vue from 'vue/dist/vue'
import 'weui'
import './styles/styles.css'



import Tabbar from './components/tabbar/tabbar.vue'


;
import Main from "./components/main/main.vue";
new Vue({
    el: "#app",
    template: `
    <div>
        <Main></Main>
        <Tabbar></Tabbar>
    </div>
`,
    components: {
        Tabbar,

        Main
    }
})