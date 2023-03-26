function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      return mid; // Return the index of the target element
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Target element not found in array
}

/*
Binary search is a more efficient algorithm than linear search for sorted arrays. It works by repeatedly dividing the search interval in half until the target value is found.

Explanation:

binarySearch takes a sorted array and a target value as arguments.
The function initializes two variables: low (the index of the first element) and high (the index of the last element).
The function uses a while loop to repeatedly divide the search interval in half until the target value is found or the search interval is empty.
On each iteration, the function calculates the midpoint of the search interval using the formula (low + high) / 2.
If the target value is found at the midpoint, the function returns the index of the target element using the return keyword.
If the target value is greater than the midpoint, the function updates low to mid + 1 to search the upper half of the array.
If the target value is less than the midpoint, the function updates high to mid - 1 to search the lower half of the array.
If the target value is not found after the while loop completes, the function returns -1.
*/
