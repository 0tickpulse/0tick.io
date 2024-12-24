import { MathBoxOptions, MathboxSelection, RootProps } from "mathbox";
import { Mathbox } from "mathbox-react";
import React, { forwardRef, useCallback, useState } from "react";
import { Color, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type Props = {
    containerId?: string;
    containerClass?: string;
    containerStyle?: React.CSSProperties;
    options?: MathBoxOptions;
    children?: React.ReactNode;
    onInitialized?: (mathbox: MathboxSelection<"root">) => void;
} & RootProps;

const MATHBOX_DEFAULT_PROPS: Props = {
    options: {
        plugins: ["core", "controls", "cursor"],
        controls: {
            klass: OrbitControls,
        },
        camera: {
            up: new Vector3(0, 0, 1),
        }
    },
    containerStyle: {
        height: "500px"
    },
    containerClass: "math-container"
};

const CustomMathbox = forwardRef((props: Props, ref: React.Ref<MathboxSelection<"root">>) => {
    const { children, containerId, containerClass, containerStyle, onInitialized, ...others } = { ...MATHBOX_DEFAULT_PROPS, ...props };
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    console.log({ props, ref })

    const internalRef = useCallback((mathbox: MathboxSelection<"root"> | null) => {
        if (mathbox) {
            console.log("Setting selection");
            mathbox.three.renderer.setClearColor(new Color(0x000000), 1.0);
            mathbox.three.camera.position.set(1, 1, 2);
            onInitialized?.(mathbox);

            if (ref) {
                if (typeof ref === "function") {
                    ref(mathbox);
                } else {
                    ref.current = mathbox;
                }
            }
        }
    }, []);

    return (
        <div ref={setContainer} id={containerId} className={containerClass} style={containerStyle}>
            {container && (
                <Mathbox ref={internalRef} container={container} {...others}>
                    {children}
                </Mathbox>
            )}
        </div>
    );
});

// Old Mathbox component, deprecated

/**
 * @deprecated Use CustomMathbox instead
 */
const OldMathbox = (props: Props) => {
    const { children, containerId, containerClass, containerStyle, onInitialized, ...others } = { ...MATHBOX_DEFAULT_PROPS, ...props };
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    others.options.camera = undefined; // Remove camera option

    const ref = useCallback((mathbox: MathboxSelection<"root"> | null) => {
        if (mathbox) {
            console.log("Setting selection");
            mathbox.three.renderer.setClearColor(new Color(0x000000), 1.0);
            mathbox.three.camera.position.set(1, 1, 2);


            onInitialized?.(mathbox);
        }
    }, []);

    return (
        <div ref={setContainer} id={containerId} className={containerClass} style={containerStyle}>
            {container && (
                <Mathbox ref={ref} container={container} {...others}>
                    {children}
                </Mathbox>
            )}
        </div>
    );
};

export default CustomMathbox;
export { CustomMathbox, OldMathbox };
