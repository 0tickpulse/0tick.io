import { ComponentProps, ReactNode, useState } from "react";
import { withState } from "./context";

const _Checkbox = withState(function ({ value, onChange }: Checkbox.Props) {
    const [checked, setChecked] = useState(value ?? false);
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
                setChecked(e.target.checked);
                onChange?.(e.target.checked);
            }}
        />
    );
});

export function Checkbox(props: Checkbox.Props) {
    return <_Checkbox {...props} />;
}

export namespace Checkbox {
    export type Props = {
        value?: boolean;
        onChange?: (value: boolean) => void;
    }
}
