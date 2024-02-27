import React, { ReactNode } from "react";
import katex from "katex";

export default function MathEquation({ children, ...options }: { children: ReactNode } & katex.KatexOptions): JSX.Element {
    return <span dangerouslySetInnerHTML={{ __html: katex.renderToString(children.toString(), options) }} />;
}
