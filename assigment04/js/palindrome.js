// getelementbyid,addeventlistener, function,equation/status,result,printresult

let elButton = document.getElementById("button") //output


elButton.addEventListener("click", function () {
    let elresultLabel = document.getElementById("resultLabel")



    let eltextInput = document.getElementById("textInput") //input
    let eltextValue = eltextInput.value

    const arrayWord = eltextValue.split('')
    const reverse =  eltextValue.split('').reverse()
    let palindrome = true


    for( let i= 0; i < arrayWord.length; i++){
        console.log(arrayWord[i], reverse[i]);
        if (arrayWord[i] != reverse[i]){

            palindrome=false
        }
    }

    
    alert(palindrome);
})