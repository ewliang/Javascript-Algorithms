// Insertion Sort
// By Eric Liang
// 
// Updated: 4/20/2019
// Repository: https://github.com/ewliang/Javascript-Algorithms/blob/master/SortingAlgorithms/SelectionSort.js

let a = [10, 1, 3, 0, 7];
let numOfElements = a.length;
let minIndex = 0;
let temp = 0;

for(let i = 0; i < numOfElements; i++) {
    minIndex = i;
    for(let j = i; j < numOfElements; j++) {
        if(a[j] < a[minIndex]) {
            minIndex = j;
        }
    }
    temp = a[i];
    a[i] = a[minIndex];
    a[minIndex] = temp;
}

console.log(a);