import React, { ReactNode } from "react";

export type CitationProps = {
    /**
     * The id of the citation, used for linking.
     * Should be unique within the page.
     */
    id: string;

    /**
     * The URL of the citation. Will be used as the href of the anchor.
     */
    url?: string;

    /**
     * The children of the citation.
     * This should be the text of the citation in MLA 9 format.
     */
    children?: ReactNode;
};

export default function Citation({ id, url, children }: CitationProps) {
    return url ? (
        <a href={url} id={id} target="_blank">
            {children}
        </a>
    ) : (
        <p id={id}>{children}</p>
    );
}
