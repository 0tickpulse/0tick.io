import React, { useEffect, useState, forwardRef, useImperativeHandle, ReactNode, useMemo, useRef } from "react";
import { Color } from "three";
import { mathBox, RootProps, MathboxSelection, MathBoxOptions, NodeType } from "mathbox";
import { isEqual } from "lodash";

export type WithChildren<T> = {
    children?: ReactNode | ReactNode[];
} & T;
type Props = WithChildren<
    {
        container: HTMLElement;
        options?: MathBoxOptions;
    } & RootProps
>;

function useDeepCompareMemo<T>(value: T, initial: T): T {
    const oldValue = useRef<T>(initial);
    const memoOptions = useMemo(() => {
        if (isEqual(value, oldValue.current)) return oldValue.current;
        oldValue.current = value;
        return value;
    }, [value]);
    return memoOptions;
}

const MathboxAPIContext = React.createContext<MathboxSelection<NodeType> | null>(null);

const Mathbox = (props: Props, ref: React.Ref<MathboxSelection<"root"> | null>) => {
    const { container, children, options, ...rootProps } = props;
    const mathboxOptions = useDeepCompareMemo(options ?? {}, {});
    const [selection, setSelection] = useState<MathboxSelection<"root"> | null>(null);
    useEffect(() => {
        if (!container) return () => {};

        const mathbox = mathBox({
            ...mathboxOptions,
            element: container,
        });
        setSelection(mathbox);

        /**
         * TODO: Should Mathbox component allow setting these more easily?
         */
        mathbox.three.renderer.setClearColor(new Color(0xffffff), 1.0);
        mathbox.three.camera.position.set(1, 1, 2);
        return () => {
            mathbox.select("*").remove();
            mathbox.three.destroy();
            setSelection(null);
        };
    }, [container, mathboxOptions]);

    useEffect(() => {
        if (!selection) return;
        selection.set(rootProps);
    }, [selection, rootProps]);

    useImperativeHandle(ref, () => selection, [selection]);
    return (
        selection && (
            <MathboxAPIContext.Provider value={selection}>
                <ThreestrapContext.Provider value={selection.three}>{children}</ThreestrapContext.Provider>
            </MathboxAPIContext.Provider>
        )
    );
};

export default forwardRef(Mathbox);
