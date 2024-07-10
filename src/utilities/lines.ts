import { vec } from "mafs";

/**
 * Creates a bezier curve from a start point to an end point with a control point.
 *
 * @param start The start point of the curve.
 * @param end The end point of the curve.
 * @param control The control point of the curve.
 * @param t The time value of the curve.
 * @returns
 */
export function bezierCurve(start: vec.Vector2, end: vec.Vector2, control: vec.Vector2, t: number): vec.Vector2 {
    const [x0, y0] = start;
    const [x1, y1] = control;
    const [x2, y2] = end;
    const x = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * x1 + t ** 2 * x2;
    const y = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * y1 + t ** 2 * y2;
    return [x, y];
}

/**
 * Gives the coordinates of the label of the point, useful for diagrams.
 * The label is placed on the left or right of the line.
 * This is done by taking the midpoint of the line and moving it perpendicular to the line.
 *
 * @param from
 * @param to
 * @param direction
 */
export function lineLabel(
    from: vec.Vector2,
    to: vec.Vector2,
    direction: "left" | "right",
    { sideOffset = 0.3, forwardOffset = 0 }: Partial<Record<"sideOffset" | "forwardOffset", number>> = {}
): vec.Vector2 {
    const vector = vec.sub(to, from);
    const perpendicular = vec.normalize([vector[1], -vector[0]]);

    const sideVec = vec.scale(perpendicular, (direction === "left" ? -1 : 1) * sideOffset);
    const forwardVec = vec.add(vec.scale(vector, 0.5), vec.scale(vec.withMag(vector, 1), forwardOffset));

    return vec.add(vec.add(from, forwardVec), sideVec);
}
