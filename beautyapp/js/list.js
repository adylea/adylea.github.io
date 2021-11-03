let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/28eb2ef36c67dc00d0543eb113189470/beautySalon/booking';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);

            let bookingNameList = document.getElementById("bookingNameList")
            let bookingIds = []


            //delete all rows in the tables
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }

            //load all rows from sheety API
            for (let i = 0; i < json.booking.length; i++) {
                let gName = json.booking[i].name;
                let gPhone = json.booking[i].phone;
                let gDate = json.booking[i].date;
                let gPax = json.booking[i].pax;
                let gId = json.booking[i].id;
                let gSession = json.booking[i].session;
                let btnId = "delete" + gId;



                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gPhone
                row.insertCell(3).innerHTML = gDate
                row.insertCell(4).innerHTML = gPax
                row.insertCell(5).innerHTML = gSession
                row.insertCell(6).innerHTML = "<button id='" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"



                bookingIds.push(btnId)
            }

            for (let j = 0; j < bookingIds.length; j++) {
                //console.log(bookingIds[j]) - just top check id inside array
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    console.log(el.id + " clicked")
                    let theId = el.id.replace("delete", "")
                    //console.log(theId) - to check
                    DeleteBooking(theId)
                })
            }


        });
}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/28eb2ef36c67dc00d0543eb113189470/beautySalon/booking/'+id;
    fetch(url, {
            method: 'DELETE',
        })

        .then(() => {
            alert("Record id " + id + " deleted!")
            GetBooking()
        });

}