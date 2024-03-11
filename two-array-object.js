// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let result = new Map();
    
    arr1.forEach((key, index) => {
        let value = arr2[index] ? arr2[index] : null;
        result.set(key, value);
    })

    // for (let i = 0; i < arr1.length; i++){
    //     let value = arr2[i] ? arr2[i] : null;
    //     result.set(arr1[i], value);
    // }
    
    console.log(result);
    return result;
}

twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}