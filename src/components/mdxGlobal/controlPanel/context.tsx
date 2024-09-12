import { createContext, memo } from "react";
import { MathEquation } from "../../Math";
import styles from "./styles.module.scss";

const ControlPanelContext = createContext({});
export default ControlPanelContext;

export function Label({ label, latex, latexOptions }: Label.Props) {
    return (
        <div style={Label.bodyStyle}>
            <span style={Label.textStyle}>
                {latex ? (
                    <MathEquation inline={true} {...latexOptions}>
                        {label}
                    </MathEquation>
                ) : (
                    label
                )}
            </span>
        </div>
    );
}

export namespace Label {
    export type Props = {
        label: React.ReactNode;
        latex?: boolean;
        latexOptions?: MathEquation.Props;
    };
    export const textStyle: React.CSSProperties = {
        verticalAlign: "sub",
    };
    export const bodyStyle: React.CSSProperties = {};
}

export function Container({ label, latex, latexOptions, LabelComponent, children }: Container.Props) {
    return (
        <div className="row row--no-gutters" style={Container.styles}>
            <div className="col col--2">
                <Label label={LabelComponent ? <LabelComponent label={label} /> : label || ""} latex={latex} latexOptions={latexOptions} />
            </div>
            <div className="col col--10">{children}</div>
        </div>
    );
}

export namespace Container {
    export type Props = {
        label?: string;
        latex?: boolean;
        latexOptions?: MathEquation.Props;
        LabelComponent?: React.ComponentType<Label.Props>;
        children?: React.ReactNode;
    };
    export const Memo = memo(Container);
    export const styles: React.CSSProperties = {};
}

export function withState<CProps extends Container.Props, PProps>(Comp: React.ComponentType<PProps>) {
    return memo((props: CProps & PProps) => (
        <ControlPanelContext.Consumer>
            {(state) => (
                <Container.Memo {...props}>
                    <Comp {...props} {...state} />
                </Container.Memo>
            )}
        </ControlPanelContext.Consumer>
    ));
}
