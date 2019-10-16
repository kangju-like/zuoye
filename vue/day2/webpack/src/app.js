var vm = new Vue({
    el: '#ss',
    data: {
        bool: false
    },
    methods: {
        toggle() {
            console.log("点击")
            this.bool = !this.bool


        }

    }
})