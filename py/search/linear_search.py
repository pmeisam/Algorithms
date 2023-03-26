def linear_search(arr, x):
    """
    Searches for an element in an array using linear search algorithm

    Parameters:
    arr (list): the list to search in
    x (int): the value to search for

    Returns:
    int: index of the found element, or -1 if not found
    """
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1
