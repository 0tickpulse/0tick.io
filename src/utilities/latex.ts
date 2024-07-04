/**
 * Converts a vector of strings to a latex vector (e.g. ['a', 'b', 'c'] -> '\mqty[ a \\ b \\ c ]')
 * @param vec The vector to convert
 */
export function toLatex(vec: unknown[]) {
    return `\\mqty[ ${vec.join(" \\\\ ")} \]`;
}
