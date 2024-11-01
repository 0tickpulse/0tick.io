import config from "@generated/docusaurus.config";
import { isEqual } from "lodash";
import { TeX } from "mathjax-full/js/input/tex.js";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";
import { mathjax } from "mathjax-full/js/mathjax.js";
import { SVG } from "mathjax-full/js/output/svg.js";
import { Options } from "rehype-mathjax";

function mathboxLatexElement(el, text: string, inline = false, options: Options) {
    const siteConfig = config;
    const newOptions = {
        ...(siteConfig.customFields.mathJaxOptions as Options),
        ...options,
    };
    const input = new TeX({
        packages: AllPackages,
        ...newOptions.tex,
    });
    const output = new SVG(newOptions.svg || undefined);
    // co`nst output = new CHTML(newOptions.chtml || undefined);
    try {
        const doc = mathjax.document("", { InputJax: input, OutputJax: output });
        const domNode: HTMLElement = doc.convert(text, {
            display: !inline,
        });
        return el(
            "div",
            { dangerouslySetInnerHTML: { __html: domNode.outerHTML } },
        )
    } catch (e) {
        console.log(`Error in MathJax: ${e}`, {
            newOptions,
            siteConfig: siteConfig.customFields.mathJaxOptions,
            config: siteConfig.customFields.mathJaxOptions,
            eq: isEqual(siteConfig.customFields.mathJaxOptions, siteConfig.customFields.mathJaxOptions),
        });
    }
}

export { mathboxLatexElement };
