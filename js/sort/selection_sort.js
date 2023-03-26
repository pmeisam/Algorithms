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
  //   let temp = arr[index1];
  //   arr[index1] = arr[index2];
  //   arr[index2] = temp;
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
selectionSort(array);
console.log(array);

/*
Here's how it works:

The outer loop iterates over the array, starting from the first element and going up to the second-to-last element. This is 
because the last element will already be in its correct position by the end of the algorithm.

For each iteration of the outer loop, we set minIdx to the current index i. This will keep track of the index of the smallest 
element we've found so far.

The inner loop starts from the next element after i and iterates over the rest of the array. For each element, we check if it's 
smaller than the current minimum element (arr[minIdx]). If it is, we update minIdx to the index of the new smallest element.

After the inner loop has finished, we check if minIdx is different from i. If it is, we swap the elements at indices i and minIdx. 
This ensures that the smallest element in the remaining unsorted portion of the array is moved to its correct position at the 
start of the array.

Once the outer loop has finished, the entire array will be sorted in ascending order.

Note that selection sort has a time complexity of O(n^2), which makes it inefficient for large arrays. However, it's still a useful
algorithm to know and can be a good starting point for understanding more complex sorting algorithms.
*/
