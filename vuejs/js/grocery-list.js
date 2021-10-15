Vue.component("grocery-list",{
    props:["todo"],//parameter/properties
    template:"<li>****{{todo.desc}}</li>"
})