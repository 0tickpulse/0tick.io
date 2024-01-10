use std::fmt::Debug;

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

#[cfg(test)]
mod tests {
    use super::bubble_sort;
    #[test]
    fn test_bubble_sort() {
        assert_eq!(bubble_sort(&[9, 8, 7, 6]), vec![6, 7, 8, 9]);
        assert_eq!(
            bubble_sort(&[9_f32, 8_f32, 7_f32, 6_f32]),
            vec![6_f32, 7_f32, 8_f32, 9_f32]
        );

        assert_eq!(bubble_sort(&['c', 'f', 'a', 'x']), vec!['a', 'c', 'f', 'x']);

        assert_eq!(bubble_sort(&[6, 8, 7, 9]), vec![6, 7, 8, 9]);
        assert_eq!(bubble_sort(&[2, 1, 1, 1, 1]), vec![1, 1, 1, 1, 2]);
    }
}
