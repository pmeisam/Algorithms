def heap_sort(arr):
    # Build a max heap
    build_max_heap(arr)
    # Extract the root (largest element) from the heap one by one
    for i in range(len(arr)-1, 0, -1):
        # Swap the root with the last element
        arr[0], arr[i] = arr[i], arr[0]
        # Call max heapify on the reduced heap
        max_heapify(arr, 0, i)
    return arr


def build_max_heap(arr):
    n = len(arr)
    # Start from the last non-leaf node and heapify each node
    for i in range(n//2-1, -1, -1):
        max_heapify(arr, i, n)


def max_heapify(arr, i, n):
    # Find the largest among the root, left child and right child
    largest = i
    left = 2*i + 1
    right = 2*i + 2
    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    # If the largest is not the root, swap the largest with the root and recursively heapify the affected subtree
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        max_heapify(arr, largest, n)
