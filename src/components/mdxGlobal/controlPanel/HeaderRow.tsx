export function HeaderRow({ style, children }: HeaderRow.Props) {
    return (
        <tr style={{ ...HeaderRow.style, ...style }}>
            <th colSpan={2}>
                <h3>{children}</h3>
            </th>
        </tr>
    );
}

export namespace HeaderRow {
    export type Props = {
        style?: React.CSSProperties;
        children: React.ReactNode;
    };

    export const style: React.CSSProperties = {
        paddingTop: "2rem",
        paddingBottom: "1rem",
    };
}
