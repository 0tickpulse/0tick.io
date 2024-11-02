import { Coordinates, Mafs, Transform, useMovablePoint, useStopwatch, useTransformContext, vec, Vector } from "mafs";
import { color, gradient } from "@site/src/utilities/colors";
import { easeInOutCubic } from "js-easing-functions";
import { useEffect, useState } from "react";
import CustomMathbox from "./CustomMathbox";
import * as MB from "mathbox-react";
import { range } from "lodash";

// some helper functions. will probably move to a utility file later
type Vector3 = [number, number, number];
type Matrix3 = [Vector3, Vector3, Vector3];
function equals(a: Vector3, b: Vector3) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function mag(v: Vector3) {
    return Math.sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);
}
function sub(a: Vector3, b: Vector3): Vector3 {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
function add(a: Vector3, b: Vector3): Vector3 {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
function withMag(v: Vector3, m: number): Vector3 {
    const n = mag(v);
    return [(v[0] * m) / n, (v[1] * m) / n, (v[2] * m) / n];
}
function lerp(a: Vector3, b: Vector3, t: number) {
    const d = sub(b, a);
    const m = mag(d);
    return add(a, withMag(d, m * t));
}
function matMul(m: Matrix3, v: Vector3): Vector3 {
    return [
        m[0][0] * v[0] + m[0][1] * v[1] + m[0][2] * v[2],
        m[1][0] * v[0] + m[1][1] * v[1] + m[1][2] * v[2],
        m[2][0] * v[0] + m[2][1] * v[1] + m[2][2] * v[2],
    ];
}

export type LinearTransformationVisualizerProps = {
    from?: LinearTransformation;
    to: LinearTransformation;
    transformedItems?: (T: (v: Vector3) => Vector3) => React.ReactNode;
    children?: React.ReactNode;
    cartesianProps?: React.ComponentProps<typeof MB.Cartesian>;

    showGrid?: boolean;

    onTChange?: (T: number) => void;
};

export type LinearTransformation = {
    ihat: Vector3;
    jhat: Vector3;
    khat: Vector3;
};

const LINEAR_TRANSFORMATION_DEFAULT: LinearTransformation = {
    ihat: [1, 0, 0],
    jhat: [0, 1, 0],
    khat: [0, 0, 1],
}; // Identity

export default function LinearTransformationVisualizer({
    from = LINEAR_TRANSFORMATION_DEFAULT,
    to,
    transformedItems,
    children,
    cartesianProps,
    showGrid = true,

    onTChange,
}: LinearTransformationVisualizerProps) {
    const { time, start, stop } = useStopwatch({ endTime: 2 });
    const T = easeInOutCubic(time, 0, 1, 2);
    const ihat = equals(from.ihat, to.ihat) ? from.ihat : lerp(from.ihat, to.ihat, T);
    const jhat = equals(from.jhat, to.jhat) ? from.jhat : lerp(from.jhat, to.jhat, T);
    const khat = equals(from.khat, to.khat) ? from.khat : lerp(from.khat, to.khat, T);

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

    const transformFn = (v: Vector3) => matMul([ihat, jhat, khat], v);
    const matrix = [
        ihat[0],
        jhat[0],
        khat[0],
        0,
        ihat[1],
        jhat[1],
        khat[1],
        0,
        ihat[2],
        jhat[2],
        khat[2],
        0,
        0, 0, 0, 1
    ]

    return (
        <div className="card">
            <div className="card__body">
                <CustomMathbox>
                    <MB.Cartesian scale={[0.2, 0.2, 0.2]} {...cartesianProps}>
                        <MB.Axis axis="x" range={[-5, 5]} color="white" />
                        <MB.Axis axis="y" range={[-5, 5]} color="white" />
                        <MB.Axis axis="z" range={[-5, 5]} color="white" />

                        <MB.Transform matrix={matrix}>
                            {showGrid && (
                                <>
                                    {range(-5, 6).map((x) => (
                                        <>
                                            <MB.Grid
                                                axes="yz"
                                                rangeX={[-5, 6]}
                                                rangeY={[-5, 6]}
                                                origin={[x, 0, 0, 0]}
                                                color={gradient(color("red"), color("blue"), (x + 5) / 11)}
                                            />
                                        </>
                                    ))}
                                    {range(-5, 6).map((y) => (
                                        <>
                                            <MB.Grid
                                                axes="xz"
                                                rangeX={[-5, 6]}
                                                rangeY={[-5, 6]}
                                                origin={[0, y, 0, 0]}
                                                color={gradient(color("red"), color("blue"), (y + 5) / 11)}
                                            />
                                        </>
                                    ))}
                                    {range(-5, 6).map((z) => (
                                        <>
                                            <MB.Grid
                                                axes="xy"
                                                rangeX={[-5, 6]}
                                                rangeY={[-5, 6]}
                                                origin={[0, 0, z, 0]}
                                                color={gradient(color("red"), color("blue"), (z + 5) / 11)}
                                            />
                                        </>
                                    ))}
                                </>
                            )}
                            <MB.Array
                                id="ihat"
                                channels={3}
                                items={2}
                                data={[
                                    [0, 0, 0],
                                    [1, 0, 0],
                                ]}
                            />
                            <MB.Array
                                id="jhat"
                                channels={3}
                                items={2}
                                data={[
                                    [0, 0, 0],
                                    [0, 1, 0],
                                ]}
                            />
                            <MB.Array
                                id="khat"
                                channels={3}
                                items={2}
                                data={[
                                    [0, 0, 0],
                                    [0, 0, 1],
                                ]}
                            />
                            <MB.Vector points="#ihat" end={true} width={4} color={color("blue")} />
                            <MB.Vector points="#jhat" end={true} width={4} color={color("yellow")} />
                            <MB.Vector points="#khat" end={true} width={4} color={color("green")} />
                            {children}
                        </MB.Transform>

                        {transformedItems && transformedItems(transformFn)}
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
