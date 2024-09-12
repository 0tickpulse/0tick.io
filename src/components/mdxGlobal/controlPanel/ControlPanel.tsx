import "./styles.module.scss";

export function ControlPanel({ children, style, title = "Options" }: ControlPanel.Props) {
    return (
        <div style={{ ...style, ...ControlPanel.style }} id="control-panel" className="control-panel">
            <table>
                <tbody>
                    <tr style={{ border: "none" }}>
                        <th style={{ border: "none" }} colSpan={2}>{title}</th>
                    </tr>
                    {children}
                </tbody>
            </table>
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
