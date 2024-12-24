import { color } from "@site/src/utilities/colors";
import * as MB from "mathbox-react";
import { ComponentProps } from "react";

type Vector3 = [number, number, number];

export function DeterminantCube({ T, faceProps }: DeterminantCube.Props) {
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
                id="face1"
            />
            <MB.Face points="#face1" shaded={true} opacity={3 / 4} color={color("green")} {...faceProps} />
            <MB.Array
                data={[
                    [0, 0, 1],
                    [1, 0, 1],
                    [1, 1, 1],
                    [0, 1, 1],
                ].map(T)}
                channels={3}
                items={4}
                id="face2"
            />
            <MB.Face points="#face2" shaded={true} opacity={3 / 4} color={color("green")} {...faceProps} />
            <MB.Array
                data={[
                    [0, 0, 0],
                    [1, 0, 0],
                    [1, 0, 1],
                    [0, 0, 1],
                ].map(T)}
                channels={3}
                items={4}
                id="face3"
            />
            <MB.Face points="#face3" shaded={true} opacity={3 / 4} color={color("green")} {...faceProps} />
            <MB.Array
                data={[
                    [0, 1, 0],
                    [1, 1, 0],
                    [1, 1, 1],
                    [0, 1, 1],
                ].map(T)}
                channels={3}
                items={4}
                id="face4"
            />
            <MB.Face points="#face4" shaded={true} opacity={3 / 4} color={color("green")} {...faceProps} />
            <MB.Array
                data={[
                    [0, 0, 0],
                    [0, 1, 0],
                    [0, 1, 1],
                    [0, 0, 1],
                ].map(T)}
                channels={3}
                items={4}
                id="face5"
            />
            <MB.Face points="#face5" shaded={true} opacity={3 / 4} color={color("green")} {...faceProps} />
            <MB.Array
                data={[
                    [1, 0, 0],
                    [1, 1, 0],
                    [1, 1, 1],
                    [1, 0, 1],
                ].map(T)}
                channels={3}
                items={4}
                id="face6"
            />
            <MB.Face points="#face6" shaded={true} opacity={3 / 4} color={color("green")} {...faceProps} />
        </>
    );
}

export namespace DeterminantCube {
    export type Props = {
        T: (v: Vector3) => Vector3;
        faceProps?: ComponentProps<typeof MB.Face>;
    };
}
