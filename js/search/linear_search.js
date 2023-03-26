function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // Return the index of the target element
    }
  }
  return -1; // Target element not found in array
}

/*
Linear search, also known as sequential search, checks each element of an array one by one until it finds the target value or reaches the end of the array.

Explanation:

linearSearch takes an array and a target value as arguments.
The function loops through the array using a for loop, checking each element against the target value using an if statement.
If the target value is found, the function returns the index of the target element using the return keyword.
If the target value is not found, the function returns -1.
*/
