import { ComponentProps, useState } from "react";
import { withState } from "./context";

type SNS = string | number | readonly string[];

function handleOptions<TKey extends SNS, TValue extends SNS>(options: Dropdown.Props<TKey, TValue>["options"]): [TKey, TValue][] {
    if (Array.isArray(options)) {
        return options[0] instanceof Array ? (options as [TKey, TValue][]) : (options as TValue[]).map((v) => [v, v] as unknown as [TKey, TValue]);
    }
    return Object.entries(options) as [TKey, TValue][];
}

const _Dropdown = withState(function <TKey extends SNS, TValue extends SNS>({ value, options, onChange }: Dropdown.Props<TKey, TValue>) {
    const [selection, setSelection] = useState<TKey>(value ?? ("Select" as TKey));
    function handleClick(value: TKey) {
        setSelection(value);
        onChange?.(value);
    }
    return (
        <div className="dropdown dropdown--hoverable" style={Dropdown.style}>
            <button className="button button--primary button--block">{selection}</button>
            <ul className="dropdown__menu" style={{ zIndex: 1 }}>
                {handleOptions(options).map(([k, v], i) => (
                    <li
                        key={i}
                        value={v}
                        onClick={() => handleClick(k)}
                        className={value === k ? "dropdown__link dropdown__link--active" : "dropdown__link"}
                        style={{ zIndex: 1 }}
                    >
                        {k}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export function Dropdown(props: ComponentProps<typeof _Dropdown>) {
    return <_Dropdown {...props} />;
}

export namespace Dropdown {
    export type Props<TKey extends SNS, TValue extends SNS> = {
        value?: TKey;
        options: [TKey, TValue][] | TValue[] | { [key: string]: TValue };
        onChange?: (value: TKey) => void;
    };
    export const style: React.CSSProperties = {};
}
