new Vue({
    el: '#boxA',
    data: {
        burger: burgers[0],
        imageLink: burgers[0].image
    },
    methods: {
        name: function(){
            return this.burger.name
        },
        kCal: function(){
            return this.burger.calories + ' calories'
        },
        haveGluten: function(){
            if(this.burger.gluten === true)
            return 'Contains gluten'
        },
        haveLactose: function(){
            if(this.burger.lactose === true)
            return 'Contains lactose'
        },
    }
})

new Vue({
    el: '#boxB',
    data: {
        burger: burgers[1],
        imageLink: burgers[1].image
    },
    methods: {
        name: function(){
            return this.burger.name
        },
        kCal: function(){
            return this.burger.calories + ' calories'
        },
        haveGluten: function(){
            if(this.burger.gluten === true)
            return 'Contains gluten'
        },
        haveLactose: function(){
            if(this.burger.lactose === true)
            return 'Contains lactose'
        },
    }
})

new Vue({
    el: '#boxC',
    data: {
        burger: burgers[2],
        imageLink: burgers[2].image
    },
    methods: {
        name: function(){
            return this.burger.name
        },
        kCal: function(){
            return this.burger.calories + ' calories'
        },
        haveGluten: function(){
            if(this.burger.gluten === true)
            return 'Contains gluten'
        },
        haveLactose: function(){
            if(this.burger.lactose === true)
            return 'Contains lactose'
        },
    }
})