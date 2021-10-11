function LoadUser(){
    let url = "https://randomuser.me/api/"

    fetch(url)
    .then((response) => response.json())
    .then(data => {
        let fn = document.getElementById("firstName")
        let ln = document.getElementById("lastName")
        let phone = document.getElementById("phone")
        let img = document.getElementById("userImg")

        fn.innerHTML = data.results[0].name.first
        ln.innerHTML = data.results[0].name.last
        phone.innerHTML = data.results[0].phone
        img.src = data.results[0].picture.large
    })
}

let elLoadUser = document.getElementById("getRandomUser")
elLoadUser.addEventListener("click",function(){
    LoadUser()
})

let elloadMultipleUsers = document.getElementById("getMultipleUser")
elloadMultipleUsers.addEventListener("click",function(){
    let userCount = document.getElementById("userCount")
    LoadMultipleUsers(userCount.value)
})

function LoadMultipleUsers(usercount){
    let url = "https://randomuser.me/api/?results=" + usercount
    let temp = ""

    fetch(url)
    .then((response) => response.json())
    .then(data => {
        let allUsers = document.getElementById("allUsers")
        //data.results.[0]=

        for(let i = 0; i < data.results.length; i++){
            let fn = '<div>' + data.results[i].name.first + '</div>'
            let ln = '<div>' + data.results[i].name.last + '</div>'
            let phone = '<div>' + data.results[i].phone + '</div>'
            let img = '<img src="' + data.results[i].picture.large + '" >'

            temp = temp + fn + ln + phone + img
        }
        allUsers.innerHTML = temp
    })
}

let elLoadGender = document.getElementById("getGenderUser")
elLoadGender.addEventListener("click",function(){
console.log("Load Gender clicked!")
    //get the gender
    let gender = document.getElementById("userGender")
    console.log("selected Gender: " + gender.value)

    //get the number of results
    let count =document.getElementById("userGenderCount")
    console.log("count: " + count.value)
    //call loadGender() and pass gender and number of result
    loadGender(gender.value,count.value)

})

function loadGender(gender, userCount){
    let url = "https://randomuser.me/api/?results=" + userCount + "&gender=" + gender
    console.log(url)

    //call fetch, loop the result, and change the innerHTML for allGenderUsers
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        // to check if it's work -> console.log(data)
        let allGenderUsers = document.getElementById("allGenderUsers")
        let temp = ""
        //sir use let resultDiv

        for(let i = 0; i < data.results.length; i++){
            let fn = '<div>' + data.results[i].name.first + '</div>'
            let ln = '<div>' + data.results[i].name.last + '</div>'
            let phone = '<div>' + data.results[i].phone + '</div>'
            let gdr = '<div>' + data.results[i].gender + '</div>'
            let img = '<img src="' + data.results[i].picture.large + '" >'
            
            temp = temp + fn + ln + phone + gdr + img
        }
        allGenderUsers.innerHTML = temp
    })
}

//new element,fetch id, attached event listener(click ke mouseup down, hover)fetch object n doc.geteleemntbyid, attribute (value,input,selected)pass it to function
//to fetch function, go to url response & return value from server
//manipulate object
