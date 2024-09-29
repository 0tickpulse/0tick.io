import { range } from "lodash";
import { Line, Mafs, Plot, Point, vec } from "mafs";
import { useEffect, useState } from "react";
import { ControlPanel } from "./controlPanel/ControlPanel";
import { SliderInput } from "./controlPanel/SliderInput";
import { color } from "../../utilities/colors";

export function ArcLengthVisualizer({ xy, t, segmentsRange, mafsProps = {}, children }: ArcLengthVisualizer.Props) {
    const [segments, setSegments] = useState(5);
    let [min, max] = segmentsRange ?? [1, 100];
    if (min < 1) {
        min = 1;
    }
    useEffect(() => {
        if (!segmentsRange) return;
        if (segments < min) setSegments(min);
        if (segments > max) setSegments(max);
    }, [segments]);
    return (
        <div className="card">
            <div className="card__body">
                <Mafs {...mafsProps}>
                    <Plot.Parametric xy={xy} t={t} />
                    {range(segments).map((i) => {
                        const t0 = t[0] + (t[1] - t[0]) * (i / segments);
                        const t1 = t[0] + (t[1] - t[0]) * ((i + 1) / segments);
                        const [x0, y0] = xy(t0);
                        const [x1, y1] = xy(t1);
                        return (
                            <>
                                <Line.Segment point1={[x0, y0]} point2={[x1, y1]} color={color("red")} />
                                <Point x={x0} y={y0} />
                                <Point x={x1} y={y1} />
                            </>
                        );
                    })}
                    {children}
                </Mafs>
            </div>
            <div className="card__footer">
                <ControlPanel>
                    <SliderInput label="Segments" value={segments} min={min} max={max} step={1} onChange={setSegments} />
                </ControlPanel>
            </div>
        </div>
    );
}

export namespace ArcLengthVisualizer {
    export type Props = React.PropsWithChildren<{
        xy: (t: number) => vec.Vector2;
        t: [number, number];
        segmentsRange?: [number, number];
        mafsProps?: React.ComponentProps<typeof Mafs>;
    }>;
}
