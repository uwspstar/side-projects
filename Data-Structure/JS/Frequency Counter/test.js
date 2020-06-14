// q1 : has negative number inside array ?
// Array.prototype.indexOf()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// splice vs slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const same = function (arr1, arr2) {
    if (arr1.length != arr2.length) return false

    for (let i = 0; i < arr1.length; i++) {
        let rightIndex = arr2.indexOf(arr1[i] ** 2)
        if (rightIndex < 0) return false
        arr2.splice(rightIndex, 1)
    }
    return true
}

console.log(same([1, 2, 3], [4, 1, 9]))
console.log(same([1, 2, 3], [1, 9]))
console.log(same([1, 2, 1], [4, 4, 1]))