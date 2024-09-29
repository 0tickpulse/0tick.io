import { Circle, Coordinates, LaTeX, Mafs, Polyline, Transform, useMovablePoint, vec, Vector } from "mafs";
import { useState } from "react";
import { color } from "../../utilities/colors";
import { lineLabel } from "../../utilities/lines";
import { Angle } from "./Angle";
import { ControlPanel } from "./controlPanel/ControlPanel";
import { Pills } from "./controlPanel/Pills";

export function PolarCoordinateVisualizer({}: PolarCoordinateVisualizer.Props) {
    const movable = useMovablePoint([Math.sqrt(2), Math.sqrt(2)], {
        constrain: (v) => vec.withMag(v, 2),
    });
    const [showPolarBasisVectors, setShowPolarBasisVectors] = useState(true);
    const [showCartesianBasisVectors, setShowCartesianBasisVectors] = useState(true);

    let angle = Math.atan2(movable.point[1], movable.point[0]);
    if (angle < 0) {
        angle += Math.PI * 2;
    }
    const rhat = vec.normalize(movable.point);
    const thetahat = vec.rotate(rhat, Math.PI / 2);

    const ihat: vec.Vector2 = [1, 0], jhat: vec.Vector2 = [0, 1];
    return (
        <div className="card">
            <div className="card__body">
                <Mafs viewBox={{ x: [-3, 3], y: [-3, 3] }}>
                    <Coordinates.Cartesian xAxis={{ lines: false, labels: () => "" }} yAxis={{ lines: false, labels: () => "" }} />
                    <Circle center={[0, 0]} radius={2} fillOpacity={0} />
                    <Angle at={[0, 0]} fromRad={0} toRad={angle} radius={0.4} label="\theta" labelColor={color("purple")} />
                    <Vector tip={movable.point} />
                    <LaTeX tex={"r"} at={lineLabel([0, 0], movable.point, "left", { sideOffset: 0.15 })} color={color("red")} />
                    <Polyline points={[[0, 0], [movable.point[0], 0], movable.point]} strokeStyle="dashed" />
                    <LaTeX tex={"x"} at={lineLabel([0, 0], [movable.point[0], 0], "right", { sideOffset: 0.15 })} color={color("blue")} />
                    <LaTeX tex={"y"} at={lineLabel([movable.point[0], 0], [movable.point[0], movable.point[1]], "right", { sideOffset: 0.15 })} color={color("yellow")} />
                    {movable.element}
                    <Transform translate={movable.point}>
                        {showPolarBasisVectors && (
                            <>
                                <Vector tip={rhat} color={color("red")} />
                                <LaTeX tex="\hat{\mathbf{r}}" at={vec.scale(rhat, 1.2)} color={color("red")} />
                                <Vector tip={thetahat} color={color("purple")} />
                                <LaTeX tex="\hat{\mathbf{\theta}}" at={vec.scale(thetahat, 1.2)} color={color("purple")} />
                            </>
                        )}
                        {showCartesianBasisVectors && (
                            <>
                                <Vector tip={ihat} color={color("blue")} />
                                <LaTeX tex="\hat{\mathbf{i}}" at={vec.scale(ihat, 1.2)} color={color("blue")} />
                                <Vector tip={jhat} color={color("yellow")} />
                                <LaTeX tex="\hat{\mathbf{j}}" at={vec.scale(jhat, 1.2)} color={color("yellow")} />
                            </>
                        )}
                    </Transform>
                </Mafs>
            </div>
            <div className="card__footer">
                <ControlPanel>
                    <Pills label="Polar basis vectors" value="Show" options={["Show", "Hide"]} onChange={(show) => setShowPolarBasisVectors(show === "Show")} />
                    <Pills label="Cartesian basis vectors" value="Show" options={["Show", "Hide"]} onChange={(show) => setShowCartesianBasisVectors(show === "Show")} />
                </ControlPanel>
            </div>
        </div>
    );
}

export namespace PolarCoordinateVisualizer {
    export type Props = {};
}
