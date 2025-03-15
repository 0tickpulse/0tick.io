import React, { ChangeEvent, CSSProperties, FocusEvent, HTMLAttributes, KeyboardEvent, useEffect, useRef, useState } from "react";

const styles: { [key: string]: CSSProperties } = {
    input: {
        padding: 0,
        margin: "0 2px",
        textAlign: "center",
        border: "1px solid",
        background: "transparent",
        width: "50px",
        height: "50px",
    },
    inputFocus: {
        outline: "none",
        boxShadow: "none",
    },
};

export namespace PinItem {
    export type Props = {
        initialValue?: string;
        onChange: (value: string, isPasting?: boolean) => void;
        onBackspace: () => void;
        onPaste?: (value: string) => void;
        secret?: boolean;
        secretDelay?: number;
        disabled?: boolean;
        type?: "numeric" | "custom";
        inputMode?: HTMLAttributes<any>["inputMode"];
        validate?: (value: string) => boolean;
        inputStyle?: CSSProperties;
        inputFocusStyle?: CSSProperties;
        autoSelect?: boolean;
        regexCriteria?: RegExp;
        ariaLabel?: string;
        placeholder?: string;
    };
}

export function PinItem({
    initialValue = "",
    onChange,
    onBackspace,
    onPaste,
    secret = false,
    secretDelay,
    disabled = false,
    type = "numeric",
    inputMode,
    validate,
    inputStyle = {},
    inputFocusStyle = {},
    autoSelect = false,
    regexCriteria = /^[a-zA-Z0-9]+$/,
    ariaLabel = "",
    placeholder = "",
}: PinItem.Props) {
    const validateValue = (value: string): string => {
        if (secretDelay) {
            setSecretDelayed(value);
        }

        if (validate) {
            return String(validate(value));
        }

        if (type === "numeric") {
            const isInteger = /^[0-9]$/.test(value);
            return isInteger ? value : "";
        }

        if (regexCriteria.test(value)) {
            return value.toUpperCase();
        }

        return "";
    };
    const [value, setValue] = useState<string>(validateValue(initialValue));
    const [showSecret, setShowSecret] = useState<boolean>(secret);
    const [focus, setFocus] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const secretTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (secretTimeoutRef.current) {
                clearTimeout(secretTimeoutRef.current);
            }
        };
    }, []);

    const setSecretDelayed = (value: string) => {
        setShowSecret(false);
        secretTimeoutRef.current = setTimeout(() => {
            setShowSecret(!!value);
        }, secretDelay);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const updatedValue = validateValue(e.target.value);
        if (value === updatedValue) return;

        if (updatedValue.length < 2) {
            setValue(updatedValue);
            onChange(updatedValue);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && (!value || value.length === 0)) {
            onBackspace();
        }
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        if (autoSelect) {
            e.target.select();
        }
        setFocus(true);
    };

    const handleBlur = () => {
        setFocus(false);
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        if (!onPaste) return;

        const pastedValue = e.clipboardData.getData("text");
        onPaste(pastedValue);
    };

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <input
            disabled={disabled}
            className="pincode-input-text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder || value}
            aria-label={ariaLabel || value}
            maxLength={1}
            autoComplete="off"
            type={showSecret ? "password" : type === "numeric" ? "tel" : type || "text"}
            inputMode={inputMode || "text"}
            pattern={type === "numeric" ? "[0-9]*" : "^[a-zA-Z0-9]+$"}
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onPaste={handlePaste}
            style={{
                ...styles.input,
                ...inputStyle,
                ...(focus ? { ...styles.inputFocus, ...inputFocusStyle } : {}),
            }}
            value={value}
        />
    );
}
