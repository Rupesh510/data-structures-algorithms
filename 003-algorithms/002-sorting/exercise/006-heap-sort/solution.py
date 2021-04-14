"""
 * Approach: Heap Sort
 * Time complexity: O(n log n)
 * Space complexity: O(1)
"""


def heap_sort(A):
    heap_size = len(A)
    build_heap(A, heap_size)
    for i in range(heap_size-1, 0, -1):
        A[0], A[i] = A[i], A[0]
        heap_size -= 1
        max_heapify(A, heap_size, 0)
    return A


def build_heap(A, heap_size):
    for i in range((heap_size//2), -1, -1):
        max_heapify(A, heap_size, i)


def max_heapify(A, heap_size, i):
    left = 2 * i + 1
    right = 2 * i + 2
    largest = i
    if left < heap_size and A[left] > A[largest]:
        largest = left
    if right < heap_size and A[right] > A[largest]:
        largest = right
    if largest != i:
        A[i], A[largest] = A[largest], A[i]
        max_heapify(A, heap_size, largest)


print(heap_sort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))
