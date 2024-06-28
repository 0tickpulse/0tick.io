import { LaTeX, Line, Plot, vec, Polygon, useTransformContext, Transform } from "mafs";

export type AngleProps = {
    at: [number, number];
    fromRad: number;
    toRad: number;
    radius?: number;
    color?: string;
    straightRightAngle?: boolean;
    /**
     * Use if you know the angle is a right angle.
     * Sometimes the angle is not exactly 90 degrees due to floating point errors.
     */
    forceStraightAngle?: boolean;
    /**
     * Label using LaTeX syntax
     */
    label?: string;
    labelColor?: string;
    labelOffsetMultiplier?: number;
};

export function Angle({
    at,
    fromRad,
    toRad,
    radius = 0.4,
    color,
    straightRightAngle = true,
    forceStraightAngle = false,
    label,
    labelColor = color,
    labelOffsetMultiplier = 1.4,
}: AngleProps) {
    const { userTransform } = useTransformContext();
    if ((straightRightAngle && Math.abs(toRad - fromRad) === Math.PI / 2) || forceStraightAngle) {
        if (fromRad > toRad) {
            [fromRad, toRad] = [toRad, fromRad];
        }
        if (toRad - fromRad > Math.PI) {
            [fromRad, toRad] = [toRad, fromRad];
        }
        const squareLength = radius / Math.sqrt(2);
        return (
            <>
                <Transform rotate={fromRad} translate={at}>
                    <Line.Segment point1={[squareLength, 0]} point2={[squareLength, squareLength]} />
                    <Line.Segment point1={[0, squareLength]} point2={[squareLength, squareLength]} />
                </Transform>
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
            <Plot.Parametric xy={(t) => vec.transform(parametric(t), userTransform)} t={[fromRad, toRad]} color={color} />
            {label && <LaTeX tex={label} at={texPosition} color={labelColor} />}
        </>
    );
}
