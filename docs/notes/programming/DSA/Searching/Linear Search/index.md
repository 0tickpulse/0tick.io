---
sidebar_position: 1
---
# Linear Search & Kata Setup

The simplest search algorithm is the linear search.

```plaintext
array [                           ]
      |                           |
      0                           n

search(array, value)
```

We want a way to search through an array for a value.

```plaintext
array [ array[0] = value?         ]
      |    ^                      |
      0    |                      n
           |
```

We traverse the array, checking each value.

```plaintext
array [ array[0] array[1] = value?]
      |    ^      ^               |
      0    |      |               n
           |      |
```

(and so on)

## Time Complexity

Recall the three principles of time complexity:

1. Growth is with respect to the input.
2. Constants are dropped.
3. Consider the worst case.

Assuming the worst case, we would have to go from 0 to n, checking each value.

So, the time complexity is $O(n)$.

## Implementation

```rust
fn linear_search<T: PartialEq>(arr: &[T], value: T) -> Option<usize> {
    for (i, v) in arr.iter().enumerate() {
        if v == &value {
            return Some(i);
        }
    }
    None
}
```

```ts
function linearSearch<T>(arr: T[], value: T): number | null {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return null;
}
```
