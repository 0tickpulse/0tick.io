import MathEquation from "@site/src/components/Math";
import { findIntersectionPoint } from "@site/src/utilities/intersection";
import { toLatex } from "@site/src/utilities/latex";
import numeric from "numeric";
import React, { useEffect, useState } from "react";

type Point = number[];

interface TriangulationResult {
    intersection?: Point;
    t1: number;
    t2: number;
}

function triangulatePoints(pointA: Point, pointB: Point, pointC: Point, pointD: Point): TriangulationResult {
    const { point: intersection, t1, t2 } = findIntersectionPoint(pointA, pointB, pointC, pointD);
    return {
        intersection,
        t1,
        t2,
    };
}

type Points = [Point, Point, Point, Point];
type Inputs = [string[], string[], string[], string[]];

type TableRowProps = {
    label: string;
    inputIndex: number;
    dimensions: number;
    inputs: Inputs;
    handleChange: (inputIndex: number, idx: number, e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TableRow = ({ label, inputIndex, dimensions, inputs, handleChange }: TableRowProps) => {
    return (
        <tr>
            <td>{label}</td>
            {Array.from({ length: dimensions }).map((_, idx) => (
                <td key={idx}>
                    <input
                        style={{
                            background: Number.isNaN(Number(inputs[inputIndex][idx] ?? "0"))
                                ? "var(--ifm-color-danger)"
                                : "var(--ifm-navbar-search-input-background-color)",
                        }}
                        className="tick-input"
                        value={inputs[inputIndex][idx] ?? "0"}
                        onChange={handleChange.bind(null, inputIndex, idx)}
                        size={Math.max(3, inputs[inputIndex][idx]?.toString().length ?? 0)}
                    />
                </td>
            ))}
        </tr>
    );
};

export default function Triangulator() {
    const [dimensions, setDimensions] = useState(2);
    const [points, setPoints] = useState<Points>([
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
    ]);
    const [inputs, setInputs] = useState<Inputs>([
        ["0", "0"],
        ["0", "0"],
        ["0", "0"],
        ["0", "0"],
    ]);
    const [result, setResult] = useState<TriangulationResult | null>(null);

    // expand points and inputs if dimensions change
    useEffect(() => {
        const newPoints = [...points];
        while (newPoints[0].length < dimensions) {
            newPoints.forEach((point) => point.push(0));
        }
        setPoints(newPoints as Points);

        const newInputs = [...inputs];
        while (newInputs[0].length < dimensions) {
            newInputs.forEach((input) => input.push("0"));
        }
        setInputs(newInputs as Inputs);
    }, [dimensions]);

    useEffect(() => {
        const result = triangulatePoints(...points);
        setResult(result);
    }, [points]);

    const handleChange = (index: number, idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newPoints: Points = structuredClone(points);
        const newInputs: Inputs = structuredClone(inputs);

        const input = e.target.value;
        if (input.match(/(\d+\.?\d* )*\d+\.?\d*/)) {
            const split = input.split(" ");
            const nums = split.map((s) => Number(s));
            for (let i = 0; i < nums.length; i++) {
                if (!Number.isNaN(nums[i])) {
                    newPoints[index][idx + i] = nums[i];
                }
                newInputs[index][idx + i] = split[i];
            }
        } else {
            const num = Number(input);
            if (!Number.isNaN(num)) {
                newPoints[index][idx] = num;
            }
            newInputs[index][idx] = input;
        }
        setPoints(newPoints);
        setInputs(newInputs);
    };

    const displayLine = (idx: number, p: Point, q: Point) => {
        return String.raw`\vec{r_${idx}}(t) = ${toLatex(p.slice(0, dimensions))} + t\left(${toLatex(
            numeric.sub(q.slice(0, dimensions), p.slice(0, dimensions))
        )}\right)`;
    };

    const tableRowProps = {
        dimensions,
        inputs,
        handleChange,
    };

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <p>Number of dimensions: {dimensions}</p>
                <input
                    className="tick-input-slider"
                    type="range"
                    min="2"
                    max="10"
                    value={dimensions}
                    onChange={(e) => Number(e.target.value) >= 2 && setDimensions(Number(e.target.value))}
                />
            </div>
            <table style={{ border: "0" }} key="inputtable">
                <TableRow {...tableRowProps} key={`start-location-1`} label="Start of Location 1" inputIndex={0} />
                <TableRow {...tableRowProps} key={`end-location-1`} label="End of Location 1" inputIndex={1} />
                <TableRow {...tableRowProps} key={`start-location-2`} label="Start of Location 2" inputIndex={2} />
                <TableRow {...tableRowProps} key={`end-location-2`} label="End of Location 2" inputIndex={3} />
            </table>
            {result && (
                <div>
                    <h2>Result</h2>
                    <h3>Equation of Line 1</h3>
                    <p>
                        <MathEquation displayMode={true}>{displayLine(1, points[0], points[1])}</MathEquation>
                    </p>
                    <h3>Equation of Line 2</h3>
                    <p>
                        <MathEquation displayMode={true}>{displayLine(2, points[2], points[3])}</MathEquation>
                    </p>
                    <h3>Calculated result</h3>
                    <p>
                        <MathEquation
                            displayMode={true}
                        >{String.raw`\begin{align}t_1 &= ${result.t1} \\ t_2 &= ${result.t2}\end{align}`}</MathEquation>
                    </p>
                    <p>
                        Intersection point:{" "}
                        {result.intersection ? <MathEquation>{result.intersection.slice(0, dimensions).join(", ")}</MathEquation> : "none"}
                    </p>
                </div>
            )}
        </div>
    );
}
