const stringRotation = function (str1, str2) {
    if (str1.length !== str1.length) return false;
    let p1 = 0;
    let p2 = 0;
    // "bwaterbottle"
    // "erbottlebwat"
    while (p1 < arr.length && p2 < arr.length) {
        if (str1[p1] !== str2[p2]) {
            p2++;
        }
        else {
            let tmp = str.slice(p2) + str.slice(0, p2);
            if (tmp = str1) return true;
            p2++;
        }
    }
    return false;

}
console.table(stringRotation('bwaterbottle', 'bottlebwater'));

/*
const witnesses = function (arr) {
    if (arr.length < 2) return 1;
    let highest = 0
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > highest) {
            highest = arr[i];
            count++;
        }
    }
    return count;
}
console.table(witnesses([3, 6, 3, 4, 1]));
console.table(witnesses([3]));
console.table(witnesses([3, 7, 4, 5, 6, 2]));

const rotateMatrix = function (arr) {
    // i = row; j = column;

    let row = arr.length;
    let column = arr[0].length;
    //step 1
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            [arr[i][j]]
        }
    }
    return arr;
    //step 2
    for (let i = 0; i < row; i++) {
        [arr[i], arr[row - i]] = [arr[row - i], arr[i]]
    }
    return arr;

}
let arr = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
console.log(rotateMatrix(arr)); //[[7, 4, 1],[8, 5, 2],[9, 6, 3]]

const checkPermutations = function (str1, str2) {
    if (str1.length != str2.length) return false;
    let len = str1.length;
    //use indexOf()
    for (let i = 0; i < len; i++) {
        let position = str2.indexOf(str1[i]);
        if (position < 0) return false;
        str2 = str2.slice(0, position) + str2.slice(position + 1);
    }
    return str2.length === 0;
}

console.log(checkPermutations("doo", "ood")) //true
console.log(checkPermutations("adogs", "agod")) //false
console.log(checkPermutations("adogs", "magod")) //false

const isUniqueForAllLowerCase = function (str) {
    if (str.length > 128) return false;
    if (str.length === 1) return true;
    let checker = 0;
    for (let i = 0; i < str.length; i++) {
        let a = 'a'
        let val = str.charCodeAt(i) - a.codePointAt(0);
        let temp = checker & (1 << val);
        //console.log('codePointAt(1)=', 'a'.codePointAt(0), 'str.charCodeAt(i)=', str.charCodeAt(i), 'val=', val, '1 << val=', 1 << val, 'temp=', temp);
        if (temp > 0) return false;
        //checker = checker | (1 << val);
        checker |= (1 << val); // a[0] |= b same as a[0] = a[0] | b

    }
    return true;
}

codePointAt(1)= 97 str.charCodeAt(i)= 65 val= -32 1 << val= 1 temp= 0
codePointAt(1)= 97 str.charCodeAt(i)= 114 val= 17 1 << val= 131072 temp= 0
codePointAt(1)= 97 str.charCodeAt(i)= 97 val= 0 1 << val= 1 temp= 1


const isUnique2 = function (str) {
    if (str.length > 128) return false
    if (str.length === 1) return true;
    return str.length === (new Set(str.split(''))).size;
}

const isUnique1 = function (str) {
    if (str.length === 1) return true
    let arr = str.split('');
    let set = new Set(arr);
    console.log('arr = ', arr, 'set = ', set)
    return arr.length === set.size;
}

console.log(isUnique("ras"));
console.log(isUnique("Arrays"));
console.log(isUnique("Arrays and Strings xingwang"));

*/