import CustomMathbox from "@site/src/components/mdxGlobal/CustomMathbox";
import * as MB from "mathbox-react";
import { color } from "@site/src/utilities/colors";
import { useState } from "react";
import { ControlPanel } from "@site/src/components/mdxGlobal/controlPanel/ControlPanel";
import { SliderInput } from "@site/src/components/mdxGlobal/controlPanel/SliderInput";
import { MathEquation } from "@site/src/components/Math";

export function GaussianWavePacket({}: GaussianWavePacket.Props) {
    // This is a simple Gaussian wave packet.
    // x-wavefunction = (1/(π^0.25 * sqrt(d))) * exp(ikx - (x^2)/(2*d^2))
    // p-wavefunction = sqrt(d/(hbar * sqrt(π))) * exp(-(p - hbar * k)^2 d^2/(2 * hbar^2))
    // where d is the width of the wave packet, k is the wave number, and hbar is the reduced Planck constant.
    // The wave packet is a superposition of plane waves with wave number k.

    const [d, setD] = useState(2);
    const [k, setK] = useState(1);
    const hbar = 1; // For simplicity

    const xWavefunction = (x: number) => {
        const A = (1 / (Math.PI ** 0.25 * Math.sqrt(d))) * Math.exp(-(x ** 2) / (2 * d ** 2));
        const re = A * Math.cos(k * x);
        const im = A * Math.sin(k * x);
        return [re, im];
    };

    const pWavefunction = (p: number) => {
        const A = Math.sqrt(d / (hbar * Math.sqrt(Math.PI))) * Math.exp((-((p - hbar * k) ** 2) * d ** 2) / (2 * hbar ** 2));
        const re = A * Math.cos(k * p);
        const im = A * Math.sin(k * p);
        return [re, im];
    };

    return (
        <div className="card">
            <div className="card__body">
                <CustomMathbox>
                    <MB.Cartesian>
                        <MB.Axis axis="x" range={[-15, 15]} width={5} />
                        <MB.Axis axis="y" range={[-5, 5]} /> {/* y-axis = Real part */}
                        <MB.Axis axis="z" range={[-5, 5]} /> {/* z-axis = Imaginary part */}
                        <MB.Interval
                            id="x-wavefunction"
                            range={[-7, 7]}
                            width={256}
                            expr={(emit, x) => {
                                const [re, im] = xWavefunction(x);
                                emit(x, re, im);
                            }}
                        />
                        <MB.Interval
                            id="x-wavefunction-lines"
                            range={[-7, 7]}
                            items={2}
                            width={256}
                            expr={(emit, x) => {
                                const [re, im] = xWavefunction(x);
                                emit(x, 0, 0);
                                emit(x, re, im);
                            }}
                        />
                        <MB.Line points="#x-wavefunction" width={5} color={color("red")} />
                        <MB.Vector points="#x-wavefunction-lines" width={1} color={color("red")} />
                        <MB.Interval
                            id="p-wavefunction"
                            range={[-7, 7]}
                            width={256}
                            expr={(emit, p) => {
                                const [re, im] = pWavefunction(p);
                                emit(p, re, im);
                            }}
                        />
                        <MB.Interval
                            id="p-wavefunction-lines"
                            range={[-7, 7]}
                            items={2}
                            width={256}
                            expr={(emit, p) => {
                                const [re, im] = pWavefunction(p);
                                emit(p, 0, 0);
                                emit(p, re, im);
                            }}
                        />
                        <MB.Line points="#p-wavefunction" width={5} color={color("blue")} />
                        <MB.Vector points="#p-wavefunction-lines" width={1} color={color("blue")} />
                    </MB.Cartesian>
                </CustomMathbox>
            </div>
            <div className="card__footer">
                <div className="row">
                    <div className="col">
                        <ControlPanel>
                            <SliderInput latex label="d" value={d} onChange={setD} min={0.1} max={10} step={0.1} />
                            <SliderInput latex label="k" value={k} onChange={setK} min={0.1} max={10} step={0.1} />
                        </ControlPanel>
                    </div>
                    <div className="col">
                        <MathEquation>
                            {String.raw`
                            \begin{align*}
                            \braket{x'}{\psi} &= \frac{1}{\pi^{1/4} \sqrt{d}} \exp(ikx' - \frac{x'^2}{2d^2}) \\
                            \braket{p'}{\psi} &= \sqrt{\frac{d}{\hbar  \sqrt{\pi}}} \exp\qty[-\frac{(p' - \hbar k)^2 d^2}{2\hbar^2}]
                            \end{align*}
                            `}
                        </MathEquation>
                    </div>
                </div>
            </div>
        </div>
    );
}

export namespace GaussianWavePacket {
    export type Props = {};
}
