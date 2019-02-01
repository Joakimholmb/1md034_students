var boxA = new Vue({
    el: '#boxA',
    data: {
        burger: burgers[0],
        imageLink: burgers[0].image,
        checked: []
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

var boxB = new Vue({
    el: '#boxB',
    data: {
        burger: burgers[1],
        imageLink: burgers[1].image,
        checked: []
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

var boxC = new Vue({
    el: '#boxC',
    data: {
        burger: burgers[2],
        imageLink: burgers[2].image,
        checked: []
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
    el: '#button',
    data: {
        pOrder: "Place Order!",
        ordered: []
    },
    methods: {
        update: function(){
            console.log("button clicked!")
            this.ordered.push(boxA.checked[0])
            this.ordered.push(boxB.checked[0])
            this.ordered.push(boxC.checked[0])
            for(i = 0; i<this.ordered.length; ++i) {
                if(this.ordered[i] != null) {
                    console.log(this.ordered[i])
                }
            }
        },
    },
    computed: {
        selectedBurgers: function(){
            console.log(boxA.checked()) //TESTKOD
            this.ordered.push(boxA.checked())
            this.ordered.push(boxB.checked())
            this.ordered.push(boxC.checked())
            for(i = 0; this.ordered.length; ++i) {
                console.log(this.ordered[i])
            }
        }
    }
})