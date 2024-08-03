import { clamp } from "lodash";
import { vec, usePaneContext, Theme, useTransformContext } from "mafs";
import React, { useRef, useEffect, useCallback } from "react";

export interface VectorFieldProps {
    xy: (point: vec.Vector2) => vec.Vector2;
    xyOpacity?: (point: vec.Vector2) => number;
    step: number;
    opacityStep?: number;
    // color?: string;
    color?: (point: vec.Vector2) => string;
}

// export default function BetterMafsVectorField({
//     xy,
//     step = 1,
//     xyOpacity = () => 1,
//     opacityStep = 0.2,
//     // color = Theme.foreground,
//     color = () => Theme.foreground,
// }: VectorFieldProps) {
//     const canvas = useCallback((canvas: HTMLCanvasElement) => {
//         update(canvas);
//     }, [xy, step, xyOpacity, color]);
//     const { viewTransform: pixelMatrix } = useTransformContext();
//     const { xPanes, yPanes } = usePaneContext();

//     const update = (canvas: HTMLCanvasElement) => {
//         if (!canvas) return;

//         console.log({ canvas, getContext: canvas.getContext, yes: canvas instanceof HTMLCanvasElement, constructor: canvas.constructor.name });
//         if (!(canvas instanceof HTMLCanvasElement)) {
//             console.error("Canvas element not found");
//             return;
//         }

//         const ctx = canvas.getContext("2d");
//         if (!ctx) return;

//         const draw = () => {
//             // Ensure canvas size matches its container
//             const rect = canvas.getBoundingClientRect();
//             canvas.width = rect.width;
//             canvas.height = rect.height;

//             // ctx.strokeStyle = color;
//             ctx.lineCap = "round";
//             ctx.lineJoin = "round";

//             for (const [xMin, xMax] of xPanes) {
//                 for (const [yMin, yMax] of yPanes) {
//                     for (let x = Math.floor(xMin); x <= Math.ceil(xMax); x += step) {
//                         for (let y = Math.floor(yMin); y <= Math.ceil(yMax); y += step) {
//                             const tail: vec.Vector2 = [x, y];
//                             const trueOffset = xy([x, y]);
//                             const trueMag = vec.mag(trueOffset);

//                             // Skip zero-length vectors
//                             if (trueMag === 0) continue;

//                             const scaledOffset = vec.scale(vec.normalize(trueOffset), Math.min(trueMag, step * 0.75));
//                             const tip = vec.add(tail, scaledOffset);

//                             const pixelTail = vec.transform(tail, pixelMatrix);
//                             const pixelTip = vec.transform(tip, pixelMatrix);

//                             // Set opacity and color
//                             ctx.globalAlpha = clamp(xyOpacity([x, y]), 0, 1);
//                             ctx.strokeStyle = color([x, y]);

//                             // Draw arrow
//                             ctx.beginPath();
//                             ctx.moveTo(pixelTail[0], pixelTail[1]);
//                             ctx.lineTo(pixelTip[0], pixelTip[1]);

//                             // Arrowhead calculation (simplified)
//                             const arrowSize = Math.min(vec.dist(pixelTail, pixelTip), 5);
//                             const angle = Math.atan2(pixelTip[1] - pixelTail[1], pixelTip[0] - pixelTail[0]);
//                             ctx.lineTo(
//                                 pixelTip[0] - arrowSize * Math.cos(angle - Math.PI / 6),
//                                 pixelTip[1] - arrowSize * Math.sin(angle - Math.PI / 6)
//                             );
//                             ctx.moveTo(pixelTip[0], pixelTip[1]);
//                             ctx.lineTo(
//                                 pixelTip[0] - arrowSize * Math.cos(angle + Math.PI / 6),
//                                 pixelTip[1] - arrowSize * Math.sin(angle + Math.PI / 6)
//                             );
//                             ctx.stroke();
//                         }
//                     }
//                 }
//             }
//         };

//         draw();

//         // Redraw on resize
//         const resizeObserver = new ResizeObserver(draw);
//         resizeObserver.observe(canvas);

//         return resizeObserver.disconnect;
//     };

//     return <canvas ref={canvas} height={100} width={100} />;
// }

// debug version
export default function TestCanvas() {
    const canvas = useCallback((canvas: HTMLCanvasElement) => {
        console.log({
            canvas,
            constructor: canvas.constructor.name,
        });
    }, []);
    return <canvas ref={canvas} height={100} width={100} />;
}
