/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
var socket = io();

var vueObject = new Vue({
    el: '#vm',
    data: {
        menu: burgers,
        checked: [],
        fullname: '',
        email: '',
        payment: [],
        gender: [],
        form: null
    },
    methods: {
        update: function(){
            console.log("Button clicked!");
            this.form = [this.checked, this.fullname, this.email, this.payment, this.gender];
        }
    }
})