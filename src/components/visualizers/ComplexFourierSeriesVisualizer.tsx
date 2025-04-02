import { Circle, Mafs, Plot, Point, useStopwatch, vec, Vector } from "mafs";
import { Fragment, useMemo, useState } from "react";
import { color } from "@site/src/utilities/colors";
import * as math from "mathjs";
import { svgPathProperties } from "svg-path-properties";
import { LEAF, MUSIC_REST, STAR } from "./paths/paths";
import { clamp } from "lodash";
import { ControlPanel } from "@site/src/components/mdxGlobal/controlPanel/ControlPanel";
import { Pills } from "@site/src/components/mdxGlobal/controlPanel/Pills";
import { SliderInput } from "@site/src/components/mdxGlobal/controlPanel/SliderInput";

// Utility function to create a parametric function from an SVG path
function createParametricFunction(pathD: string): (t: number) => vec.Vector2 {
    // Create the path properties instance
    const properties = new svgPathProperties(pathD);
    const totalLength = properties.getTotalLength();

    // Ensure that t is normalized [0,1]
    return (t: number) => {
        const clampedT = clamp(t, 0, 1);
        const lengthAtT = clampedT * totalLength;
        const point = properties.getPointAtLength(lengthAtT);
        return [point.x / 5, point.y / 5];
    };
}

/**
 * Simple duct-tape numerical integration. This is not the best way to do this.
 */
function complexIntegrate(fn: (t: number) => math.Complex, start: number, stop: number, steps: number): math.Complex {
    let sum = math.complex(0, 0);
    const dt = (stop - start) / steps;
    for (let i = 0; i < steps; i++) {
        const t = start + i * dt;
        try {
            sum = math.add(sum, math.multiply(fn(t), dt)) as math.Complex;
        } catch (error) {
            console.error("Error integrating", error, {
                t,
                fn: fn(t),
            });
        }
    }
    return sum;
}

function complexToCartesian(c: math.Complex): vec.Vector2 {
    return [c.re, c.im];
}

function getFrequencies(N: number): number[] {
    // If N is even, we want to return an array of the form [0, -1, 1, -2, 2, ..., -N/2] (without N/2)
    // e.g. if N = 4, we want [-2, -1, 0, 1]
    // If N is odd, we want to return an array of the form [0, -1, 1, -2, 2, ..., -floor(N/2), floor(N/2)]
    // e.g. if N = 5, we want [-2, -1, 0, 1, 2]
    // Must return in this order!
    const result: number[] = [];
    if (N % 2 === 0) {
        result.push(0);
        for (let i = 1; i <= N / 2; i++) {
            result.push(-i);
            if (i !== N / 2) result.push(i);
        }
    } else {
        result.push(0);
        for (let i = 1; i <= Math.floor(N / 2); i++) {
            result.push(-i);
            result.push(i);
        }
    }
    return result;
}

const fn = (t: number): math.Complex =>
    math.complex(
        Math.cos(t) + 2 * Math.cos(2 * t) + 3 * Math.cos(3 * t) + t * (t - 2 * Math.PI),
        Math.sin(t) + 3 * Math.sin(2 * t) + 2 * Math.sin(3 * t),
    );

const paths = {
    star: STAR,
    musicRest: MUSIC_REST,
    leaf: LEAF,
} as const;

