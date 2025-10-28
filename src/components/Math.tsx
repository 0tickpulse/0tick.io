import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { TeX } from "@mathjax/src/js/input/tex.js";
import config from "@site/docusaurus.config";
// import { AllPackages } from "@mathjax/src/js/input/tex/AllPackages";
import { mathjax } from "@mathjax/src/js/mathjax.js";
import { CHTML } from "@mathjax/src/js/output/chtml.js";
import { SVG } from "@mathjax/src/js/output/svg.js";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Options } from "rehype-mathjax";
import { isEqual } from "lodash";
import { LiteElement } from "@mathjax/src/js/adaptors/lite/Element.js";

import { liteAdaptor } from "@mathjax/src/js/adaptors/liteAdaptor.js";
import { HTMLAdaptor } from "@mathjax/src/js/adaptors/HTMLAdaptor.js";
import { RegisterHTMLHandler } from "@mathjax/src/js/handlers/html.js";
import "@mathjax/src/js/util/asyncLoad/esm.js";

// MathJax packages
// "autoload",
// "boldsymbol",
// "mhchem",
// "newcommand",
// "gensymb",
// "ams",
// "cancel",
// "mathtools",
// "html",
// "configmacros",
// "physics",
import "@mathjax/src/js/input/tex/base/BaseConfiguration.js";
import "@mathjax/src/js/input/tex/autoload/AutoloadConfiguration.js";
import "@mathjax/src/js/input/tex/boldsymbol/BoldsymbolConfiguration.js";
import "@mathjax/src/js/input/tex/mhchem/MhchemConfiguration.js";
import "@mathjax/src/js/input/tex/newcommand/NewcommandConfiguration.js";
import "@mathjax/src/js/input/tex/gensymb/GensymbConfiguration.js";
import "@mathjax/src/js/input/tex/ams/AmsConfiguration.js";
import "@mathjax/src/js/input/tex/cancel/CancelConfiguration.js";
import "@mathjax/src/js/input/tex/mathtools/MathtoolsConfiguration.js";
import "@mathjax/src/js/input/tex/html/HtmlConfiguration.js";
import "@mathjax/src/js/input/tex/configmacros/ConfigMacrosConfiguration.js";
import "@mathjax/src/js/input/tex/physics/PhysicsConfiguration.js";
import { TextNode } from "@mathjax/src/js/core/MmlTree/MmlNode.js";

export namespace MathEquation {
    export type Props = {
        children: ReactNode;
        inline?: boolean;
    } & Options;
}
export function renderMathToHtml(
    texInput: string,
    inline = false,
    options: Options = {}
): { html: string; css: string } {
    const adaptor = liteAdaptor({ fontSize: 16 }); // 1em = 16px
    RegisterHTMLHandler(adaptor);

    try {
        const input = new TeX({
            // packages: AllPackages,
            ...options.tex,
            formatError(jax, err) {
                console.error(err.message);
            },
        });

        const output = new CHTML<HTMLElement, TextNode, Document>({
            ...options.chtml,
            fontURL: "https://cdn.jsdelivr.net/npm/@mathjax/mathjax-newcm-font/chtml/woff2",
        });

        const doc = mathjax.document("", { InputJax: input, OutputJax: output });
        const domNode: LiteElement = doc.convert(texInput, {
            display: !inline,
        });

        const html = adaptor.outerHTML(domNode);
        const css = adaptor.cssText(output.styleSheet(doc));

        return { html, css };
    } catch (e) {
        console.error("Error in renderMathToHtml:", e);
        throw e;
    }
}

export function MathEquation({ children, inline = false, ...options }: MathEquation.Props): JSX.Element {
    const texInput = children.toString();
    const ref = useRef<HTMLDivElement>(null);
    const siteConfig = useDocusaurusContext().siteConfig;
    const mergedOptions = {
        ...(siteConfig.customFields.mathJaxOptions as Options),
        ...options,
    };

    useEffect(() => {
        let mounted = true;
        try {
            const { html, css } = renderMathToHtml(texInput, inline, mergedOptions);
            if (mounted && ref.current) {
                ref.current.innerHTML = `<style>${css}</style>${html}`;
            }
        } catch (e) {
            // already logged in renderMathToHtml
        }
        return () => {
            mounted = false;
        };
    }, [texInput, inline, // keep mergedOptions stable by depending on its JSON string
        JSON.stringify(mergedOptions)]);

    return <div ref={ref} />;
}
