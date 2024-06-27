import { LaTeX, Line, Plot, Polygon } from "mafs";

export type AngleProps = {
    at: [number, number];
    fromRad: number;
    toRad: number;
    radius?: number;
    straightRightAngle?: boolean;
    /**
     * Label using LaTeX syntax
     */
    label?: string;
    labelOffsetMultiplier?: number;
};

export function Angle({ at, fromRad, toRad, radius = 0.4, straightRightAngle = true, label, labelOffsetMultiplier = 1.4 }: AngleProps) {
    if (straightRightAngle && Math.abs(toRad - fromRad) === Math.PI / 2) {
        const p1 = [Math.cos(fromRad) * radius + at[0], Math.sin(fromRad) * radius + at[1]];
        const p2 = [Math.cos(toRad) * radius + at[0], Math.sin(fromRad) * radius + at[1]];
        const p3 = [Math.cos(toRad) * radius + at[0], Math.sin(toRad) * radius + at[1]];
        const texPosition = [p2[0], p2[1]];
        texPosition[0] = (texPosition[0] - at[0]) * labelOffsetMultiplier + at[0];
        texPosition[1] = (texPosition[1] - at[1]) * labelOffsetMultiplier + at[1];
        return (
            <>
                <Line.Segment point1={p1} point2={p2} />
                <Line.Segment point1={p2} point2={p3} />
                {label && <LaTeX tex={label} at={texPosition} />}
            </>
        );
    }
    function parametric(t: number): [number, number] {
        return [Math.cos(t) * radius + at[0], Math.sin(t) * radius + at[1]];
    }

    const texPosition = parametric((fromRad + toRad) / 2);
    texPosition[0] = (texPosition[0] - at[0]) * labelOffsetMultiplier + at[0];
    texPosition[1] = (texPosition[1] - at[1]) * labelOffsetMultiplier + at[1];

    return (
        <>
            <Plot.Parametric xy={parametric} t={[fromRad, toRad]} />
            {label && <LaTeX tex={label} at={texPosition} />}
        </>
    );
}
