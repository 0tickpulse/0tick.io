import { useMovablePoint, Mafs, Coordinates, Plot, Transform, LaTeX, Line, Vector, Theme } from "mafs";
import MathEquation from "@site/src/components/Math";

export function DerivativeFromLimits({ yvar = "y", xvar = "x" }: Partial<Record<"yvar" | "xvar", string>> = {}) {
    const f = (x) => 1 / 5 * Math.pow(x, 2);

    const x1 = useMovablePoint([3, f(3)], {
        constrain: ([x, y]) => [x, f(x)],
    });
    const x2 = useMovablePoint([4, f(4)], {
        constrain: ([x, y]) => [x, f(x)],
    });

    const tangentEqn = (x) => f(x1.point[0]) + (x - x1.point[0]) * (f(x2.point[0]) - f(x1.point[0])) / (x2.point[0] - x1.point[0]);

    return (
        <>
            <Mafs
                viewBox={{
                    x: [0, 8],
                    y: [-1, 6],
                }}
            >
                <Coordinates.Cartesian />
                <Plot.OfX y={(x) => 1 / 5 * Math.pow(x, 2)} />
                <Plot.OfX y={tangentEqn} />
                {x1.element}
                {x2.element}

                <Transform translate={[-0.75, 0.75]}>
                    <LaTeX
                        at={x1.point}
                        tex={`p_1 = (${x1.point[0].toFixed(2)}, ${x1.point[1].toFixed(2)})`}
                    />
                    <LaTeX
                        at={x2.point}
                        tex={`p_2 = (${x2.point[0].toFixed(2)}, ${x2.point[1].toFixed(2)})`}
                    />
                </Transform>

                <Line.Segment
                    point1={x1.point}
                    point2={[x2.point[0], x1.point[1]]}
                />
                <Line.Segment
                    point1={[x2.point[0], x1.point[1]]}
                    point2={x2.point}
                />
                <Line.Segment
                    point1={[x1.point[0], 0]}
                    point2={x1.point}
                    style="dashed"
                />
                <Line.Segment
                    point1={[x2.point[0], 0]}
                    point2={x2.point}
                    style="dashed"
                />

                <Vector
                    tail={[x1.point[0], 0]}
                    tip={[x2.point[0], 0]}
                    color={Theme.green}
                />
                <LaTeX
                    tex={String.raw`\Delta ${xvar} = ${(x2.point[0] - x1.point[0]).toFixed(2)}`}
                    at={[x1.point[0] + (x2.point[0] - x1.point[0]) / 2, -0.5]}
                />
                <Vector
                    tail={[x2.point[0], x1.point[1]]}
                    tip={x2.point}
                    color={Theme.yellow}
                />
                <LaTeX
                    tex={String.raw`\Delta ${yvar} = ${(x2.point[1] - x1.point[1]).toFixed(2)}`}
                    at={[x2.point[0] + 1, x1.point[1] + (x2.point[1] - x1.point[1]) / 2]}
                />
            </Mafs>
            <MathEquation>{String.raw`
                \begin{split}
                    \text{Slope} &= \frac{\Delta ${yvar}}{\Delta ${xvar}} \\
                    &= \frac{${x2.point[1].toFixed(2)} - ${x1.point[1].toFixed(2)}}{${x2.point[0].toFixed(2)} - ${x1.point[0].toFixed(2)}} \\
                    &= \frac{${(x2.point[1] - x1.point[1]).toFixed(2)}}{${(x2.point[0] - x1.point[0]).toFixed(2)}} \\
                    &= ${((x2.point[1] - x1.point[1]) / (x2.point[0] - x1.point[0])).toFixed(2)}
                \end{split}
            `}</MathEquation>
        </>
    );
}
