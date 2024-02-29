/**
 * Creates a bezier curve from a start point to an end point with a control point.
 *
 * @param start The start point of the curve.
 * @param end The end point of the curve.
 * @param control The control point of the curve.
 * @param t The time value of the curve.
 * @returns
 */
export function bezierCurve(start: [number, number], end: [number, number], control: [number, number], t: number): [number, number] {
    const [x0, y0] = start;
    const [x1, y1] = control;
    const [x2, y2] = end;
    const x = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * x1 + t ** 2 * x2;
    const y = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * y1 + t ** 2 * y2;
    return [x, y];
}
