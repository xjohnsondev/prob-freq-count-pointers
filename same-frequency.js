// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let num1Arr = String(num1).split('').sort();
    let num2Arr = String(num2).split('').sort();

    if (num1Arr.length !== num2Arr.length) {
        console.log('false')
        return false
    }
    
    for (let [index, num] of num1Arr.entries()){
        if (num != num2Arr[index]) {
            console.log('false')
            return false;
        }
    }
    console.log('true')
    return true;

}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false