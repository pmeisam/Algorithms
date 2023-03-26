def merge_sort(arr):
    # base case: array with 0 or 1 element is already sorted
    if len(arr) <= 1:
        return arr

    # divide the array into two halves
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]

    # recursively sort each half
    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)

    # merge the sorted halves
    sorted_arr = []
    i, j = 0, 0
    while i < len(left_half) and j < len(right_half):
        if left_half[i] <= right_half[j]:
            sorted_arr.append(left_half[i])
            i += 1
        else:
            sorted_arr.append(right_half[j])
            j += 1
    sorted_arr += left_half[i:]
    sorted_arr += right_half[j:]

    return sorted_arr
