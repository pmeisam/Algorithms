// O(n^2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insertionSort(array);
console.log(array);

/*
The insertionSort function takes an array arr as its argument and returns the sorted array using the insertion sort algorithm.

Here's how the algorithm works:

We start iterating the array from the second element, since the first element is already sorted by default.
We save the current element as key.
We iterate through the sub-array to the left of the current element (arr[0] to arr[i-1]) and move all the elements greater than key one position to the right.
Once we have found the correct position for key, we insert it there.
We repeat the above steps for all the remaining elements in the array.
Insertion sort has a worst-case time complexity of O(n^2) and is not as efficient as some other sorting algorithms like quicksort and mergesort. However, it performs well on small arrays and is very simple to implement.
*/
