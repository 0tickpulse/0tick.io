import { ControlPanel } from "@site/src/components/mdxGlobal/controlPanel/ControlPanel";
import { SliderInput } from "@site/src/components/mdxGlobal/controlPanel/SliderInput";
import LinearTransformationVisualizer from "@site/src/components/mdxGlobal/LinearTransformationVisualizer";
import { useEffect, useState } from "react";
export function LorentzBoostVisualizerSimple({}: LorentzBoostVisualizerSimple.Props) {
    const [beta, setBeta] = useState(0.01);
    const gamma = 1 / Math.sqrt(1 - beta ** 2);
    return (
        <LinearTransformationVisualizer
            to={{ ihat: [gamma, beta * gamma], jhat: [beta * gamma, gamma] }}
            footerItems={
                <ControlPanel>
                    <SliderInput latex label="\beta" value={beta} onChange={setBeta} min={0} max={0.99} step={0.01} />
                </ControlPanel>
            }
        />
    );
}

export namespace LorentzBoostVisualizerSimple {
    export type Props = {};
}
