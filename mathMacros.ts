export const MATH_MACROS: Record<string, string | [string, number]> = {
    "ihat": "\\hat{\\mathbf{i}}",
    "jhat": "\\hat{\\mathbf{j}}",
    "khat": "\\hat{\\mathbf{k}}",
    "rhat": "\\hat{\\mathbf{r}}",
    "thetahat": "\\hat{\\mathbf{\\theta}}",
    "unitvec": ["\\hat{\\mathbf{#1}}", 1],
    "arrowedvec": ["\\overset{\\normalsize\\rightarrow}{#1}", 1],
    "vec": ["\\overset{\\normalsize\\rightarrow}{\\mathbf{#1}}", 1], // Custom vector command using \overset

    "arcsec": "\\operatorname{arcsec}",
    "arccsc": "\\operatorname{arccsc}",
    "arccot": "\\operatorname{arccot}",
};
