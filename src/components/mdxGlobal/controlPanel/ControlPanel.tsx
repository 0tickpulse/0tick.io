import styles from "./styles.module.scss";

export function ControlPanel({ children, style, title = "Options" }: ControlPanel.Props) {
    return (
        <table style={{ ...style, ...ControlPanel.style }} id="control-panel" className={styles["control-panel"]}>
            <tbody>
                <tr>
                    <th>
                        <h3>{title}</h3>
                    </th>
                </tr>
                {children}
            </tbody>
        </table>
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
