export type BoxedProps = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Puts a simple box around the children.
 * Useful for making a section of content stand out.
 */
export default function Boxed({ children, ...props }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                border: "1px solid var(--ifm-font-color-base)",
                padding: "1em",
                margin: "1em 0",
            }}
            {...props}
        >
            {children}
        </div>
    );
}
