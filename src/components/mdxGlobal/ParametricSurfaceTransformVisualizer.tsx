import CustomMathbox from "@site/src/components/mdxGlobal/CustomMathbox";
import { color } from "@site/src/utilities/colors";
import { easeInOutCubic } from "js-easing-functions";
import { useStopwatch, vec } from "mafs";
import * as MB from "mathbox-react";
import { useState } from "react";

type ParametricSurfaceTarnsformVisualizerProps = {
    showPoint?: vec.Vector2 | null;
    showLines?: ("x" | "y")[];
    showNudge?: boolean;
    fn: (x: number, y: number) => [number, number, number];
};

export default function ParametricSurfaceTarnsformVisualizer({
    showPoint = null,
    showLines = [],
    showNudge = false,
    fn = (x: number, y: number) => {
        const t = x;
        const s = y;
        return [t ** 2 - s ** 2, s * t, t * s ** 2 - s * t ** 2];
    },
}: ParametricSurfaceTarnsformVisualizerProps) {
    const { time, start, stop } = useStopwatch({ endTime: 2 });
    const T = easeInOutCubic(time, 0, 1, 2);

    const [hasStarted, setHasStarted] = useState(false);
    const [hasTouched, setHasTouched] = useState(false);

    const lerp = (a: number, b: number, t: number) => (1 - t) * a + t * b;

    /** Returns x, z, y */
    const lerpedFn = (x: number, y: number) => {
        const t = x,
            s = y;
        const [x1, y1, z1] = [x, y, 0];
        const [x2, y2, z2] = fn(t, s);
        return [lerp(x1, x2, T), lerp(z1, z2, T), lerp(y1, y2, T)];
    };
    const lerpedPoint = showPoint ? lerpedFn(...showPoint) : null;

    function startStop() {
        setHasTouched(true);
        if (hasStarted) {
            stop();
        } else {
            start();
        }
        setHasStarted(!hasStarted);
    }

    return (
        <div className="card">
            <div className="card__body">
                <CustomMathbox>
                    <MB.Cartesian scale={[0.1, 0.1, 0.1]}>
                        <MB.Axis axis="x" range={[-10, 10]} color={color("blue")} />
                        <MB.Axis axis="y" range={[-10, 10]} color={color("green")} />
                        <MB.Axis axis="z" range={[-10, 10]} color={color("yellow")} />
                        <MB.Area
                            id="graph"
                            axes="xz"
                            expr={(emit, x, z) => {
                                // const s = x, t = z;
                                // const newX = t ** 2 + s;
                                // const newY = 2 * t - s ** 2;
                                // const newZ = 3 * (s ** 2) * t - 2 * s * (t ** 2);
                                // emit(newX, newZ, newY);
                                const [newX, newZ, newY] = lerpedFn(x, z);
                                emit(newX, newZ, newY);
                            }}
                            width={64}
                            height={64}
                            channels={3}
                            rangeX={[0, 10]}
                            rangeY={[0, 10]}
                        />
                        <MB.Surface points="#graph" color={"#808080"} lineX={true} lineY={true} opacity={0.75} zBias={-1} />

                        {lerpedPoint && (
                            <>
                                <MB.Array items={1} id="point" data={[lerpedPoint]} channels={3} />
                                <MB.Point points="#point" color={color("blue")} size={10} />
                                <MB.Array items={2} id="point_vec" data={[[0, 0, 0], lerpedPoint]} channels={3} />
                                <MB.Vector end={true} points="#point_vec" color={color("blue")} />
                                {showLines.map((l) => (
                                    <MB.Group key={l}>
                                        <MB.Interval
                                            id={`line_${l}`}
                                            expr={(emit, i, time, delta) => {
                                                const x = l === "x" ? i : showPoint[0];
                                                const y = l === "y" ? i : showPoint[1];
                                                const [newX, newZ, newY] = lerpedFn(x, y);
                                                emit(newX, newZ, newY);
                                            }}
                                            width={512}
                                            range={[-10, 10]}
                                            channels={3}
                                        />
                                        <MB.Line points={`#line_${l}`} color={l === "x" ? color("blue") : color("yellow")} width={5} />
                                        {showNudge && (
                                            <>
                                                <MB.Array
                                                    items={2}
                                                    id={`line_vec_${l}`}
                                                    data={[
                                                        lerpedFn(showPoint[0], showPoint[1]),
                                                        l === "x"
                                                            ? lerpedFn(showPoint[0] + 1, showPoint[1])
                                                            : lerpedFn(showPoint[0], showPoint[1] + 1),
                                                    ]}
                                                    channels={3}
                                                />
                                                <MB.Vector end={true} points={`#line_vec_${l}`} color={color("green")} width={5} zBias={2} />
                                            </>
                                        )}
                                    </MB.Group>
                                ))}
                            </>
                        )}
                    </MB.Cartesian>
                </CustomMathbox>
            </div>
            <div className="card__footer">
                <button className={`button button--secondary button--block ${hasStarted ? "button--danger" : "button--success"}`} onClick={startStop}>
                    {hasStarted ? "Reset" : "Start"}
                </button>
            </div>
        </div>
    );
}
