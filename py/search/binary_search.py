def binary_search(arr, x):
    """
    Searches for the given element x in the sorted array arr using binary search algorithm.
    Returns the index of the element if found, otherwise returns -1.
    """
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            left = mid + 1
        else:
            right = mid - 1

    return -1
