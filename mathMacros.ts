export const MATH_MACROS: Record<string, string | [string, number]> = {
    "ihat": "\\hat{\\mathbf{i}}",
    "jhat": "\\hat{\\mathbf{j}}",
    "khat": "\\hat{\\mathbf{k}}",
    "rhat": "\\hat{\\mathbf{r}}",
    "thetahat": "\\hat{\\mathbf{\\theta}}",
    "unitvec": ["\\hat{\\mathbf{#1}}", 1],
    "arrowedvec": ["\\overrightarrow{#1}", 1],
    // "vec": ["\\overrightarrow{\\mathbf{#1}}", 1], // Custom vector command using \overset
    "bvec": ["\\mathbf{\\vec{#1}}", 1],

    "arcsec": "\\operatorname{arcsec}",
    "arccsc": "\\operatorname{arccsc}",
    "arccot": "\\operatorname{arccot}",
};
