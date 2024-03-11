// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Move the left pointer to find the first negative number from the left
        while (arr[left] > 0 && left < right) {
            left++;
        }

        // Move the right pointer to find the first positive number from the right
        while (arr[right] <= 0 && left < right) {
            right--;
        }

        // Swap the positive and negative numbers
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }
    console.log(arr)
}


separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -8, -1]
separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]
