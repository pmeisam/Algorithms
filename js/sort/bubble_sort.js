// Time Complexity O(n^2)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {

    //   console.log(JSON.stringify(arr)); // by unccomenting this line you'll see what's happening
      if (arr[j] > arr[j + 1]) {

        swap(arr, j);

      }
    }
  }

  return arr;
}

// Helper function
function swap(arr, index) {
  let temp = arr[index + 1];
  arr[index + 1] = arr[index];
  arr[index] = temp;
}

let array = [300, 99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
bubbleSort(array);
console.log(JSON.stringify(array));
