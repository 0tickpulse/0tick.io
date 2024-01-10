type Point = Vec<f64>;

fn find_intersection_point(p1: &Point, q1: &Point, p2: &Point, q2: &Point) -> (Point, Point) {
    let a = p1[0];
    let b = q1[0] - p1[0];
    let c = p2[0];
    let d = q2[0] - p2[0];

    let e = p1[1];
    let f = q1[1] - p1[1];
    let g = p2[1];
    let h = q2[1] - p2[1];

    println!("{:?}", (a, b, c, d, e, f, g, h));
    println!("{} + {}t1 = {} + {}t2", a, b, c, d);
    println!("{} + {}t1 = {} + {}t2", e, f, g, h);

    let t2 = (b * (g - e) - f * (c - a)) / (d * f - b * h);
    let t1 = (c - a + d * t2) / b;
    println!("{:?}", (t1, t2));

    // r1(t1) = p1 + t(q1 - p1)
    let r1 = add(&[p1.clone(), (*mul(t1, &sub(q1, p1))).to_vec()]);
    // r2(t2) = p2 + t(q2 - p2)
    let r2 = add(&[p2.clone(), (*mul(t2, &sub(q2, p2))).to_vec()]);

    (r1, r2)
}

fn mul(a: f64, v: &Point) -> Point {
    v.iter().map(|x| a * x).collect()
}

fn add(vs: &[Point]) -> Point {
    let mut sum = vec![0.0; vs[0].len()];
    for v in vs {
        for i in 0..v.len() {
            sum[i] += v[i];
        }
    }
    sum
}

fn sub(v1: &Point, v2: &Point) -> Point {
    add(&[v1.clone(), mul(-1.0, v2)])
}

pub fn vectest() {
    let point1: Point = vec![1.0, 2.0];
    let point2: Point = vec![11.0, 5.0];

    let point3: Point = vec![5.0, 6.0];
    let point4: Point = vec![7.0, 8.0];

    let intersection_point = find_intersection_point(&point1, &point2, &point3, &point4);
    println!("{:?}", intersection_point);
}

