# Sorting

Usually the first algorithm in almost every major course is insertion sort, but they're boring, and hard to start with. Instead, we start with bubble sort.

## Definition of a sorted array

Generally, in a sorted array $x$, for any given $x_i$, $x_{i-1}\le x_i \le x_{i + 1}$.

## Bubble Sort

Bubble sort is a simple algorithm that works by swapping adjacent elements if they are out of order. This is done until the array is sorted.

```plaintext
[2, 6, 1, 3, 5]
 ^  ^
 |  |
 i  i + 1
[2, 6, 1, 3, 5]
    ^  ^
    |  |
    i  i + 1
[2, 1, 6, 3, 5]
       ^  ^
       |  |
       i  i + 1
[2, 1, 3, 6, 5]
          ^  ^
          |  |
          i  i + 1
[2, 1, 3, 5, 6]
[1, 2, 3, 5 | 6] << sorted
```

This is one iteration, and it pushes the largest element to the end. This is repeated until the array is sorted.

```plaintext
[2, 6, 1, 3, 5]
[2, 1, 3, 5, 6]
[1, 2, 3, 5, 6]
```

### Time complexity

The first iteration requires $n$ comparisons, the second requires $n - 1$, and so on. This means that the total number of comparisons is:

$$
\sum_{i = 1}^{n - 1} i = \frac{n(n - 1)}{2} = \frac{n^2}{2} - \frac{n}{2} = O(n^2)
$$

This is because we drop constants and lower-order terms.

### Implementation

```rust
pub fn bubble_sort<T: PartialOrd + Clone>(array: &[T]) -> Vec<T> {
    let mut result: Vec<T> = array.into();
    for i in 0..result.len() {
        for j in 0..(result.len() - 1 - i) {
            if result[j] > result[j + 1] {
                result.swap(j, j + 1)
            }
        }
    }
    result
}
```
