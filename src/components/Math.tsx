import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { TeX } from "mathjax-full/js/input/tex";
import config from "@site/docusaurus.config";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages";
import { mathjax } from "mathjax-full/js/mathjax";
import { SVG } from "mathjax-full/js/output/svg";
import { ReactNode, useEffect, useState } from "react";
import { Options } from "rehype-mathjax";
import { isEqual } from "lodash";

export namespace MathEquation {
    export type Props = {
        children: ReactNode;
        inline?: boolean;
    } & Options;
}

export function MathEquation({ children, inline = false, ...options }: MathEquation.Props): JSX.Element {
    const siteConfig = useDocusaurusContext().siteConfig;
    const newOptions = {
        ...(siteConfig.customFields.mathJaxOptions as Options),
        ...options,
    };
    const input = new TeX({
        packages: AllPackages,
        ...newOptions.tex,
    });
    const output = new SVG(newOptions.svg || undefined);
    // const output = new CHTML(newOptions.chtml || undefined);
    try {
        const doc = mathjax.document("", { InputJax: input, OutputJax: output });
        const domNode: HTMLElement = doc.convert(children.toString(), {
            display: !inline,
        });
        return <span dangerouslySetInnerHTML={{ __html: domNode.outerHTML }} />;
    } catch (e) {
        console.log(`Error in MathJax: ${e}`, {
            newOptions,
            siteConfig: siteConfig.customFields.mathJaxOptions,
            config: config.customFields.mathJaxOptions,
            eq: isEqual(siteConfig.customFields.mathJaxOptions, config.customFields.mathJaxOptions),
        });
    }
    // const doc = mathjax.document("", { InputJax: input, OutputJax: output });

    // const [html, setHtml] = useState<string>("");

    // useEffect(() => {
    //     setHtml(domNode.outerHTML);
    // }, [domNode]);

    return <div />;
}
