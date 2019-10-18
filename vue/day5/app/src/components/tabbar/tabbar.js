import Vue from 'vue/dist/vue'
import template from './tabber.html'
import icon from '../../images/icon_tabbar.png'
import se from '../../../chajian/chajian'


export default Vue.component("z-tabbar", {

    data() {
        return {
            icon,
            datas: [{
                url: "/we",
                title: "微信",
                dot: false,
                math: 8

            }, {
                url: "/phone",
                title: "通讯录",
                dot: false,
                math: 0
            }, {
                url: "/see",
                title: "发现",
                dot: "true",
                math: 0
            }, {
                url: "/me",
                title: "我的",
                dot: false,
                math: 0
            }],
            offset: 0
        }
    },
    template,
    methods: {
        cl(index) {
            this.offset = index
            console.log(index)
            se.emit('setIndex', index)
        }
    }
})