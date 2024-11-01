import { ComponentProps, createRef, useState } from "react";
import { MathEquation } from "../../Math";
import { EditableValue } from "./EditableValue";
import { withState } from "./context";

export namespace SliderInput {
    export type Props = {
        latexOptions?: MathEquation.Props;
        value?: number;
        min: number;
        max: number;
        step?: number;
        onChange?: (value: number) => void;
    };
}

const _SliderInput = withState(function ({ latexOptions, value, min, max, step, onChange }: SliderInput.Props) {
    const input = createRef<HTMLInputElement>();
    const [inputValue, setInputValue] = useState((value ?? min + (max - min) / 2) || 0);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        const s = typeof e === "string" ? e : e.target.value;
        let v = Number(s);
        if (isNaN(v)) return;
        if (v < min) v = min;
        if (v > max) v = max;
        setInputValue(v);
        onChange && onChange(v);
    };
    return (
        <div style={{
            // align the input all the way to the right
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
        }}>
            <input type="range" value={inputValue} min={min} max={max} step={step} onChange={handleChange} ref={input} style={{ width: "100%" }} />
            <EditableValue value={(Math.round(inputValue * 100) / 100).toString()} onSubmit={handleChange} width="15%" />
        </div>
    );
});

export function SliderInput(props: ComponentProps<typeof _SliderInput>) {
    return <_SliderInput {...props} />;
}
