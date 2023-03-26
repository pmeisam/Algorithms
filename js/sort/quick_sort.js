function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivotValue = arr[pivotIndex];

  const less = [];
  const greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (arr[i] < pivotValue) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivotValue, ...quickSort(greater)];
}

let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
array = quickSort(array);
console.log(array);

/*
  This implementation uses the divide-and-conquer strategy. It selects a pivot element from the array and partitions the other elements into two 
  sub-arrays, according to whether they are less than or greater than the pivot. The function then recursively sorts the sub-arrays. This process 
  repeats until the entire array is sorted.
  
  In this implementation, we select the pivot element as the middle element of the array. We then create two sub-arrays - one for elements less 
  than the pivot and one for elements greater than the pivot. We recursively sort these sub-arrays, and then concatenate them with the pivot 
  element in the middle to produce the final sorted array.
  
  Quick Sort has an average time complexity of O(n log n), but can have a worst-case time complexity of O(n^2) in some cases. However, in practice, 
  Quick Sort is often faster than other sorting algorithms, such as Merge Sort, due to its cache efficiency and low memory usage.
  */
