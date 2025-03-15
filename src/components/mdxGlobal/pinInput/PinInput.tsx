// Adapted from react-pin-input library
import React, { useEffect, useRef, useState } from "react";
import { PinItem } from "./PinItem";

export function PinInput({
    initialValue = "",
    length,
    type = "numeric",
    onComplete = () => {},
    validate = null,
    secret = false,
    focus = false,
    disabled = false,
    onChange = () => {},
    inputMode,
    style = {},
    inputStyle = {},
    inputFocusStyle = {},
    autoSelect = true,
    regexCriteria = /^[a-zA-Z0-9]+$/,
    ariaLabel = "",
    placeholder = "",
}: PinInput.Props) {
    const [values, setValues] = useState(
        Array(length)
            .fill("")
            .map((_, i) => initialValue.toString()[i] || "")
    );
    const elements = useRef([]);

    useEffect(() => {
        if (focus && length) {
            elements.current[0]?.focus();
        }
    }, [focus, length]);

    const clear = () => {
        setValues(Array(length).fill(""));
        elements.current[0]?.focus();
    };

    const handleFocus = () => {
        if (length) {
            elements.current[0]?.focus();
        }
    };

    const handleItemChange = (value: string, isPasting: boolean, index: number) => {
        const updatedValues = [...values];
        updatedValues[index] = value;
        setValues(updatedValues);

        if (value.length === 1 && index < length - 1) {
            elements.current[index + 1]?.focus();
        }

        const pin = updatedValues.join("");

        if (!isPasting) {
            onChange(pin, index);
        }

        if (pin.length === length) {
            if (isPasting && index < length - 1) {
                return;
            }
            onComplete(pin, index);
        }
    };

    const handleBackspace = (index: number) => {
        if (index > 0) {
            elements.current[index - 1]?.focus();
        }
    };

    const handlePaste = (value: string) => {
        if (value.length !== length) {
            return;
        }

        const updatedValues = value.split("");
        setValues(updatedValues);

        updatedValues.forEach((val, index) => {
            elements.current[index]?.update(val, true);
        });
    };

    return (
        <div style={style} className="pincode-input-container">
            {values.map((val, i) => (
                <PinItem
                    key={i}
                    initialValue={val}
                    ref={(el: any) => (elements.current[i] = el)}
                    disabled={disabled}
                    onBackspace={() => handleBackspace(i)}
                    secret={secret}
                    onChange={(v, isPasting) => handleItemChange(v, isPasting, i)}
                    type={type}
                    inputMode={inputMode}
                    validate={validate}
                    inputStyle={inputStyle}
                    inputFocusStyle={inputFocusStyle}
                    autoSelect={autoSelect}
                    onPaste={i === 0 ? handlePaste : null}
                    regexCriteria={regexCriteria}
                    ariaLabel={ariaLabel}
                    placeholder={placeholder}
                    secretDelay={undefined}
                />
            ))}
        </div>
    );
}

export namespace PinInput {
    export type Props = {
        initialValue?: string | number;
        length: number;
        type?: "numeric" | "custom";
        onComplete?: (pin: string, index: number) => void;
        validate?: (value: string) => boolean;
        secret?: boolean;
        disabled?: boolean;
        focus?: boolean;
        onChange?: (pin: string, index: number) => void;
        inputMode?: React.HTMLAttributes<any>["inputMode"];
        style?: React.CSSProperties;
        inputStyle?: React.CSSProperties;
        inputFocusStyle?: React.CSSProperties;
        autoSelect?: boolean;
        regexCriteria?: RegExp;
        ariaLabel?: string;
        placeholder?: string;
    };
}
