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
        payment: '',
        gender: '',
        coordinates: {},
        orders: {},
        form: null
    },
    methods: {
        update: function(){
            console.log("Button clicked!");
            this.form = {checked: this.checked, fullname: this.fullname, email: this.email, payment: this.payment, gender: this.gender, coordinates: this.coordinates};
            this.addOrder();
        },
        created: function () {
            socket.on('initialize', function (data) {
              this.orders = data.orders;
            }.bind(this));
        
            socket.on('currentQueue', function (data) {
              this.orders = data.orders;
            }.bind(this));
          },
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
              return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
          },
          addOrder: function() {
            socket.emit("addOrder", {orderId: '1',
                                    details: { x: this.coordinates.x, y: this.coordinates.y}}
                                    );
          },
          displayOrder: function (event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
              y: event.currentTarget.getBoundingClientRect().top};
            this.coordinates = {x: event.clientX - 10 - offset.x,
              y: event.clientY - 10 - offset.y}
          }
        }
      });