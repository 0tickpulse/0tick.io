import { useMovablePoint, vec, Mafs, Line, LaTeX, Transform, Vector } from "mafs";
import { color } from "@site/src/utilities/colors";
import { lineLabel } from "@site/src/utilities/lines";

export function CoulombLawVisualizer({  }: CoulombLawVisualizer.Props) {
    const qi = useMovablePoint([-1, -1], { color: color("blue") });
    const Q = useMovablePoint([2, 2], { color: color("yellow") });
    const rhat = vec.normalize(vec.sub(Q.point, qi.point));
    const labelOffset = vec.withMag([rhat[1], -rhat[0]], 0.4);

    return (
        <Mafs>
            <Line.Segment style="dashed" point1={qi.point} point2={Q.point} />

            {qi.element}
            <LaTeX tex="q_i" color={color("blue")} at={vec.add(qi.point, labelOffset)} />

            {Q.element}
            <LaTeX tex="Q" color={color("yellow")} at={vec.add(Q.point, labelOffset)} />

            <LaTeX at={lineLabel(qi.point, Q.point)} tex="r_i" />
            <Transform translate={Q.point}>
                <Vector tip={rhat} color={color("pink")} />
                <LaTeX at={vec.scale(rhat, 1.3)} tex="\mathbf{\hat{r}}_i" color={color("pink")} />
            </Transform>
        </Mafs>
    )
}

export namespace CoulombLawVisualizer {
    export type Props = {

    }
}
