// fibonacci in recursion using memoization
function recursiveFib(num, map) {
  let memo = {};
  let res = recHelper(num, memo);
  console.log(memo);
  return res;
}

function recHelper(num, memo) {
  if (num <= 1) {
    return num;
  }

  // Verify if the Fibonacci response to the given number already exists in the
  // memo object. This helps to prevent executing the Fibonacci recursive
  // function unnecessarily for an output that is already available in the memo object
  if (memo[num]) {
    return memo[num];
  }

  let res = recHelper(num - 1, memo) + recHelper(num - 2, memo);
  memo[num] = res;
  return res;
}

console.log(recursiveFib(100));

// without memoization
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(40));
