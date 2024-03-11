// add whatever parameters you deem necessary

function averagePair(arr, avg){
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right){
        let currentAvg = (arr[left] + arr[right]/2);

        if (currentAvg < avg){
            left++;
        }
        else if (currentAvg > avg){
            right--;
        }
        else if (currentAvg === avg){
            return true;
        }
    }
    return false;

}

// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false