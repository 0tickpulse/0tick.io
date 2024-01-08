---
sidebar_position: 2
---
# Binary Search

The most important question to consider when searching is: **is the data sorted?**

If it is sorted, there are many advantages.

## The concept

```plaintext
array [     array[i]              ]
      |        ^                  |
      0        |                  n
               |
               i
```

We start 10% into the array, and compare the value at that index to the value we're looking for.

Then, we jump to the left or the right, depending on the result of the comparison.

```plaintext
array [                           ]
      |  ^     ^                  |
      0  | 10% |                  n
         |<----+
               |
               i
```

For example, we jump 10% to the left if our desired value is less.

Now we think about the time complexity.

In the worst case, we jump 10%, it's not there, we jump 10% again, it's not there, and so on until we reach the end.
This is 10 operations. At the end, it's still not there, and since we have the last 10% unsearched, so we check the last 10% of the array.
This is theoretically $0.1n$.

So, added together, the time complexity is $O(10 + 0.1n)$, and we drop the constants, so the time complexity is $O(n)$.
So this is still linear time complexity.

## A better approach

The key is to jump to the middle of the array to start.

```plaintext
array [                           ]
      |             ^             |
      0             |             n
                    |
                    i
```

If the value is less than the value at the middle, we know it's in the left half of the array, and if we linearly scan the left half, the worst case is $0.5n$.

```plaintext
array [                           ]
      |             ^             |
      0<----------->|             n
           0.5n     |
                    i
```

So we do it again. We jump to the middle of the left half.

We keep halving the array until there's nothing left to halve.

The traversal goes from $n$ to $0.5n$ to $0.25n$ to $0.125n$ and so on.
In other words:

$$
\begin{align*}
    \frac{n}{2^k} &= 1 \\
    n &= 2^k \\
    k &= \log_2 n
\end{align*}
$$

So, ignoring constants, the time complexity is $O(\log n)$.
This type of search is called a **binary search** because you're always halving the array.

## Pseudocode

```rust
fn search(array, low, high, needle)
    do
        mid = floor((low + high) / 2) // get the middle index to start
        v = array[mid]
        if v == needle
            return mid
        else if v > needle
            low = mid + 1
        else
            high = mid // remember, low is inclusive, high is exclusive
    while low < high
    return -1 // sentinel value
```

## Implementation

```rust
fn search<T: PartialOrd>(haystack: &[T], needle: T) -> Option<usize> {
    let mut low = 0;
    let mut high = haystack.len();
    while low < high {
        let mid = (low + high) / 2;
        let value = &haystack[mid];

        if value == &needle {
            // found
            return Some(mid);
        } else if value > &needle {
            // go left
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    None
}
```
