import { Coordinates, Mafs, Plot, Transform, useMovablePoint, useStopwatch, useTransformContext, vec, Vector } from "mafs";
import { color } from "@site/src/utilities/colors";
import { easeInOutCubic } from "js-easing-functions";
import { Fragment, useEffect, useState } from "react";
import { range } from "lodash";

export type NonlinearTransformVisualizerProps = {
    fn: (x: number, y: number) => [number, number];
    children?: React.ReactNode;
    mafsProps?: React.ComponentProps<typeof Mafs>;
    plotProps?: React.ComponentProps<typeof Plot.Parametric> | ((point: vec.Vector2) => React.ComponentProps<typeof Plot.Parametric>);

    xGridRange?: number[];
    yGridRange?: number[];

    lerpedItems?: (lerpedFn: (x: number, y: number) => vec.Vector2) => React.ReactNode;

    onTChange?: (T: number) => void;
};

const FN_DEFAULT: NonlinearTransformVisualizerProps["fn"] = (x, y) => [x, y];

export default function NonlinearTransformationVisualizer({
    fn = FN_DEFAULT,
    mafsProps,
    plotProps,
    children,

    xGridRange = range(-10, 11, 1),
    yGridRange = range(-10, 11, 1),

    lerpedItems,

    onTChange,
}: NonlinearTransformVisualizerProps) {
    const { time, start, stop } = useStopwatch({ endTime: 2 });
    const T = easeInOutCubic(time, 0, 1, 2);
    const lerp = (a: number, b: number, t: number) => (1 - t) * a + t * b;
    const lerpedFn = (x: number, y: number): vec.Vector2 => {
        const t = x,
            s = y;
        const [x1, y1] = [x, y];
        const [x2, y2] = fn(t, s);
        return [lerp(x1, x2, T), lerp(y1, y2, T)];
    };

    const [hasStarted, setHasStarted] = useState(false);
    const [hasTouched, setHasTouched] = useState(false);
    function startStop() {
        setHasTouched(true);
        if (hasStarted) {
            stop();
        } else {
            start();
        }
        setHasStarted(!hasStarted);
    }

    useEffect(() => {
        setTimeout(() => {
            if (hasTouched && !hasStarted) {
                startStop();
            }
        }, 1000);
    }, []);

    useEffect(() => {
        if (onTChange) {
            onTChange(T);
        }
    }, [T]);
    return (
        <div className="card">
            <div className="card__body">
                <Mafs {...mafsProps}>
                    <Coordinates.Cartesian />
                    {xGridRange.map((x) => {
                        return (
                            <Fragment key={x}>
                                <Plot.Parametric
                                    t={[-10, 10]}
                                    xy={(t) => {
                                        // fixed x, t varies
                                        return lerpedFn(x, t);
                                    }}
                                    color={color("blue")}
                                    {...(typeof plotProps === "function" ? plotProps([x, 0]) : plotProps)}
                                />
                            </Fragment>
                        );
                    })}
                    {yGridRange.map((y) => {
                        return (
                            <Fragment key={y}>
                                <Plot.Parametric
                                    t={[-10, 10]}
                                    xy={(t) => {
                                        // fixed y, t varies
                                        return lerpedFn(t, y);
                                    }}
                                    color={color("blue")}
                                    {...(typeof plotProps === "function" ? plotProps([0, y]) : plotProps)}
                                />
                            </Fragment>
                        );
                    })}
                    {children}
                    {lerpedItems && lerpedItems(lerpedFn)}
                </Mafs>
            </div>
            <div className="card__footer">
                <button className={`button button--secondary button--block ${hasStarted ? "button--danger" : "button--success"}`} onClick={startStop}>
                    {hasStarted ? "Reset" : "Start"}
                </button>
            </div>
        </div>
    );
}
