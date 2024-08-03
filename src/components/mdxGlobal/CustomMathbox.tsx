import React, { useState, forwardRef, useEffect, useImperativeHandle, useCallback } from "react";
import { RootProps, MathBoxOptions, MathboxSelection } from "mathbox";
import { Mathbox } from "mathbox-react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Color } from "three";

type Props = {
    containerId?: string;
    containerClass?: string;
    containerStyle?: React.CSSProperties;
    options?: MathBoxOptions;
    children?: React.ReactNode;
} & RootProps;

const MATHBOX_DEFAULT_PROPS: Props = {
    options: {
        plugins: ["core", "controls", "cursor"],
        controls: {
            klass: OrbitControls,
        },
    },
    containerStyle: {
        height: "500px"
    }
};

const CustomMathbox = (props: Props) => {
    const { children, containerId, containerClass, containerStyle, ...others } = { ...MATHBOX_DEFAULT_PROPS, ...props };
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    const ref = useCallback((mathbox: MathboxSelection<"root"> | null) => {
        if (mathbox) {
            console.log("Setting selection");
            mathbox.three.renderer.setClearColor(new Color(0x000000), 1.0);
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
