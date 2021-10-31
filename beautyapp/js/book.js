let bookBtn = document.getElementById("bookNow")
bookBtn.addEventListener("click",function(){
    let userName = document.getElementById("userName")
    let userNameVal = userName.value 

    //console.log(username)
    let phone = document.getElementById("phone")
    let phoneVal = phone.value

    let date = document.getElementById("date")
    let dateVal = date.value

    let pax = document.getElementById("pax")
    let paxVal = pax.value

    let session = document.getElementById("session")
    let sessionVal = session.value

    Book(userNameVal, phoneVal, dateVal, paxVal, sessionVal)

})

function Book(name, phone, date, pax, session){
    let url = 'https://api.sheety.co/28eb2ef36c67dc00d0543eb113189470/beautySalon/booking';
    console.log(session)
  let body = {
    booking: {
        name: name,
        phone: phone,
        date: date,
        pax: pax,
        session: session,
    }
  }
  fetch(url, {
    method: 'POST',
      body: JSON.stringify(body),
      headers: {
          "content-type": "application/json"
      }
  })
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json);
    alert(json.booking.name + " added in the list!")
  });
}
