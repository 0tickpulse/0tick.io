export const MATH_MACROS: Record<string, string | [string, number]> = {
    "ihat": "\\hat{\\mathbf{i}}",
    "jhat": "\\hat{\\mathbf{j}}",
    "khat": "\\hat{\\mathbf{k}}",
    "rhat": "\\hat{\\mathbf{r}}",
    "thetahat": "\\hat{\\boldsymbol{\\theta}}",
    "unitvec": ["\\hat{\\mathbf{#1}}", 1],
    "arrowedvec": ["\\overrightarrow{#1}", 1],
    "vec": ["\\mathbf{#1}", 1],

    "arcsec": "\\operatorname{arcsec}",
    "arccsc": "\\operatorname{arccsc}",
    "arccot": "\\operatorname{arccot}",
};
