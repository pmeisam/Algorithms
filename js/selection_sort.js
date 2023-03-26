// O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let pivot = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[pivot] > arr[j]) {
        pivot = j;
      }
    }
    pivot !== i && swapItems(arr, pivot, i);
  }
  return arr;
}

function swapItems(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
selectionSort(array);
console.log(array);
