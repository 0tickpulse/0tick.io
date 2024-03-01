import React, { CSSProperties, ReactNode, useState } from "react";
import styles from "./HoverableBox.module.scss"; // Import the SCSS file for styles

type HoverableBoxProps = {
    children?: ReactNode;
    triggerText: ReactNode;
    color?: string;
    href?: string;
};

export default function HoverableBox({ children, triggerText, color = "var(--ifm-color-primary)", href }: HoverableBoxProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <span className={`${styles["hoverable-box"]}`}>
            <div className={`${styles["trigger"]}`} style={{ color, borderColor: color }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {href ? (
                    <a href={href} className={`${styles["trigger-link"]}`} style={{ color }}>
                        <span>{triggerText}</span>
                        <span className={`${styles["link-icon"]}`}>🔗</span>
                    </a>
                ) : (
                    <span className={`${styles["trigger-text"]}`}>{triggerText}</span>
                )}
            </div>
            {children && hovered && <div className={`${styles["content"]}`}>{children}</div>}
        </span>
    );
}
