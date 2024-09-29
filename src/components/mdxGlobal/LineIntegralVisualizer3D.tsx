import { range } from "lodash";
import * as MB from "mathbox-react";
import { color, gradient } from "../../utilities/colors";
import CustomMathbox from "./CustomMathbox";
import { ControlPanel } from "./controlPanel/ControlPanel";
import { SliderInput } from "./controlPanel/SliderInput";
import { useState } from "react";
import rgba from "color-rgba";

export function LineIntegralVisualizer3D({
    f = (x, y) => Math.sin(x / 4) * Math.cos(y / 4) + 7,
    t: tRange = [0, Math.PI * 3],
    curve = (t) => [t, 5 * Math.sin(t / 4 + 2) + Math.sin(1.3 * t) / 5],
}: LineIntegralVisualizer3D.Props) {
    const [n, setN] = useState(10);
    const increment = (tRange[1] - tRange[0]) / n;
    return (
        <div className="card">
            <div className="card__body">
                <CustomMathbox>
                    <MB.Cartesian scale={[0.1, 0.1, 0.1]}>
                        <MB.Grid axes="xy" rangeX={[-10, 10]} rangeY={[-10, 10]} />
                        <MB.Axis axis="x" range={[-10, 10]} color={color("blue")} />
                        <MB.Axis axis="y" range={[-10, 10]} color={color("yellow")} />
                        <MB.Axis axis="z" range={[-10, 10]} color={color("green")} />
                        <MB.Area
                            id="graph"
                            axes="xy"
                            expr={(emit, x, y, i, t) => {
                                const z = f(x, y);
                                emit(x, y, z);
                            }}
                            width={64}
                            height={64}
                            channels={3}
                            rangeX={[-10, 10]}
                            rangeY={[-10, 10]}
                        />
                        <MB.Surface points="#graph" opacity={0.75} color="#909090" shaded={true} zOrder={0} />
                        {/* {range(...tRange, increment).map((t, i) => {
                            const [x, y] = curve(t);
                            const height = f(x, y);
                            const [x2, y2] = curve(t + increment);
                            const percent = (t - tRange[0]) / (tRange[1] - tRange[0]);
                            return (
                                <>
                                    <MB.Array
                                        id={`path_element_${i}`}
                                        channels={3}
                                        items={5}
                                        expr={(emit) => {
                                            emit(x, 0, y);
                                            emit(x, height, y);
                                            emit(x2, height, y2);
                                            emit(x2, 0, y2);
                                            emit(x, 0, y);
                                        }}
                                    />
                                    <MB.Strip
                                        points={`#path_element_${i}`}
                                        color={gradient(color("red"), color("blue"), percent)}
                                        zBias={1}
                                        zIndex={1}
                                    />
                                </>
                            );
                        })} */}
                        <MB.Array
                            id="rectangles"
                            channels={3}
                            items={5}
                            width={n}
                            expr={(emit, i) => {
                                const t = tRange[0] + (tRange[1] - tRange[0]) * (i / n);
                                const [x, y] = curve(t);
                                const [x2, y2] = curve(t + increment);
                                const z = f(x, y);
                                emit(x, y, 0);
                                emit(x, y, z);
                                emit(x2, y2, z);
                                emit(x2, y2, 0);
                                emit(x, y, 0);
                            }}
                        />
                        <MB.Array
                            id="rectangles_colors"
                            channels={4}
                            width={n}
                            expr={(emit, i) => {
                                const percent = i / n;
                                const [r, g, b] = rgba(gradient(color("red"), color("blue"), percent));
                                emit(r / 255, g / 255, b / 255, 1.0);
                            }}
                        />
                        <MB.Strip points="#rectangles" colors="#rectangles_colors" zBias={1} zIndex={1} />
                        <MB.Interval
                            id="path"
                            channels={3}
                            width={100}
                            range={[0, 3 * Math.PI]}
                            expr={(emit, t) => {
                                const [x, y] = curve(t);
                                const z = 0;
                                emit(x, y, z);
                            }}
                        />
                        <MB.Line points="#path" color={color("red")} zBias={1} zIndex={1} />
                        <MB.Interval
                            id="path_out"
                            channels={3}
                            width={100}
                            range={[0, 3 * Math.PI]}
                            expr={(emit, t) => {
                                const [x, y] = curve(t);
                                const z = f(x, y);
                                emit(x, y, z);
                            }}
                        />
                        <MB.Line points="#path_out" color={color("red")} zBias={1} zIndex={1} />
                    </MB.Cartesian>
                </CustomMathbox>
            </div>
            <div className="card__footer">
                <ControlPanel>
                    <SliderInput label="Segments" value={n} min={1} max={100} step={1} onChange={setN} />
                </ControlPanel>
            </div>
        </div>
    );
}

export namespace LineIntegralVisualizer3D {
    export type Props = {
        f: (x: number, y: number) => number;
        t: [number, number];
        curve: (t: number) => [number, number];
    };
}
