import { MathEquation } from "@site/src/components/Math";
import React, { useState, useRef, useEffect } from "react";
import numeric from "numeric";
import { findIntersectionPoint } from "@site/src/utilities/intersection";
import { toLatex } from "@site/src/utilities/latex";

type Point = number[];

interface TriangulationResult {
    intersection?: Point;
    t1: number;
    t2: number;
}

function triangulatePoints(pointA: Point, pointB: Point, pointC: Point, pointD: Point): TriangulationResult {
    const {point: intersection, t1, t2} = findIntersectionPoint( pointA, pointB, pointC, pointD );
    return {
        intersection,
        t1,
        t2,
    };
}

type Points = [Point, Point, Point, Point];

export default function Triangulator() {
    const [dimensions, setDimensions] = useState(2);
    const [points, setPoints] = useState<Points>([
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
    ]);
    const [result, setResult] = useState<TriangulationResult | null>(null);

    // expand points if dimensions change
    useEffect(() => {
        const newPoints = [...points];
        while (newPoints[0].length < dimensions) {
            newPoints.forEach((point) => point.push(0));
        }
        setPoints(newPoints as Points);
    }, [dimensions]);

    useEffect(() => {
        const result = triangulatePoints(...points);
        setResult(result);
    }, [points]);

    const handleChange = (index: number, idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newPoints: Points = structuredClone(points);
        const input = e.target.value;
        if (input.match(/(\d+\.?\d* )*\d+\.?\d*/)) {
            const split = input.split(" ");
            const nums = split.map((s) => Number(s));
            for (let i = 0; i < nums.length; i++) {
                if (!Number.isNaN(nums[i])) {
                    newPoints[index][idx + i] = nums[i];
                }
            }
        } else {
            const num = Number(input);
            if (!Number.isNaN(num)) {
                newPoints[index][idx] = num;
            }
        }
        setPoints(newPoints);
    };

    const displayLine = (idx: number, p: Point, q: Point) => {
        return String.raw`\mathbf{r_${idx}}(t) = ${toLatex(p)} + t\left(${toLatex(numeric.sub(q, p))}\right)`;
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
                    onChange={(e) => Number(e.target.value) > 2 && setDimensions(Number(e.target.value))}
                />
            </div>
            <table style={{ border: "0" }} key="inputtable">
                <tr>
                    <td>Start of Location 1</td>
                    {Array.from({ length: dimensions }).map((_, idx) => {
                        return (
                            <td key={idx}>
                                <input className="tick-input" value={points[0][idx]} onChange={(e) => handleChange(0, idx, e)} />
                            </td>
                        );
                    })}
                </tr>
                <tr>
                    <td>End of Location 1</td>
                    {Array.from({ length: dimensions }).map((_, idx) => {
                        return (
                            <td key={idx}>
                                <input className="tick-input" value={points[1][idx]} onChange={(e) => handleChange(1, idx, e)} />
                            </td>
                        );
                    })}
                </tr>
                <tr>
                    <td>Start of Location 2</td>
                    {Array.from({ length: dimensions }).map((_, idx) => {
                        return (
                            <td key={idx}>
                                <input className="tick-input" value={points[2][idx]} onChange={(e) => handleChange(2, idx, e)} />
                            </td>
                        );
                    })}
                </tr>
                <tr>
                    <td>End of Location 2</td>
                    {Array.from({ length: dimensions }).map((_, idx) => {
                        return (
                            <td key={idx}>
                                <input className="tick-input" value={points[3][idx]} onChange={(e) => handleChange(3, idx, e)} />
                            </td>
                        );
                    })}
                </tr>
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
                        <MathEquation displayMode={true}>{String.raw`\begin{align*}t_1 &= ${result.t1} \\ t_2 &= ${result.t2}\end{align*}`}</MathEquation>
                    </p>
                    <p>Intersection point: {result.intersection ? <MathEquation>{result.intersection.join(", ")}</MathEquation> : "none"}</p>
                </div>
            )}
        </div>
    );
}
