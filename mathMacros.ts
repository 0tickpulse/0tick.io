export const MATH_MACROS: Record<string, string | [string, number]> = {
    "unitvec": ["\\hat{\\mathbf{#1}}", 1],
    "arrowedvec": ["\\overrightarrow{#1}", 1],
    // "vec": ["\\overrightarrow{\\mathbf{#1}}", 1], // Custom vector command using \overset
    "bvec": ["\\mathbf{\\vec{#1}}", 1],

    "arcsec": "\\operatorname{arcsec}",
    "arccsc": "\\operatorname{arccsc}",
    "arccot": "\\operatorname{arccot}",

    // custom colors for convenience and consistency
    "posX": "\\class{blue}{x}",
    "posY": "\\class{yellow}{y}",
    "posZ": "\\class{green}{z}",
    "posR": "\\class{red}{r}",
    "posT": "\\class{purple}{\\theta}",
    "ihatc": "\\class{blue}{\\vu{i}}",
    "jhatc": "\\class{yellow}{\\vu{j}}",
    "khatc": "\\class{green}{\\vu{k}}",
    "rhatc": "\\class{red}{\\vu{r}}",
    "thhatc": "\\class{purple}{\\vu{\\theta}}",
};
