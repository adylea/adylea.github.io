let app1 = new Vue({
    el: "#app1", //utk link kan
    data: {
        message: "Hello Vue!"

    }//data yang nk dimsukkn
})

let app2 = new Vue({
    el: "#app2",
    data: {
        message: "Loaded on " + new Date().toLocaleString(),
        linkUrl: "https://bbc.in/2LAnJs8",
        linkText: "Google is down!"
    }

})

let app3 = new Vue({
    el: "#app3",
    data: {
        showIt: true //true boleh nmpk, kalau false message x nmpk "now you can see this"
    },
    methods: {
        toggleMsg: function(){
            if(this.showIt){
                this.showIt = false
            }else{
                this.showIt = true
            }
        }
    }
})

let app4 = new Vue({
    el: "#app4",
    data: {
        theList: [   //theList is an array
            { text: "Learn HTML" }, //this one is an object
            { text: "Learn CSS" },
            { text: "Learn Javascript" }
        ]
    }
})

//not advisable to combined vuejs dgn normal js

let app5 = new Vue({
    el: "#app5",
    data: {
        message: "Hello World!"
    }
})