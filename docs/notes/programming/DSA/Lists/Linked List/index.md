# Linked List

What sucks about an array:

1. Deletion
2. Insertion
3. Not growable

Linked lists have two types: **singly** and **doubly** linked lists.

In a linked list, fundamentally it is a type of structure where elements have a reference to the next element.

```
(A) --> (B) --> (C) --> (D) --> (E)
 ^
 |
head
```

This means that, for example, `get(i)` would work very differently. You would have to start at the head and go through the references

The `(A)`s are usually container items, meaning, given a value `T`, it would usually be a wrapper, like `Node<T>`.
