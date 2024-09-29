import React, { useState, forwardRef, useEffect, useImperativeHandle, useCallback } from "react";
import { RootProps, MathBoxOptions, MathboxSelection } from "mathbox";
import { Cartesian, Mathbox, Swizzle } from "mathbox-react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Color, Vector3 } from "three";

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
            up: new Vector3(0, 0, 1)
        }
    },
    containerStyle: {
        height: "500px"
    },
};

const CustomMathbox = (props: Props) => {
    const { children, containerId, containerClass, containerStyle, onInitialized, ...others } = { ...MATHBOX_DEFAULT_PROPS, ...props };
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

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
