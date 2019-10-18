import Vue from "vue/dist/vue";
import "../header/header";

Vue.component('z-douyu', {
    data() {
        return {
            datas: "斗鱼直播"
        }
    },
    template: `
    <div>
    <z-header style="background:#fc1;color:#312;"v-text="datas"></z-header>
    </div>
    `
})