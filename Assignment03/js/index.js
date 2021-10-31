function showMinMaxAvg(){

    const numberList = [12,14,4,8,5,6,3];

    let min = numberList[0];
    let max = numberList[0];
    let sum = 0;

    for(let i = 0; i < numberList.length; i++){
        if (numberList[i] < min) {
            min = numberList[i]
        }
        if (numberList[i] > max){
            max = numberList[i];
        }
       sum += numberList[i];

    }
    avg = sum/numberList.length;

    printResult = ' Min= ' + min + ' Max= ' + max + ' Avg = ' + avg;

    let results = document.getElementById('results');
    results.innerHTML = printResult;



}