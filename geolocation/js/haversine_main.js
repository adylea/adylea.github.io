function calculateDistances(lat, lon){
    let dpulze = haversine(lat,lon,2.922561,101.650965)
    let pyramid = haversine(lat,lon,3.073065,101.607787)
    let klcc = haversine(lat,lon,3.158761,101.714524)

    return [dpulze,pyramid,klcc]
}

let ellocate = document.getElementById("locate")
ellocate.addEventListener("click",function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let ellat = document.getElementById("lat")
            let ellong = document.getElementById("long")
            let elDpulze = document.getElementById("depulze")
            let elklcc = document.getElementById("klcc")
            let elsunway = document.getElementById("sunway")

            let userLat = position.coords.latitude
            let userLong = position.coords.longitude

            let distances = calculateDistances(userLat, userLong)

            ellat.innerHTML = "Your latitude: " + userLat
            ellong.innerHTML = "Your longitude " + userLong
            elDpulze.innerHTML = "Distance to Dpulze, Cyberjaya is " + distances[0] + "km"
            elsunway.innerHTML = "Distance to Sunway Pyramid is " + distances[1] + "km"

        })
    }else{
            alert("Geolocation is not supported!")
        }
    
})