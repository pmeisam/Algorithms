function heapSort(arr) {
  // Build a max heap from the input array
  buildMaxHeap(arr);

  // Sort the array by repeatedly extracting the maximum element from the heap
  for (let i = arr.length - 1; i > 0; i--) {
    // Move the maximum element (root of the heap) to the end of the array
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // Restore the heap property of the remaining elements
    maxHeapify(arr, 0, i);
  }

  return arr;
}

function buildMaxHeap(arr) {
  // Start from the parent of the last leaf node (i.e., the middle of the array)
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, arr.length);
  }
}

function maxHeapify(arr, i, heapSize) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  // Compare the left child with the current node
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  // Compare the right child with the current node and the left child
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest element is not the current node, swap them and recursively heapify the affected subtree
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    maxHeapify(arr, largest, heapSize);
  }
}

let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
heapSort(array);
console.log(array);

/*
Here's a brief explanation of how heap sort works:

Build a max heap from the input array: A binary heap is a tree-like data structure in which every parent node is larger (in a max heap) or smaller (in a min heap) than its children. To build a max heap from an array, we start from the parent of the last leaf node and repeatedly call a maxHeapify function to restore the heap property of the affected subtrees.

Sort the array by repeatedly extracting the maximum element from the heap: We can extract the maximum element (which is always the root of the heap in a max heap) and move it to the end of the array. We then restore the heap property of the remaining elements by calling maxHeapify on the root node. We repeat this process until the entire array is sorted.

Heap sort has a worst-case time complexity of O(n log n), which is the same as merge sort and quicksort, but it has a better worst-case space complexity of O(1) (i.e., it sorts the array in place). However, heap sort has a larger constant factor than merge sort and quicksort, which makes it less efficient for small arrays.
*/
