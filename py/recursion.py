# fibonacci in recursion using memoization
def recursiveFib(num, memo={}):
    if num <= 1:
        return num
    
    # Verify if the Fibonacci response to the given number already exists in the
    # memo object. This helps to prevent executing the Fibonacci recursive
    # function unnecessarily for an output that is already available in the memo object
    if num in memo:
        return memo[num]
    
    res = recursiveFib(num - 1, memo) + recursiveFib(num - 2, memo)
    memo[num] = res
    return res

print(recursiveFib(100))

# fibonacci in recursion without memoization
def fibonacci(n):
    if n == 0 or n == 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(40))