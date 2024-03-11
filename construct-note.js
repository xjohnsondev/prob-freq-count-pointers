// add whatever parameters you deem necessary
function constructNote(letters, msg) {
    function frequencyCounter(str){
        let bank = new Map();
        for (let letter of str){
            let counter = bank.get(letter) || 0;
            bank.set(letter, counter + 1);
        }
        return bank;
    }

    let bank1 = frequencyCounter(letters);
    let bank2 = frequencyCounter(msg);

    for (let [letter, count] of bank1){
        let count2 = bank2.get(letter);
         
        if (!count2 || count > count2){
            console.log('false');
            return false;
        }
    }
    console.log('true');
    return true;
}


constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
constructNote('hello', 'helloworld') // true
