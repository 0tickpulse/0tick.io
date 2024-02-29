import React, { ReactNode, useState } from "react";
import './HoverableBox.module.scss'; // Import the SCSS file for styles

type HoverableBoxProps = {
    children?: ReactNode;
    triggerText: ReactNode;
    bgColor?: string;
    textColor?: string;
    darkBgColor?: string;
    darkTextColor?: string;
    href?: string;
};

export default function HoverableBox({ children, triggerText, bgColor = '#D1D5DB', textColor = '#000000', darkBgColor = '#4B5563', darkTextColor = '#FFFFFF', href }: HoverableBoxProps) {
    const [hovered, setHovered] = useState(false);

    const triggerStyle = {
        backgroundColor: hovered ? darkBgColor : bgColor,
        color: hovered ? darkTextColor : textColor,
    };

    return (
        <span className="hoverable-box">
            <div
                className="trigger"
                style={triggerStyle}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {href ? (
                    <a href={href} className="trigger-link" style={{ color: triggerStyle.color }}>
                        <span>{triggerText}</span>
                        <span className="link-icon">🔗</span>
                    </a>
                ) : (
                    <span className="trigger-text">{triggerText}</span>
                )}
            </div>
            {children && hovered && (
                <div className="content">
                    {children}
                </div>
            )}
        </span>
    );
}
