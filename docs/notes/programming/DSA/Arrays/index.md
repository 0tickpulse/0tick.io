# Arrays

:::info[JavaScript arrays aren't arrays]

They're secretly objects with the number index as properties to act like arrays.

:::

An array is a contiguous memory space that contains a certain number of bytes.

For example, `int[3]` means three integers in contiguous space (12 bytes).

## Indexing

```rust
let arr = [1, 2, 3]; // int[3]
arr[0]; // 1
```

In memory, this array looks like `00 00 00 01 00 00 00 02 00 00 00 03`.
When we index into an array, we're getting the address of the first element and adding the index multiplied by the size of the type to it.
If it was `arr[2]`, we'd get the address of the first element and add $2 * 4$ to it.
This has $O(1)$ time complexity.

```
00 00 00 01 00 00 00 02 00 00 00 03
^           ^           ^
|           |           |
|           |           +--- arr[2] (2 * 4)
|           +--- arr[1] (1 * 4)
+--- arr[0] (0 * 4)
```

This is a function that indexes an array, to demonstrate the above in code:

```rust
fn index<T: Copy>(arr: &[T], index: usize) -> T {
    let address = arr.as_ptr() as usize;
    let size = std::mem::size_of::<T>();
    let offset = index * size;
    let new_address = address + offset;
    unsafe { *(new_address as *const T) }
}
```

This is why array indexes start at 0; it's closer to how the array is stored in memory.

## ArrayBuffers in JavaScript

```js
> const buffer = new ArrayBuffer(12)
undefined
> buffer
ArrayBuffer {
  [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00>,
  byteLength: 12
}
```

It's just a series of 12 bytes. If we want to interpret it as something else, we can use a typed array.

```js
> const v8 = new Uint8Array(buffer)
undefined
> v8
Uint8Array(12) [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
  0, 0
]
> v8[0] = 42
42
> v8[2] = 60
60
> v8
Uint8Array(12) [
  42, 0, 60, 0, 0,
   0, 0,  0, 0, 0,
   0, 0
]
ArrayBuffer {
  [Uint8Contents]: <2a 00 3c 00 00 00 00 00 00 00 00 00>,
  byteLength: 12
}
```

Notice how one byte was skipped because of the size of the type.

```js
> const v16 = new Uint16Array(buffer)
undefined
> view16[4] = 0x5050
20560
> buffer
ArrayBuffer {
  [Uint8Contents]: <2a 00 3c 00 00 00 00 00 50 50 00 00>,
  byteLength: 12
}
```

This is interesting because we set position 4, yet it sets it on the 8th and 9th bytes.
Again, this is because of the size of the type, and how that affects the interpretation of the buffer.
Additionally, a concept called **endianness**, i.e. the order of bytes, comes into play here.

When we used `Uint8Array`, we interpreted it as 8-bit units, while `Uint16Array` interprets it as 16-bit units.
This is what an array fundamentally is; a contiguous memory space interpreted as a certain type.

These are called **views** because they're a different way of looking at the same data.

## Arrays are not lists

Arrays are not lists, and lists are not arrays.

## Insertion

With arrays, there's no magic behind the scenes.
There's no "insertion," it just sets the value at the index.
You do not get to grow your array, because it can overwrite other data.

```plaintext
01 02 03 04 05 06 07 08 09 10 11 12 13 14 15
----------------------------+ -------------+
                            |              |
                            |              +--- some other data
                            +--- our array
```

It would be problematic if we wanted to grow our array, because it's going to overlap with other data.

This is why data structures exist; to abstract away the details of how data is stored, so you don't have to constantly reallocate memory and move data around.

Some languages have things like `capacity` that optimizes the use of memory without reallocations.

## Deletion

Deletion is a bit confusing; you don't "delete" contiguous memory.
Programs delete things differently, but the most common way is to mark it as "deleted" and ignore it.

For raw arrays in, for instance, C, you will have to mark it yourself.

`null` also comes into play here as a named way of saying "deleted."

## Lists

As previously mentioned, arrays are just contiguous memory interpreted as a certain type.
You can't "insert at a certain index" because you can't grow the array. There's no `push`, `pop`, etc.
To get around this, data structures are used, many of which actually use arrays under the hood.
