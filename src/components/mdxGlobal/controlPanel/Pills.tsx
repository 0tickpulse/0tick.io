import { ComponentProps, ReactNode, useState } from "react";
import { withState } from "./context";

type SNS = string | number | readonly string[];

function handleOptions<TKey extends SNS, TValue extends ReactNode>(options: Pills.Props<TKey, TValue>["options"]): [TKey, TValue][] {
    if (Array.isArray(options)) {
        return (options as TValue[]).map((v) => [v, v] as unknown as [TKey, TValue]);
    }
    return Object.entries(options) as [TKey, TValue][];
}

const _Pills = withState(function <TKey extends SNS, TValue extends ReactNode>({ value, options, onChange }: Pills.Props<TKey, TValue>) {
    const [selection, setSelection] = useState<TKey>(value ?? ("Select" as TKey));
    function handleClick(value: TKey) {
        setSelection(value);
        onChange?.(value);
    }
    return (
        <ul className="pills" style={{ zIndex: 1 }}>
            {handleOptions(options).map(([k, v], i) => (
                <li
                    key={i}
                    onClick={() => handleClick(k as TKey)}
                    className={`pills__item ${selection === k ? "pills__item--active" : ""}`}
                    style={{ zIndex: 1, marginTop: "0" }}
                >
                    {v}
                </li>
            ))}
        </ul>
    );
});

export function Pills(props: ComponentProps<typeof _Pills>) {
    return <_Pills {...props} />;
}

export namespace Pills {
    export type Props<TKey extends SNS, TValue extends ReactNode> = {
        value?: TKey;
        options: TValue[] | { [key: string]: TValue };
        onChange?: (value: TKey) => void;
    };
    export const style: React.CSSProperties = {};
}
