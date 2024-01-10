import numeric from "numeric";

type Point = number[];
type IntersectionResult = {
    point: Point | null;
    t1: number;
    t2: number;
};

export function findIntersectionPoint(p1: Point, q1: Point, p2: Point, q2: Point): IntersectionResult {
    const a = p1[0];
    const b = q1[0] - p1[0];
    const c = p2[0];
    const d = q2[0] - p2[0];

    const e = p1[1];
    const f = q1[1] - p1[1];
    const g = p2[1];
    const h = q2[1] - p2[1];

    const t2 = (b * (g - e) - f * (c - a)) / (d * f - b * h);
    const t1 = (c - a + d * t2) / b;

    const r1 = numeric.add(p1, numeric.mul(t1, numeric.sub(q1, p1)));
    const r2 = numeric.add(p2, numeric.mul(t2, numeric.sub(q2, p2)));

    return {
        point: numeric.eq(r1, r2) ? r1 : null,
        t1,
        t2,
    };
}
