// Bubble Sort
// By Eric Liang
// 
// Updated: 4/20/2019
// Repository: https://github.com/ewliang/Javascript-Algorithms/blob/master/SortingAlgorithms/BubbleSort.js

let a = [10, 1, 3, 0, 7];
let n = a.length;
let swappedFlag = false;
let temp = 0;

do {
    console.log(a);
    swappedFlag = false;
    for(let i = 0; i < n; i++) {
        if(a[i] > a[i + 1]) {
            temp = a[i];
            a[i] = a[i + 1];
            a[i + 1] = temp;
            swappedFlag = true;
        }
    }
} while(swappedFlag);

console.log(a);