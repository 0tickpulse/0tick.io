import { COLORS } from "@site/colors";

export function color(name: string) {
    // get CSS variable --custom-color-<name>
    // return getComputedStyle(document.documentElement).getPropertyValue(`--custom-color-${name}`);
    return COLORS[name];
}
