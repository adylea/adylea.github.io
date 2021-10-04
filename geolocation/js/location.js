let ellocate = document.getElementById("btnLocate")
ellocate.addEventListener("click",function(){
    

    //to check the browser supported or not
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let ellat = document.getElementById("lat")
            let ellong = document.getElementById("long")
            ellat.innerHTML = "Latitude: " + position.coords.latitude
            ellong.innerHTML = "Longitude: " + position.coords.longitude

        })

    }else{
        alert("Geolocation is not supported!")
    }
})