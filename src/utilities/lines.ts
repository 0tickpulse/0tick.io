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
    from: [number, number],
    to: [number, number],
    direction: "left" | "right",
    { sideOffset = 0.3, forwardOffset = 0 }: Partial<Record<"sideOffset" | "forwardOffset", number>> = {}
): [number, number] {
    const [x1, y1] = from;
    const [x2, y2] = to;
    let normalizedDifference = [x2 - x1, y2 - y1];
    const diffLength = Math.sqrt(normalizedDifference[0] ** 2 + normalizedDifference[1] ** 2);
    normalizedDifference = [normalizedDifference[0] / diffLength, normalizedDifference[1] / diffLength];
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx ** 2 + dy ** 2);
    const nx = dy / length;
    const ny = -dx / length;
    const side = direction === "left" ? -1 : 1;
    return [
        midX + nx * side * sideOffset + normalizedDifference[0] * forwardOffset,
        midY + ny * side * sideOffset + normalizedDifference[1] * forwardOffset,
    ];
}
