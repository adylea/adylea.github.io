function transformUppercase(_val){
    return _val.toUpperCase();
}

//DOM event listener
let elNamaPengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("Keyup",function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})

function checkPassword(){
    let elKataLaluan = document.getElementbyId ("KataLaluan")
    let pass_val = elKataLaluan.value

    if(pass_val.length > 5){
        alert("Password check....OK!")
    }else{
        alert("Password too short!")
    }
    
}

//traditional dom event handler
let elKL = document.getElementById("KataLaluan")
elKL.onblur = checkPassword