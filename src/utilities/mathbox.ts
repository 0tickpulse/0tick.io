import config from "@generated/docusaurus.config";
import { isEqual } from "lodash";
import { TeX } from "@mathjax/src/js/input/tex.js";
// import { AllPackages } from "@mathjax/src/js/input/tex/AllPackages.js";
import { mathjax } from "@mathjax/src/js/mathjax.js";
import { CHTML } from "@mathjax/src/js/output/chtml.js";
import { Options } from "rehype-mathjax";
import { renderMathToHtml } from "@site/src/components/Math";

function mathboxLatexElement(el, text: string, inline = false, options: Options) {
    const { html, css } = renderMathToHtml(text, inline, options);
    return el(
        "div",
        {
            dangerouslySetInnerHTML: `<style>${css}</style>${html}`,
        }
    )
}

export { mathboxLatexElement };
