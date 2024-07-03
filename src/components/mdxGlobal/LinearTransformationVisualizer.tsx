import { Coordinates, Mafs, Transform, useMovablePoint, useTransformContext, vec, Vector } from "mafs";
import { color } from "@site/src/utilities/colors";

export type LinearTransformationVisualizerProps = {
    ihat: vec.Vector2;
    jhat: vec.Vector2;
};

export default function LinearTransformationVisualizer({ ihat = [1, 0], jhat = [0, 1] }: LinearTransformationVisualizerProps) {
    const matrix = [ihat[0], jhat[0], ihat[1], jhat[1], 0, 0];

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
        <>
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
        </>
    );
}
