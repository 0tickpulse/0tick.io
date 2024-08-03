import { COLORS } from "@site/colors";
import rgba from "color-rgba";

export function color(name: string) {
    // get CSS variable --custom-color-<name>
    // return getComputedStyle(document.documentElement).getPropertyValue(`--custom-color-${name}`);
    return COLORS[name];
}

/**
 * @param h From 0 to 1
 * @returns
 */
export function HSVtoRGB(h: number, s: number, v: number) {
    let r: number, g: number, b: number;
    let i: number, f: number, p: number, q: number, t: number;

    if (s === 0) {
        r = g = b = v;
        return [r, g, b];
    }

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
        case 1:
            r = q;
            g = v;
            b = p;
            break;
        case 2:
            r = p;
            g = v;
            b = t;
            break;
        case 3:
            r = p;
            g = q;
            b = v;
            break;
        case 4:
            r = t;
            g = p;
            b = v;
            break;
        case 5:
            r = v;
            g = p;
            b = q;
            break;
    }

    return [r, g, b];
}

export function getColorFromMagnitude(magnitude: number, minMagnitude = 0, maxMagnitude = 20) {
    // Normalize the magnitude to a 0-1 scale
    const normalizedMagnitude = (magnitude - minMagnitude) / (maxMagnitude - minMagnitude);

    // Convert the normalized magnitude to an HSV color
    // HSV spectrum is from 241/360 (small) to 0 (big)
    const hue = Math.max(0, 241 / 360 * (1 - normalizedMagnitude));
    const saturation = 1;
    const value = 1;
    const [red, green, blue] = HSVtoRGB(hue, saturation, value);

    return [red, green, blue];
}

export function gradient(from: string, to: string, percent: number) {
    const fromColor = rgba(from);
    const toColor = rgba(to);

    const r = fromColor[0] + (toColor[0] - fromColor[0]) * percent;
    const g = fromColor[1] + (toColor[1] - fromColor[1]) * percent;
    const b = fromColor[2] + (toColor[2] - fromColor[2]) * percent;

    return `rgb(${r}, ${g}, ${b})`;
}
