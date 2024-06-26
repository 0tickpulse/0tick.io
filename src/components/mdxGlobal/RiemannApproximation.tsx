import { Plot, Polygon, Theme } from "mafs";
import range from "lodash/range";
import { matches } from "lodash";

export type RiemannApproximationProps = {
    f?: (x: number) => number;
    lb?: number;
    ub?: number;
    n?: number;
    type?: "left" | "right" | "middle" | "trapezoidal";
    color?: string;
};

type Rectangle = {
    polygon: [number, number][];
    area: number;
}

export function RiemannApproximation({
    f = (x) => x,
    lb = 0,
    ub = 5,
    n = 5,
    type = "left",
    color,
}: RiemannApproximationProps) {
    const dx = (ub - lb) / n;
    const rectangles: Rectangle[] = range(
        lb,
        ub,
        dx
    ).map((x) => {
        let y: number;
        switch (type) {
            case "left":
                y = f(x);
                break;
            case "right":
                y = f(x + dx);
                break;
            case "middle":
                y = f(x + dx / 2);
                break;
            case "trapezoidal":
                y = (f(x) + f(x + dx)) / 2;
                break;
        }
        let area: number;
        let polygon: [number, number][] = [
            [x, 0],
            [x + dx, 0],
            [x + dx, y],
            [x, y],
        ];
        area = dx * y;
        if (type === "trapezoidal") {
            polygon = [
                [x, 0],
                [x + dx, 0],
                [x + dx, f(x + dx)],
                [x, f(x)],
            ];
            area = dx * (f(x) + f(x + dx)) / 2;
        }
        return {
            polygon,
            area: dx * y,
        };
    });

    return <>
        <Plot.OfX y={f} color={color} />
        {rectangles.map(({ polygon }, i) => (
            <Polygon key={i} points={polygon} color={color} />
        ))}
    </>;
}