export function ComplexFourierSeriesVisualizer({}: ComplexFourierSeriesVisualizer.Props) {
    const { time, start, stop } = useStopwatch();

    const [hasStarted, setHasStarted] = useState(false);

    function startStop() {
        hasStarted ? stop() : start();
        setHasStarted(!hasStarted);
    }

    const [autoPan, setAutoPan] = useState(false);

    const [pathName, setPathName] = useState<keyof typeof paths>("star");
    const pathFn = useMemo(() => createParametricFunction(paths[pathName]), [pathName]);
    const [period, setPeriod] = useState(7);
    // path can be written as a sum of complex exponentials.
    // Below gives the Fourier coefficients for the above function.
    // Mathematically, the coefficients are given by:
    // c_n = 1/period * integral(path(t) * e^(-i * 2 * pi * n * t / period), t, 0, period)
    // n ranges from -N/2 to N/2
    const coeff = (n: number): math.Complex => {
        const integrand = (t: number): math.Complex => {
            const value = math.complex(...pathFn(t / period));
            const exp = math.complex({ r: 1, phi: (-2 * Math.PI * n * t) / period });
            return math.multiply(value, exp) as math.Complex;
        };
        return math.divide(complexIntegrate(integrand, 0, period, 1000), period) as math.Complex;
    };

    const [N, setN] = useState(20);
    const frequencies = getFrequencies(N);
    const calculatedCoefficients = useMemo(() => Object.fromEntries(frequencies.map((n) => [n, coeff(n)])), [N, pathFn]);
    const getPoints = (t: number): math.Complex[] =>
        frequencies.map((i) => {
            const n = i;
            const result = math.multiply(calculatedCoefficients[n], math.complex({ r: 1, phi: (2 * Math.PI * n * t) / period })) as math.Complex;
            return result;
        });
    const getPartialSums = (t: number): math.Complex[] => {
        const ps = [math.complex(0, 0)];
        const points = getPoints(t);
        for (let i = 0; i < N; i++) {
            const prev = ps[i];
            ps.push(math.add(prev, points[i]) as math.Complex);
        }
        return ps;
    };
    const points = useMemo(() => getPoints(time), [pathFn, time, N]);
    const partialSums = useMemo(() => getPartialSums(time), [pathFn, time, N]);
    const finalPoint = complexToCartesian(partialSums[N]);

    return (
        <div className="card">
            <div className="card__body">
                <Mafs
                    viewBox={
                        autoPan
                            ? { x: [finalPoint[0] - 0.5, finalPoint[0] + 0.5], y: [finalPoint[1] - 0.5, finalPoint[1] + 0.5] }
                            : { x: [-15, 15], y: [-15, 15] }
                    }
                    zoom={true}
                >
                    {points.map((point, i) => (
                        <Fragment key={i}>
                            <Circle
                                center={complexToCartesian(partialSums[i])}
                                radius={point.toPolar().r}
                                fillOpacity={0}
                                strokeStyle="dashed"
                                strokeOpacity={0.5}
                                weight={0.5}
                            />
                            <Vector
                                tail={complexToCartesian(partialSums[i])}
                                tip={complexToCartesian(math.add(partialSums[i], point) as math.Complex)}
                                opacity={0.5}
                                weight={point.toPolar().r / 2.5}
                            />
                        </Fragment>
                    ))}
                    <Plot.Parametric xy={(t) => pathFn(t)} t={[0, period]} opacity={0.35} />
                    <Plot.Parametric
                        xy={(t) => {
                            const sum = getPartialSums(t)[N];
                            return [sum.re, sum.im];
                        }}
                        t={[0, period]}
                        color={color("pink")}
                    />
                    <Point x={finalPoint[0]} y={finalPoint[1]} color={color("pink")} />
                </Mafs>
            </div>
            <div className="card__footer">
                <ControlPanel>
                    <Pills
                        label="Select Path"
                        options={{
                            star: "Star",
                            musicRest: "Music Rest",
                            leaf: "Leaf",
                        }}
                        value={pathName}
                        onChange={(value) => {
                            setPathName(value as keyof typeof paths);
                        }}
                    />
                    <Pills
                        label="View"
                        options={{
                            true: "Local",
                            false: "Global",
                        }}
                        value={String(autoPan)}
                        onChange={(value) => {
                            setAutoPan(value === "true");
                        }}
                    />
                    <SliderInput latex label="N" value={N} onChange={setN} min={1} max={500} step={1} />
                    <SliderInput label="Speed" value={1 / period} onChange={(speed) => setPeriod(1 / speed)} min={0.01} max={0.5} step={0.01} />
                </ControlPanel>
                <button className={`button button--secondary button--block ${hasStarted ? "button--danger" : "button--success"}`} onClick={startStop}>
                    {hasStarted ? "Stop" : "Start"}
                </button>
                <div>
                    <p>Warning: High values of N may cause the visualization to slow down.</p>
                </div>
            </div>
        </div>
    );
}

export namespace ComplexFourierSeriesVisualizer {
    export type Props = {};
}
