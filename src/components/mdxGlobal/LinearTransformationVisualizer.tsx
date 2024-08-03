import { Coordinates, Mafs, Transform, useMovablePoint, useStopwatch, useTransformContext, vec, Vector } from "mafs";
import { color } from "@site/src/utilities/colors";
import { easeInOutCubic } from "js-easing-functions";
import { useEffect, useState } from "react";

export type LinearTransformationVisualizerProps = {
    from?: LinearTransformation;
    to: LinearTransformation;
    transformedItems?: React.ReactNode;
    children?: React.ReactNode;
    mafsProps?: React.ComponentProps<typeof Mafs>;

    onTChange?: (T: number) => void;
};

export type LinearTransformation = {
    ihat: vec.Vector2;
    jhat: vec.Vector2;
};

const LINEAR_TRANSFORMATION_DEFAULT: LinearTransformation = {
    ihat: [1, 0],
    jhat: [0, 1],
};

export default function LinearTransformationVisualizer({
    from = LINEAR_TRANSFORMATION_DEFAULT,
    to,
    mafsProps,
    transformedItems,
    children,

    onTChange,
}: LinearTransformationVisualizerProps) {
    const { time, start, stop } = useStopwatch({ endTime: 2 });
    const T = easeInOutCubic(time, 0, 1, 2);
    const ihat = vec.lerp(from.ihat, to.ihat, T);
    const jhat = vec.lerp(from.jhat, to.jhat, T);

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

    const mafsMatrix: vec.Matrix = [ihat[0], jhat[0], 0, ihat[1], jhat[1], 0];
    const svgMatrix = `matrix(${ihat[0]} ${-ihat[1]} ${jhat[0]} ${-jhat[1]} 0 0)`;

    console.log({
        ihat,
        jhat,
        mafsMatrix,
        svgMatrix,
        evaluatedIHat: vec.transform([1, 0], mafsMatrix),
    });

    return (
        <div className="card">
            <div className="card__body">
                <Mafs {...mafsProps}>
                    <Coordinates.Cartesian />
                    <g transform={svgMatrix}>
                        <g
                            style={
                                {
                                    "--mafs-line-color": "#A0A0A0",
                                } as React.CSSProperties
                            }
                        >
                            <Coordinates.Cartesian
                                xAxis={{
                                    labels: false,
                                }}
                                yAxis={{
                                    labels: false,
                                }}
                            />
                        </g>
                    </g>
                    <Transform matrix={mafsMatrix}>{transformedItems}</Transform>
                    <Vector tail={[0, 0]} tip={ihat} color={color("blue")} />
                    <Vector tail={[0, 0]} tip={jhat} color={color("yellow")} />
                    {children}
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
