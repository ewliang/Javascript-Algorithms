// Insertion Sort
// By Eric Liang
// 
// Updated: 4/20/2019
// Repository: https://github.com/ewliang/Javascript-Algorithms/blob/master/SortingAlgorithms/InsertionSort.js

let a = [10, 1, 3, 0, 7];
let numOfElements = a.length;
let i = 1;
let j = i - 1;
let keyNum = a[i];

for(let k = i; k < numOfElements; k++) {
    j = k - 1;
    keyNum = a[k];
    while((keyNum < a[j]) && j >= 0) {
        a[j + 1] = a[j];
        a[j] = keyNum;
        j = j - 1;
        console.log(k + ': ' + a);
    }
}

console.log("FINAL: ");
console.log(a);