// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
    // add whatever parameters you deem necessary - good luck! 
    let result = []
    function help(num) {
        if (num <= 2) return 1
        if (result[num] !== undefined) return result[num]  
        return result[num] = help(num - 1) + help(num - 2)
    }
    help(n)
    return result[n]
}

console.log(fib(35))

/*

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21 =  6 + 5 + 4 + 3 + 2 + 1
// recursiveRange(10) // 55 = 10 + ... + 1

function recursiveRange(n) {
    if (n < 0) return undefined
    if (n === 0) return 0
    return n + recursiveRange(n - 1)
}

console.log(recursiveRange(6))
console.log(recursiveRange(10))

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length === 0) return undefined
    if (arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}

const productOfArray2 = function (arr) {
    if (arr.length === 0) return undefined
    if (arr.length === 1) return arr[0]
    return arr[arr.length - 1] * productOfArray(arr.slice(0, arr.length - 1))
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60


//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
// 4! = 4 * 3 * 2 * 1
function factorial(n) {
    if (n < 2) return 1
    return n * factorial(n - 1)
}
console.log(factorial(7))


// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(n, p) {
    if (p === 0) return 1
    if (p === 1) return n
    if (n <= 1) return n
    return n * power(n, p - 1)
}
//base, exponent
console.log(power(2, 0))
console.log(power(2, 2))
console.log(power(2, 4))
console.log(power(3, 3));
console.log(power(8, 1));


const fibonacciArray = function (n) {
    if (n < 2) return [1] // n = 1, one element
    if (n < 3) return [1, 1] // n = 2 , return [1, 1]
    let result = [1, 1]
    function help(num) {
        for (let i = 2; i < num; i++) {
            result.push(result[i - 1] + result[i - 2])
        }
    }
    help(n)
    return result
}

console.log(fibonacciArray(3)) // [ 1, 1, 2 ]
console.log(fibonacciArray(4)) // [ 1, 1, 2, 3 ]
console.log(fibonacciArray(5)) // [ 1, 1, 2, 3, 5 ]


// 4! = 4 * 3 * 2 * 1
const factorial = function (n) {
    if (n === 1) return 1
    return n * factorial(n - 1)
}
console.log(factorial(3)) // 6
console.log(factorial(4)) // 24


const fibonacci = function (n) {
    if (n < 3) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(7)) // 13 :  [1, 1, 2, 3, 5, 8, 13]

const fibonacciArray = function (n) {
    if (n < 2) return [1] // n = 1, one element
    if (n < 3) return [1, 1] // n = 2 , return [1, 1]
    let result = [1, 1]
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result
}

console.log(fibonacciArray(7)) // 13 :  [1, 1, 2, 3, 5, 8, 13]



const fibonacci = function (n) {
    if (n <= 2) return 1;
    let result = [1, 1];
    for (let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n - 1];
}
*/
