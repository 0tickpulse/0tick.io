import React from "react";
import HoverableBox from "./HoverableBox";

export type CiteProps = {
    /**
     * The id of the citation, used for linking.
     */
    id: string;

    page?: number | [number, number];
};

export default function Cite(props: CiteProps) {
    // format: (id) or (id, page)
    // page can be a single number or a range
    // range is formatted as start-end
    const text = (
        <>
            Cite: {props.id}
            {props.page && <>, {Array.isArray(props.page) ? props.page[0] + "-" + props.page[1] : props.page}</>}
        </>
    );
    const link = "#" + props.id;

    return (
        <HoverableBox
            triggerText={text}
            href={link}
        />
    );
}
