class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(val) {
        this.head = new Node(val);
    }
    add(val) {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node(val);
        return this;
    }
}
let list1 = new LinkedList(1);
list1.add(2);
list1.add(3);
//console.log(JSON.stringify(list1));
let list2 = new LinkedList(1);
list2.add(9);
list2.add(6);
list2.add(9);
//console.log(JSON.stringify(list2));

//1-->2-->3
//1-->9-->6-->9
//2-->1-->0-->0-->1
const addTwoNumbers = function (l1, l2) {
    //console.log(JSON.stringify(list1));
    //console.log(JSON.stringify(list2));
    let sum = 0;
    let carry = 0;
    let list = new LinkedList();
    let cur1 = l1.head;
    let cur2 = l2.head;
    while (cur1 !== null || cur2 !== null || sum >= 10) {
 
        if (cur1 !== null) {
            sum += cur1.val;
            cur1 = cur1.next;
        }
        if (cur2 !== null) {
            sum += cur2.val;
            cur2 = cur2.next;
        }
        sum += carry;
        sum >= 10 ? carry = 1 : carry = 0;
        sum = sum % 10;
        list.add(sum);
    }
    return list;
}
let result = addTwoNumbers(list1, list2);
console.log(JSON.stringify(result));

/*
const isPalindrome = function (str) {

    let mid = parseInt(str.length / 2)
    let len = str.length
    for (let i = 0; i <= mid; i++) {
        if (str[i] != str[len - i - 1]) return false
    }
    return true
}
console.log(isPalindrome("dbbd")) //babab
console.log(isPalindrome("cbbd")) //babab
console.log(isPalindrome("racecar")) //racecar
console.log(isPalindrome("babad")) //bab
console.log(isPalindrome("babab")) //babab
console.log(isPalindrome("ababbad")) //abba
*/