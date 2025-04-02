import { MathEquation } from "@site/src/components/Math";
import { Theme, useTransformContext, vec } from "mafs";
import { Options } from "rehype-katex";

export function MafsMathJax({ at, tex, color = Theme.foreground, mathJaxOptions }: MafsMathJax.Props) {
    const { viewTransform, userTransform } = useTransformContext();
    const combinedTransform = vec.matrixMult(viewTransform, userTransform);
    const width = 99999,
        height = 99999;
    const center = vec.add(vec.transform(at, combinedTransform), [-width / 2, -height / 2]);
    return (
        <foreignObject x={center[0]} y={center[1]} width={width} height={height} pointerEvents="none">
            <div
                style={{
                    fontSize: "1.3em",
                    width,
                    height,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "fixed",
                    color,
                    textShadow: `, 0 0 2px ${Theme.background}`.repeat(8).slice(2),
                }}
            >
                <MathEquation {...mathJaxOptions} inline children={tex} />
            </div>
        </foreignObject>
    );
}

export namespace MafsMathJax {
    export type Props = {
        at: vec.Vector2;
        tex: string;
        color?: string;
        mathJaxOptions?: Options;
    };
}
