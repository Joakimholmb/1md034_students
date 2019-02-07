/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();
/*
var vm = new Vue({
  el: '#dots',
  data: {
    dOrder: {},
  },
  methods: {
    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top};
      this.dOrder = { x: event.clientX - 10 - offset.x,
        y: event.clientY - 10 - offset.y}
    }
  }
});
*/

var vm = new Vue({
  el: '#send',
  data: {
    orders: {},
    dOrder: {},
  },
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: this.dOrder.x - 10 - offset.x,
                                           y: this.dOrder.y - 10 - offset.y },
                                orderItems: ["Beans", "Curry"]
                              });
    },
    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top};
      this.dOrder = { x: event.clientX - 10 - offset.x,
        y: event.clientY - 10 - offset.y}
    }
  }
});
