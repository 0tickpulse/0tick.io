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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let breaks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true];
        assert_eq!(two_crystal_balls(&breaks), 14);
    }
}
