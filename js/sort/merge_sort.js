function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const arr = [5, 2, 4, 7, 1, 3, 2, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // [1, 2, 2, 3, 4, 5, 6, 7]

/*
This implementation uses a divide-and-conquer approach to recursively split the input array in half until each 
element is in its own array. Then, it merges the smaller arrays back together in sorted order using the merge 
function. The merge function takes two sorted arrays and combines them into a single sorted array.

This implementation has a time complexity of O(n log n) and a space complexity of O(n).
*/