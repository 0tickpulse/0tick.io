import { COLORS } from "@site/colors";
import rgba from "color-rgba";
import convert from "color-convert";
import { clamp } from "lodash";

export function color(name: string) {
    // get CSS variable --custom-color-<name>
    // return getComputedStyle(document.documentElement).getPropertyValue(`--custom-color-${name}`);
    return COLORS[name];
}

export function getColorFromMagnitude(magnitude: number, minMagnitude = 0, maxMagnitude = 20) {
    // Normalize the magnitude to a 0-1 scale
    const normalizedMagnitude = (magnitude - minMagnitude) / (maxMagnitude - minMagnitude);

    const [red, green, blue] = convert.hsl.rgb([
        240 - normalizedMagnitude * 240,
        100,
        50,
    ]);

    return [red / 255, green / 255, blue / 255];
}

export function gradient(from: string, to: string, percent: number) {
    const fromColor = rgba(from);
    const toColor = rgba(to);

    const r = fromColor[0] + (toColor[0] - fromColor[0]) * percent;
    const g = fromColor[1] + (toColor[1] - fromColor[1]) * percent;
    const b = fromColor[2] + (toColor[2] - fromColor[2]) * percent;

    return `rgb(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)})`;
}
