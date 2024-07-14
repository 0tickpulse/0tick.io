import { Coordinates, Mafs, Transform, useMovablePoint, useStopwatch, useTransformContext, vec, Vector } from "mafs";
import { color } from "@site/src/utilities/colors";
import { easeInOutCubic } from "js-easing-functions"
import { useEffect, useState } from "react";

export type LinearTransformationVisualizerProps = {
    from?: LinearTransformation;
    to: LinearTransformation;
    children?: React.ReactNode;
};

export type LinearTransformation = {
    ihat: vec.Vector2;
    jhat: vec.Vector2;
};

const LINEAR_TRANSFORMATION_DEFAULT: LinearTransformation = {
    ihat: [1, 0],
    jhat: [0, 1],
};

export default function LinearTransformationVisualizer({ from = LINEAR_TRANSFORMATION_DEFAULT, to, children }: LinearTransformationVisualizerProps) {
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

    const matrix = [ihat[0], -ihat[1], jhat[0], -jhat[1], 0, 0];

    const transformedCartesian = (
        <Coordinates.Cartesian
            xAxis={{
                labels: false,
            }}
            yAxis={{
                labels: false,
            }}
        />
    );

    return (
        <div className="card">
            <div className="card__body">
                <Mafs>
                    <Coordinates.Cartesian />
                    <g
                        transform={`matrix(${matrix.join(" ")})`}
                        style={
                            {
                                "--mafs-line-color": "white",
                            } as React.CSSProperties
                        }
                    >
                        {transformedCartesian}
                    </g>
                    <Vector tail={[0, 0]} tip={ihat} color={color("blue")} />
                    <Vector tail={[0, 0]} tip={jhat} color={color("yellow")} />
                    {children}
                </Mafs>
            </div>
            <div className="card__footer">
                <button
                    className={`button button--secondary button--block ${hasStarted ? "button--danger" : "button--success"}`}
                    onClick={startStop}
                >
                    {hasStarted ? "Reset" : "Start"}
                </button>
            </div>
        </div>
    );
}
