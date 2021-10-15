let elresults = document.getElementById("results")

let resultLabel = document.getElementById("resultLabel")


let numBox = document.getElementById("factorial")


elresults.addEventListener("click", function () {

    num = numBox.value
    let factorialResult = num
    let factorialString = num
    for (let i = num-1; i > 0; i--) {

        factorialResult = factorialResult * (i);
        factorialString =  factorialString + ' x ' +  i ;

    }

    printResult = "Factorial = " + num + " is " + factorialString +  ' = ' +factorialResult;

    resultLabel.innerHTML = printResult;
})

