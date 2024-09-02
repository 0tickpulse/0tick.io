import { range } from "lodash";
import { useStopwatch, Mafs, Coordinates, Plot, Point, vec } from "mafs";
import React, { useState, useEffect } from "react";
import { color, getColorFromMagnitude, gradient } from "@site/src/utilities/colors";

export namespace DivergenceVisualization {
    export type Props = {
        f: (point: vec.Vector2) => vec.Vector2;

        mafsNodes?: React.ReactNode;
        mafsProps?: React.ComponentProps<typeof Mafs>;
        vectorFieldProps?: React.ComponentProps<typeof Plot.VectorField>;

        /**
         * The sources of the vector field. More points will be added over time here.
         */
        sources?: vec.Vector2[];

        /**
         * The range of points to sample; (min, max, step)
         */
        xRange?: [number, number, number];
        yRange?: [number, number, number];
    };
}

export default function DivergenceVisualization({
    f = ([x, y]) => [1, Math.sin(x)],
    mafsNodes,
    mafsProps,
    vectorFieldProps,
    sources = [],

    xRange = [-20, 20, 1],
    yRange = [-20, 20, 1],
}: DivergenceVisualization.Props) {
    const initialPoints = range(...xRange)
        .map((x) => range(...yRange).map((y) => [x, y]))
        .flat();
    const [points, setPoints] = useState(initialPoints);

    const { time, start, stop } = useStopwatch();
    const [hasStarted, setHasStarted] = useState(false);
    function startStop() {
        hasStarted ? stop() : start();
        setHasStarted(!hasStarted);
        if (!hasStarted) {
            setPoints(initialPoints);
        }
    }

    const frameDuration = 1 / 60; // seconds
    const curFrame = Math.floor(time / frameDuration);
    const iterate = () => {
        if (!hasStarted) {
            setPoints(initialPoints);
            return;
        }
        setPoints((points) => points.map(([x, y]) => [x + f([x, y])[0] * frameDuration, y + f([x, y])[1] * frameDuration]));

        // every 1/2 second, add a new point in the sources
        if (curFrame % 30 === 0) {
            setPoints((points) => [...points, ...sources]);
        }
    };

    // run the iteration every frame
    useEffect(() => {
        iterate();
    }, [curFrame]);

    return (
        <div className="card">
            <div className="card__body">
                <Mafs {...mafsProps}>
                    <Coordinates.Cartesian />
                    <Plot.VectorField xy={f} step={1} {...vectorFieldProps} />
                    {points.map(([x, y], i) => (
                        <Point x={x} y={y} key={i} color={color("blue")} />
                    ))}
                    {mafsNodes}
                </Mafs>
            </div>
            <div className="card__footer">
                <button className={`button button--secondary button--block ${hasStarted ? "button--danger" : "button--success"}`} onClick={startStop}>
                    {hasStarted ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    );
}
