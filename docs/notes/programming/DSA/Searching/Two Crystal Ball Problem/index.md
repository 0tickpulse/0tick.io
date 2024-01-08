---
sidebar_position: 3
---
# Two-Crystal Ball Problem

Given two crystal balls that will break if dropped from a high-enough distance, determine the exact spot at which it will break in the most optimized way.

Sometimes you receive the problem in the context of a building and you need to find the highest floor at which the ball will break.

## Generalization

The floors can be thought of as an array of booleans, where `true` means the ball will break and `false` means the ball will not break.

```plaintext
floors [ false false ... true true ... ]
       |                 |             |
       0                 |             n
                         |
                         i
```

If we use linear search and start at 0, we will eventually find the first `true` value.
But this doesn't utilize our constraints: we have two balls. The time complexity is $O(n)$.

We know that this array is ordered, so we can use binary search to find the first `true` value.

```plaintext
floors [ false false ... floors[i] = true? ... ]
       |                 |                     |
       0                 |                     n
                         |
                         i = 0.5n
```

Well, if it's true, one of the balls broke. We will have to linearly search from 0 to i using the other ball to find the exact spot.
If we run $0.5n$ linear searches, the time complexity is $O(n)$.

Both of these approaches suck.

The problem is that we are jumping a portion of $n$. We need to use a fundamentally different unit. For example, we can jump by $\sqrt{n}$.

```plaintext
floors [ f f ... t t t t t t t t t t t t ... t ]
       |         |         |         |         |
       0<--------|-------->|-------->|-------->n
                   sqrt(n)
```

In the worst case, we are running forward at most $\sqrt{n}$ times, going back, and then linearly searching the last $\sqrt{n}$ floors.

So, the time complexity is $O(\sqrt{n} + \sqrt{n})$ which is $O(\sqrt{n})$.

## Implementation

```rust
fn two_crystal_balls(breaks: &[bool]) -> u8 {
    let jump_size = (breaks.len() as f64).sqrt() as usize;
    let mut i = jump_size;
    while i < breaks.len() {
        if breaks[i] {
            break;
        }
        i += jump_size;
    }
    // linear search from i - jump_size to i
    for j in (i - jump_size)..i {
        if breaks[j] {
            return j as u8;
        }
    }
    unreachable!()
}
```
