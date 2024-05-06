import { Line, Mafs, Theme, vec, Vector } from "mafs";
import * as math from "mathjs";
import React, { useState } from "react";

type Vector3 = [number, number, number];
/**
 * Cheap psuedo-random hash function to consistently generate randomness when
 * sampling functions. This return a value between 0.4 and 0.6.
 */
function cheapHash(min: number, max: number) {
    const result = Math.sin(min * 12.9898 + max * 78.233) * 43758.5453;
    return 0.4 + 0.2 * (result - Math.floor(result));
}

/**
 * A relatively generic internal function which, given a function, domain, and
 * an error function, will recursively subdivide the domain until sampling said
 * function at each point in the domain yields an error less than the supplied
 * threshold. Importantly, this makes no assumptions about the return type of
 * the sampled function.
 */
export function sample<SampledReturnType>({ domain, minDepth, maxDepth, threshold, fn, error, onPoint, lerp }: SampleParams<SampledReturnType>) {
    const [min, max] = domain;

    function subdivide(min: number, max: number, depth: number, pMin: SampledReturnType, pMax: SampledReturnType) {
        const t = cheapHash(min, max);
        const mid = min + (max - min) * t;
        const pMid = fn(mid);

        function deepen() {
            subdivide(min, mid, depth + 1, pMin, pMid);
            onPoint(mid, pMid);
            subdivide(mid, max, depth + 1, pMid, pMax);
        }

        if (depth < minDepth) {
            deepen();
        } else if (depth < maxDepth) {
            const fnMidpoint = lerp(pMin, pMax, t);
            const e = error(pMid, fnMidpoint);
            if (e > threshold) deepen();
        }
    }

    onPoint(min, fn(min));
    subdivide(min, max, 0, fn(min), fn(max));
    onPoint(max, fn(max));
}
function sampleParametric(fn: (t: number) => vec.Vector2, domain: vec.Vector2, minDepth: number, maxDepth: number, threshold: number) {
    let result = "M ";

    sample({
        fn,
        error: (a, b) => vec.squareDist(a, b),
        onPoint: (_t, [x, y]) => {
            if (Number.isFinite(x) && Number.isFinite(y)) {
                result += `${x} ${y} L `;
            }
        },
        lerp: (p1, p2, t) => vec.lerp(p1, p2, t),
        domain,
        minDepth,
        maxDepth,
        threshold,
    });

    return result.substring(0, result.length - 2);
}

function range(start: number, end: number, step: number) {
    const result = [];
    for (let i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}

function rotationMatrixX(angle: number) {
    return math.matrix([
        [1, 0, 0],
        [0, math.cos(angle), -math.sin(angle)],
        [0, math.sin(angle), math.cos(angle)],
    ]);
}

function rotationMatrixY(angle: number) {
    return math.matrix([
        [math.cos(angle), 0, math.sin(angle)],
        [0, 1, 0],
        [-math.sin(angle), 0, math.cos(angle)],
    ]);
}

function rotationMatrixZ(angle: number) {
    return math.matrix([
        [math.cos(angle), -math.sin(angle), 0],
        [math.sin(angle), math.cos(angle), 0],
        [0, 0, 1],
    ]);
}

function rotate3D(coordinate: Vector3, rotationVector: Vector3) {
    const xRot = rotationVector[0];
    const yRot = rotationVector[1];
    const zRot = rotationVector[2];

    const rotationX = rotationMatrixX(xRot);
    const rotationY = rotationMatrixY(yRot);
    const rotationZ = rotationMatrixZ(zRot);

    // Apply rotations in order (order might matter)
    const combinedRotation = math.multiply(rotationZ, rotationY, rotationX);

    const rotatedCoordinate = math.multiply(combinedRotation, math.matrix(coordinate));

    return rotatedCoordinate.toArray(); // Return as an array
}

export function ThreeDTest() {
    // the library does not support anything in 3D
    // but through some math, we can make it work
    const point = [1, 2, 3];

    const [viewRot, setViewRot] = useState<Vector3>([0, Math.PI / 4, Math.PI / 4]);

    const xAxisStart = [-10, 0, 0];
    const xAxisEnd = [10, 0, 0];
    const yAxisStart = [0, -10, 0];
    const yAxisEnd = [0, 10, 0];
    const zAxisStart = [0, 0, -10];
    const zAxisEnd = [0, 0, 10];

    function normalize(vector: Vector3): Vector3 {
        const magnitude = Math.sqrt(vector[0] ** 2 + vector[1] ** 2 + vector[2] ** 2);
        return [vector[0] / magnitude, vector[1] / magnitude, vector[2] / magnitude];
    }

    // this function will project a 3D point to 2D space, also rotating it u
    // assume z is the vertical axis
    function project3dTo2d(point: Vector3, rotationVector: Vector3 = viewRot) {
        const rotatedCoordinate = rotate3D(point, rotationVector);
        return [rotatedCoordinate[0], rotatedCoordinate[1]];
    }

    // test function which is a distribution
    const f = (x: number, y: number) => Math.sin(x) + Math.cos(y);

    const mafs = (
        <Mafs pan={false}>
            <Line.Segment point1={project3dTo2d(xAxisStart)} point2={project3dTo2d(xAxisEnd)} color={Theme.red} />
            <Line.Segment point1={project3dTo2d(yAxisStart)} point2={project3dTo2d(yAxisEnd)} color={Theme.green} />
            <Line.Segment point1={project3dTo2d(zAxisStart)} point2={project3dTo2d(zAxisEnd)} color={Theme.blue} />

            <Vector tail={project3dTo2d([0, 0, 0])} tip={project3dTo2d(point)} />
            <Vector tail={project3dTo2d([0, 0, 0])} tip={project3dTo2d([point[0], 0, 0])} />
            <Vector tail={project3dTo2d([point[0], 0, 0])} tip={project3dTo2d([point[0], point[1], 0])} />
            <Vector tail={project3dTo2d([point[0], point[1], 0])} tip={project3dTo2d(point)} />

            {range(-10, 10, 0.25).map((y) => {
                const svgPath = React.useMemo(
                    () => sampleParametric((x) => project3dTo2d([x, y, f(x, y)]) as vec.Vector2, [-10, 10], 4, 10, 0.01),
                    [y, f, viewRot]
                );

                return (
                    <path
                        d={svgPath}
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            stroke: "var(--mafs-fg)",
                            strokeOpacity: 1,
                            vectorEffect: "non-scaling-stroke",
                            transform: "var(--mafs-view-transform)",
                        }}
                    />
                );
            })}
        </Mafs>
    );

    // create a div that, when dragged, modifies the viewRot state
    const draggable = (
        <div
            style={{
                cursor: "grab",
            }}
            onMouseDown={(e) => {
                const start = [e.clientX, e.clientY];
                const startRot = viewRot;

                const onMouseMove = (e) => {
                    const diff = [e.clientX - start[0], e.clientY - start[1]];
                    const scale = 0.01;

                    setViewRot([startRot[0] + diff[1] * scale, startRot[1] + diff[0] * scale, startRot[2]]); // rotate around x and y
                };

                const onMouseUp = () => {
                    window.removeEventListener("mousemove", onMouseMove);
                    window.removeEventListener("mouseup", onMouseUp);
                };

                window.addEventListener("mousemove", onMouseMove);
                window.addEventListener("mouseup", onMouseUp);
            }}
        >
            {mafs}
        </div>
    );

    return draggable;
}
