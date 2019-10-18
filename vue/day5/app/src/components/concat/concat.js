import Vue from "vue/dist/vue";
import {} from "../header/header";
export default Vue.component("z-concat", {
    data() {
        return {
            datas: "网易云音乐"
        }
    },
    template: `
    <div>
    <z-header style="background:red;color:#fff;"v-text="datas"></z-header>
    </div>
    `
})