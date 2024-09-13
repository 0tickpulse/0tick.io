import { useEffect, useRef } from "react";

export function EditableValue({ style, value, onSubmit, width }: EditableValue.Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <input
            ref={inputRef}
            style={{ ...style, ...EditableValue.style, width }}
            type="text"
            value={value}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    onSubmit(inputRef.current?.value ?? "");
                }
                if (e.key === "Escape") {
                    onSubmit(value ?? "");
                }
            }}
            onChange={(e) => onSubmit(e.target.value)}
        ></input>
    );
};

export namespace EditableValue {
    export type Props = {
        style?: React.CSSProperties;
        value?: string;
        onSubmit?: (value: string) => void;
        width?: string;
    };

    export const style: React.CSSProperties = {
        display: "inline-block",
    };
}
