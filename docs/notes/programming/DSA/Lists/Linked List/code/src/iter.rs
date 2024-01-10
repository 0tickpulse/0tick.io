use crate::Link;

pub struct LinkedListIterator<'a, T> {
    current_link: &'a Link<T>,
}

impl<'a, T> Iterator for LinkedListIterator<'a, T> {
    type Item = &'a T;

    fn next(&mut self) -> Option<Self::Item> {
        self.current_link.as_ref().map(|node| {
            self.current_link = &node.next;
            &node.data
        })
    }
}

impl<'a, T> LinkedListIterator<'a, T> {
    pub fn new(current_link: &'a Link<T>) -> Self {
        Self { current_link }
    }
}
