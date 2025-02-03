import { color } from "@site/src/utilities/colors";
import { useStopwatch } from "mafs";
import * as MB from "mathbox-react";
import { useEffect, useState } from "react";
import { MathEquation } from "../Math";
import CustomMathbox from "./CustomMathbox";
import { ControlPanel } from "./controlPanel/ControlPanel";
import { SliderInput } from "./controlPanel/SliderInput";
import { Pills } from "./controlPanel/Pills";

export function LightPolarizationPlayground({}: LightPolarizationPlayground.Props) {
    // Temporal frequency
    const [angularFreq, setAngularFreq] = useState(2);
    const freq = angularFreq / (2 * Math.PI);
    const period = 1 / freq;
    // "Spatial frequency" (wavenumber)
    const [wavenumber, setWavenumber] = useState(2 * Math.PI);
    const wavelength = (2 * Math.PI) / wavenumber;

    const [amplitudeX, setAmplitudeX] = useState(1);
    const [amplitudeY, setAmplitudeY] = useState(1);
    const [phaseShift_x, setPhaseShift_x] = useState(0);
    const [phaseShift_y, setPhaseShift_y] = useState(0);

    const [samples, setSamples] = useState(100);
    const [showPositionSlice, setShowPositionSlice] = useState(false);
    const [showOverallWave, setShowOverallWave] = useState(true);
    const [positionSlice, setPositionSlice] = useState(0);

    const jonesVector = [
        [amplitudeX * Math.cos(phaseShift_x), amplitudeX * Math.sin(phaseShift_x)],
        [amplitudeY * Math.cos(phaseShift_y), amplitudeY * Math.sin(phaseShift_y)],
    ]; // Makeshift complex numbers

    const E = (z: number, t: number) => {
        const exponential = [Math.cos(wavenumber * z - angularFreq * t), Math.sin(wavenumber * z - angularFreq * t)];
        return [
            jonesVector[0][0] * exponential[0] - jonesVector[0][1] * exponential[1],
            jonesVector[1][0] * exponential[0] - jonesVector[1][1] * exponential[1],
        ];
    };

    const { start, stop, time } = useStopwatch();
    useEffect(() => {
        start();
        return stop;
    }, []);

    const slicedVector = E(positionSlice, time);

    return (
        <div className="card">
            <div className="card__body">
                <CustomMathbox>
                    <MB.Cartesian>
                        <MB.Axis axis="x" range={[-2, 2]} />
                        <MB.Axis axis="y" range={[-2, 2]} />
                        <MB.Axis axis="z" range={[-2, 2]} />
                        <MB.Group visible={showOverallWave}>
                            <MB.Interval
                                id="circle"
                                range={[-3, 3]}
                                items={2}
                                width={samples}
                                expr={(emit, z) => {
                                    // emit a point for the origin
                                    emit(z, 0, 0);
                                    // emit a point for the tip of the vector
                                    const E_val = E(z, time);
                                    emit(z, E_val[0], E_val[1]);
                                }}
                            />
                            <MB.Vector points="#circle" color={color("blue")} width={5} end={true} />
                        </MB.Group>

                        {/* Slice */}
                        <MB.Group visible={showPositionSlice}>
                            <MB.Array
                                id="slice"
                                items={4}
                                channels={3}
                                data={[
                                    [positionSlice, -5, -5],
                                    [positionSlice, -5, 5],
                                    [positionSlice, 5, 5],
                                    [positionSlice, 5, -5],
                                ]}
                            />
                            <MB.Face points="#slice" color="#707070" opacity={0.5} />
                            <MB.Array
                                id="vector_at_slice"
                                items={2}
                                channels={3}
                                data={[
                                    [positionSlice, 0, 0],
                                    [positionSlice, slicedVector[0], slicedVector[1]],
                                ]}
                            />
                            <MB.Vector points="#vector_at_slice" color={color("red")} width={8} end={true} zIndex={5} />
                            <MB.Array
                                id="vector_at_slice_x"
                                items={2}
                                channels={3}
                                data={[
                                    [positionSlice, 0, 0],
                                    [positionSlice, slicedVector[0], 0],
                                ]}
                            />
                            <MB.Vector points="#vector_at_slice_x" color={color("blue")} width={8} end={true} zIndex={5} stroke="dashed" />
                            <MB.Array
                                id="vector_at_slice_y"
                                items={2}
                                channels={3}
                                data={[
                                    [positionSlice, slicedVector[0], 0],
                                    [positionSlice, slicedVector[0], slicedVector[1]],
                                ]}
                            />
                            <MB.Vector points="#vector_at_slice_y" color={color("yellow")} width={8} end={true} zIndex={5} stroke="dashed" />
                        </MB.Group>
                    </MB.Cartesian>
                </CustomMathbox>
            </div>
            <div className="card__footer" style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                <ControlPanel>
                    <SliderInput latex label="\omega" min={0} max={10} step={0.1} value={angularFreq} onChange={setAngularFreq} />
                    <SliderInput latex label="k" min={0} max={10} step={0.1} value={wavenumber} onChange={setWavenumber} />
                    <SliderInput latex label="E_x" min={-4} max={4} step={0.1} value={amplitudeX} onChange={setAmplitudeX} />
                    <SliderInput latex label="E_y" min={-4} max={4} step={0.1} value={amplitudeY} onChange={setAmplitudeY} />
                    <SliderInput latex label="\phi_x" min={0} max={2 * Math.PI} step={0.1} value={phaseShift_x} onChange={setPhaseShift_x} />
                    <SliderInput latex label="\phi_y" min={0} max={2 * Math.PI} step={0.1} value={phaseShift_y} onChange={setPhaseShift_y} />
                    <SliderInput label="Samples" min={0} max={100} step={1} value={100} onChange={setSamples} />
                    <Pills
                        label="Position slice"
                        value={showPositionSlice ? "Show" : "Hide"}
                        options={["Show", "Hide"]}
                        onChange={(v) => setShowPositionSlice(v === "Show")}
                    />
                    <Pills
                        label="Overall wave"
                        value={showOverallWave ? "Show" : "Hide"}
                        options={["Show", "Hide"]}
                        onChange={(v) => setShowOverallWave(v === "Show")}
                    />
                </ControlPanel>
                <div
                    style={{
                        flex: 1,
                    }}
                >
                    <p>
                        <MathEquation>{String.raw`\va{E}(z, t) = \mqty[E_x e^{i\phi_x} \\ E_y e^{i\phi_y}] e^{i(kz - \omega t)}`}</MathEquation>
                    </p>
                    <p>
                        Jones vector:
                    </p>
                    <p>
                        <MathEquation>{String.raw`\va{J} = \mqty[E_x e^{i\phi_x} \\ E_y e^{i\phi_y}] = \mqty[${jonesVector[0][0]} e^{i${phaseShift_x}} \\ ${jonesVector[1][0]} e^{i${phaseShift_y}}]`}</MathEquation>
                    </p>
                </div>
            </div>
        </div>
    );
}

export namespace LightPolarizationPlayground {
    export type Props = {};
}
