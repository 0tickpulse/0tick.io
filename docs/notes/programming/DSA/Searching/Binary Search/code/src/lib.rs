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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let arr = [1, 2, 3, 4, 5];
        assert_eq!(search(&arr, 1), Some(0));
        assert_eq!(search(&arr, 2), Some(1));
        assert_eq!(search(&arr, 3), Some(2));
        assert_eq!(search(&arr, 4), Some(3));
        assert_eq!(search(&arr, 5), Some(4));
        assert_eq!(search(&arr, 6), None);
    }
}
