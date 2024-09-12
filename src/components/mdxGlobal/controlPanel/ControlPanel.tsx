import "./styles.module.scss";

export function ControlPanel({ children, style, title = "Options" }: ControlPanel.Props) {
    return (
        <div style={{ ...style, ...ControlPanel.style }} id="control-panel" className="control-panel container">
            <div className="row">
                <h3>{title}</h3>
            </div>
            {children}
        </div>
    );
}

export namespace ControlPanel {
    export type Props = {
        children: React.ReactNode;
        style?: React.CSSProperties;
        title?: string;
    };

    export const style: React.CSSProperties = {};
}
