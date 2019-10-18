import Vue from "vue/dist/vue";
import se from "../../../chajian/chajian"
Vue.component("z-main", {
    data() {
        return {
            tabbar: "z-wechat"
        }
    },

    template: `
        <div>
            <keep-alive>
                <component :is="tabbar"></component>
            </keep-alive>
        </div>
    `,
    mounted() {

        se.on('setIndex', (index) => {
            switch (index) {
                case 0:
                    this.tabbar = 'z-wechat'
                    break;

                case 1:
                    this.tabbar = 'z-concat'
                    break;
                case 2:
                    this.tabbar = 'z-douyin'
                    break;
                case 3:
                    this.tabbar = 'z-douyu'
                    break;
            }
        })

    }
})