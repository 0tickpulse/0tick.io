import styles from "./Boxed.module.scss";

export type BoxedProps = {
    color?: string;
    fillOpacity?: number;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Puts a simple box around the children.
 * Useful for making a section of content stand out.
 */
export default function Boxed({
    color = "var(--ifm-font-color-base)",
    fillOpacity = 0.1,
    children,
    ...props
}: BoxedProps) {
    return (
        <div
            style={{
                border: `1px solid ${color}`,
                padding: "1em",
                margin: "1em 0",
                // set background color to {color} with {fillOpacity}
                backgroundColor: `rgba(${color}, ${fillOpacity})`,
            }}
            className={styles.boxed}
            {...props}
        >
            {children}
        </div>
    );
}
