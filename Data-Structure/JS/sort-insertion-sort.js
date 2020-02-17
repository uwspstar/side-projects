const arr = [0, 1, 5, 4, 3, 2, 6];

/*

Insertion Sort Pseudocode

Start by picking the second element in the array
Now compare the second element with the one before it and swap if necessary.
Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
Repeat until the array is sorted

*/
const insertSort = function (arr) {
    let i, j;
    for (i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (j = i - 1; j >= 0; j--) {
            if (current < arr[j]) {
                arr[j + 1] = arr[j];
            } else break;
        }
        arr[j + 1] = current;
    }
    return arr;
}
console.log(insertionSort(arr));