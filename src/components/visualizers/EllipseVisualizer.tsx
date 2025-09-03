import { Circle, Coordinates, Mafs, Plot, Point, Polyline, useStopwatch, vec, Vector } from "mafs";
import { MafsMathJax } from "@site/src/components/mdxGlobal/MafsMathJax";
import { useState, useEffect } from "react";
import { ControlPanel } from "@site/src/components/mdxGlobal/controlPanel/ControlPanel";
import { SliderInput } from "@site/src/components/mdxGlobal/controlPanel/SliderInput";
import { color } from "@site/src/utilities/colors";
import { lineLabel } from "@site/src/utilities/lines";
import { Angle } from "@site/src/components/mdxGlobal/Angle";

export function EllipseVisualizer({}: EllipseVisualizer.Props) {
    const [a, setA] = useState(3);
    const [b, setB] = useState(2);
    const { time, start, stop } = useStopwatch();

    useEffect(() => {
        start();
        return () => stop();
    }, [start, stop]);

    // Check which is larger
    const majorAxis = Math.max(a, b);
    const minorAxis = Math.min(a, b);
    const vertical = a < b; // True if the major axis is vertical
    const e = Math.sqrt(1 - (minorAxis * minorAxis) / (majorAxis * majorAxis)); // eccentricity

    const fociDistance = Math.sqrt(majorAxis * majorAxis - minorAxis * minorAxis);
    const foci1: vec.Vector2 = vertical ? [0, fociDistance] : [fociDistance, 0];
    const foci2: vec.Vector2 = vertical ? [0, -fociDistance] : [-fociDistance, 0];

    const period = 10; // arbitrary
    const meanAngularMotion = (2 * Math.PI) / period; // radians per second
    const meanAnomaly = meanAngularMotion * time; // radians
    const eccentricAnomaly = meanAnomaly + e * Math.sin(meanAnomaly) * (1 + e * Math.cos(meanAnomaly)); // Approximation using Newton's method

    function keplerOrbit(t: number): [number, number] {
        const M = meanAngularMotion * t;
        const E = M + e * Math.sin(M) * (1 + e * Math.cos(M)); // Approximation using Newton's method
        const x = a * Math.cos(E);
        const y = b * Math.sin(E);
        return [x, y];
    }

    const orbitPoint1 = keplerOrbit(time);

    return (
        <div className="card">
            <div className="card__body">
                <Mafs>
                    <Coordinates.Cartesian />
                    <Plot.Parametric
                        t={[0, 2 * Math.PI]}
                        xy={(t) => {
                            return [a * Math.cos(t), b * Math.sin(t)];
                        }}
                    />
                    <Circle center={foci1} radius={0.2} color={color("yellow")} />
                    <Point x={foci2[0]} y={foci2[1]} />
                    {vertical ? (
                        <>
                            <MafsMathJax at={[foci1[0] + 0.3, foci1[1]]} tex="F_1" />
                            <MafsMathJax at={[foci2[0] + 0.3, foci2[1]]} tex="F_2" />
                        </>
                    ) : (
                        <>
                            <MafsMathJax at={[foci1[0], foci1[1] + 0.3]} tex="F_1" />
                            <MafsMathJax at={[foci2[0], foci2[1] + 0.3]} tex="F_2" />
                        </>
                    )}

                    <Polyline points={[foci1, orbitPoint1, foci2]} />
                    <Point x={orbitPoint1[0]} y={orbitPoint1[1]} color={color("blue")} />

                    <MafsMathJax at={lineLabel(orbitPoint1, foci1, "right")} tex="r_1" />
                    <MafsMathJax at={lineLabel(orbitPoint1, foci2, "left")} tex="r_2" />

                    <Vector tail={[-a, -b - 0.3]} tip={[0, -b - 0.3]} />
                    <Vector tip={[-a, -b - 0.3]} tail={[0, -b - 0.3]} />
                    <MafsMathJax at={[-a / 2, -b - 0.6]} tex="a" />

                    <Vector tail={[a + 0.3, -b]} tip={[a + 0.3, 0]} />
                    <Vector tip={[a + 0.3, -b]} tail={[a + 0.3, 0]} />
                    <MafsMathJax at={[a + 0.6, -b / 2]} tex="b" />

                    <Vector tail={foci2} tip={[0, 0]} />
                    <Vector tip={foci2} tail={[0, 0]} />
                    <MafsMathJax at={[foci2[0] / 2, foci2[1] - 0.3]} tex="c = ea" />

                    <Angle
                        at={foci1}
                        fromRad={0}
                        toRad={Math.atan2(orbitPoint1[1] - foci1[1], orbitPoint1[0] - foci1[0])}
                        label="\theta"
                    />
                </Mafs>
            </div>
            <div className="card__footer">
                <ControlPanel>
                    <SliderInput latex label="a" min={0.5} max={5} step={0.1} value={a} onChange={setA} />
                    <SliderInput latex label="b" min={0.5} max={5} step={0.1} value={b} onChange={setB} />
                </ControlPanel>
            </div>
        </div>
    );
}

export namespace EllipseVisualizer {
    export type Props = {};
}
