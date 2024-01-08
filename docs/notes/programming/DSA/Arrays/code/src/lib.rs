fn index<T: Copy>(arr: &[T], index: usize) -> T {
    let address = arr.as_ptr() as usize;
    let size = std::mem::size_of::<T>();
    let offset = index * size;
    let new_address = address + offset;
    unsafe { *(new_address as *const T) }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let arr = [1, 2, 3, 4, 5];
        assert_eq!(index(&arr, 0), 1);
        assert_eq!(index(&arr, 1), 2);
        assert_eq!(index(&arr, 2), 3);
        assert_eq!(index(&arr, 3), 4);
        assert_eq!(index(&arr, 4), 5);
        assert_eq!(std::mem::size_of::<i32>(), 4);
    }
}
