import config from "@site/docusaurus.config";
import { TeX } from "mathjax-full/js/input/tex";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages";
import { mathjax } from "mathjax-full/js/mathjax";
import { SVG } from "mathjax-full/js/output/svg";
import { CHTML } from "mathjax-full/js/output/chtml";
import { ReactNode } from "react";
import { Options } from "rehype-mathjax";

export default function MathEquation({ children, ...options }: { children: ReactNode } & Options): JSX.Element {
    const newOptions = {
        ...config.customFields.mathJaxOptions,
        ...options,
    };
    const input = new TeX({
        packages: AllPackages,
        ...options.tex,
    });
    const output = new SVG(newOptions.svg || undefined);
    // const output = new CHTML(newOptions.chtml || undefined);
    const doc = mathjax.document("", { InputJax: input, OutputJax: output });
    const domNode: HTMLElement = doc.convert(children.toString(), newOptions);
    return <div dangerouslySetInnerHTML={{ __html: domNode.outerHTML }} />;
}
