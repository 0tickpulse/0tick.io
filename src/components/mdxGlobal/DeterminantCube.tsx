import { color } from "@site/src/utilities/colors";
import * as MB from "mathbox-react";
import { ComponentProps } from "react";

type Vector3 = [number, number, number];

export function DeterminantCube({ T, faceProps, idBase }: DeterminantCube.Props) {
    if (!idBase) {
        idBase = Math.random().toString(36).slice(2);
    }
    return (
        <>
            <MB.Array
                data={[
                    [0, 0, 0],
                    [1, 0, 0],
                    [1, 1, 0],
                    [0, 1, 0],
                ].map(T)}
                channels={3}
                items={4}
                id={idBase + "face1"}
            />
            <MB.Face points={`#${idBase}face1`} shaded={true} opacity={3 / 4} color={color("green")} {...faceProps} />
            <MB.Array
                data={[
                    [0, 0, 1],
                    [1, 0, 1],
                    [1, 1, 1],
                    [0, 1, 1],
                ].map(T)}
                channels={3}
                items={4}
                id={idBase + "face2"}
            />
            <MB.Face points={`#${idBase}face2`} shaded={true} opacity={3 / 4} color={color("green")} {...faceProps} />
            <MB.Array
                data={[
                    [0, 0, 0],
                    [1, 0, 0],
                    [1, 0, 1],
                    [0, 0, 1],
                ].map(T)}
                channels={3}
                items={4}
                id={idBase + "face3"}
            />
            <MB.Face points={`#${idBase}face3`} shaded={true} opacity={3 / 4} color={color("green")} {...faceProps} />
            <MB.Array
                data={[
                    [0, 1, 0],
                    [1, 1, 0],
                    [1, 1, 1],
                    [0, 1, 1],
                ].map(T)}
                channels={3}
                items={4}
                id={idBase + "face4"}
            />
            <MB.Face points={`#${idBase}face4`} shaded={true} opacity={3 / 4} color={color("green")} {...faceProps} />
            <MB.Array
                data={[
                    [0, 0, 0],
                    [0, 1, 0],
                    [0, 1, 1],
                    [0, 0, 1],
                ].map(T)}
                channels={3}
                items={4}
                id={idBase + "face5"}
            />
            <MB.Face points={`#${idBase}face5`} shaded={true} opacity={3 / 4} color={color("green")} {...faceProps} />
            <MB.Array
                data={[
                    [1, 0, 0],
                    [1, 1, 0],
                    [1, 1, 1],
                    [1, 0, 1],
                ].map(T)}
                channels={3}
                items={4}
                id={idBase + "face6"}
            />
            <MB.Face points={`#${idBase}face6`} shaded={true} opacity={3 / 4} color={color("green")} {...faceProps} />
        </>
    );
}

export namespace DeterminantCube {
    export type Props = {
        T: (v: Vector3) => Vector3;
        faceProps?: ComponentProps<typeof MB.Face>;

        /**
         * The base ID for the cube. This will be used to generate the IDs for the vertices.
         * Must be unique. If left undefined, it will randomly generate one.
         */
        idBase?: string;
    };
}
