import Vue from "vue/dist/vue";
import "../header/header";

Vue.component('z-douyin', {
    data() {
        return {
            datas: "傻逼抖音"
        }
    },
    template: `
    <div>
    <z-header style="background:#000;color:#fc0;"v-text="datas"></z-header>
    </div>
    `
})