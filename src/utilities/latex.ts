/**
 * Converts a vector of strings to a latex vector (e.g. ['a', 'b', 'c'] -> '\begin{bmatrix} a \\ b \\ c \end{bmatrix}')
 * @param vec The vector to convert
 */
export function toLatex(vec: unknown[]) {
    return `\\begin{bmatrix} ${vec.join(" \\\\ ")} \\end{bmatrix}`;
}
