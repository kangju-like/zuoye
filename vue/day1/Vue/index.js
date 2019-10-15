// 我们的数据对象
// var Vue = require('./vue.js')
// var data = { a: 1 }

// // 该对象被加入到一个 Vue 实例中
// var vm = new Vue({
//     data: data
// })
// console.log(vm.a == data.a);
// vm.a = 34;
// console.log(data.a);
// var obj = {
//     foo: 'bar'
// }

// Object.freeze(obj)

// new Vue({
//     el: '#app',
//     data: obj
// })
var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})

console.log(vm.$data === data) // => true
console.log(vm.$el === document.getElementById('example')) // => true
console.log(vm.$data);

// $watch 是一个实例方法
vm.$watch('a', function(newValue, oldValue) {
    // 这个回调将在 `vm.a` 改变后调用
})