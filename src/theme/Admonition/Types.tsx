import React from "react";
import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";
import AdmonitionLayout from "@theme/Admonition/Layout";

// import React, {type ReactNode} from 'react';
// import clsx from 'clsx';
// import Translate from '@docusaurus/Translate';
// import type {Props} from '@theme/Admonition/Type/Info';
import IconInfo from "@theme/Admonition/Icon/Info";

// const infimaClassName = 'alert alert--info';

// const defaultProps = {
//   icon: <IconInfo />,
//   title: (
//     <Translate
//       id="theme.admonition.info"
//       description="The default label used for the Info admonition (:::info)">
//       info
//     </Translate>
//   ),
// };

// export default function AdmonitionTypeInfo(props: Props): ReactNode {
//   return (
//     <AdmonitionLayout
//       {...defaultProps}
//       {...props}
//       className={clsx(infimaClassName, props.className)}>
//       {props.children}
//     </AdmonitionLayout>
//   );
// }

const parseLinkFromAdmonitionTitle = (title: string): string | undefined => {
    // The input is "Definition/Proposition/etc X.Y.Z (title)"
    // We want to extract "X.Y.Z"
    // The first word can be anything
    if (typeof title !== "string") {
        return undefined;
    }
    const regex = /^[^\s]+\s+([\d.]+)\s*\(.*\)$/;
    const match = title.match(regex);
    return match?.[1];
};

const AdmonitionLink = ({ title }) => {
    const link = parseLinkFromAdmonitionTitle(title);
    if (!link) {
        return <>{title}</>; // No link available
    }
    return (
        <a href={`#${link.replace(/\./g, "-")}`}>
            {title}
        </a>
    );
};

const ProblemAdmonition = (props) => {
    return (
        // <div style={{ border: "solid red", padding: 10 }}>
        //     <h5 style={{ color: "blue", fontSize: 30 }}>{props.title}</h5>
        //     <div>{props.children}</div>
        // </div>
        <AdmonitionLayout title={props.title} {...props} className="alert alert--danger">
            {props.children}
        </AdmonitionLayout>
    );
};

const TheoremAdmonition = (props) => {
    return (
        <AdmonitionLayout icon={<IconInfo />} {...props} title={<AdmonitionLink title={props.title} />} className="alert alert--secondary">
            {props.children}
        </AdmonitionLayout>
    );
};

const DefinitionAdmonition = (props) => {
    return (
        // <div style={{ border: "solid orange", padding: 10 }}>
        //     <h5 style={{ color: "darkorange", fontSize: 30 }}>{props.title}</h5>
        //     <div>{props.children}</div>
        // </div>

        <AdmonitionLayout icon={<IconInfo />} {...props} title={<AdmonitionLink title={props.title} />} className="alert alert--primary">
            {props.children}
        </AdmonitionLayout>
    );
};

const PropositionAdmonition = (props) => {
    return (
        // <div style={{ border: "solid purple", padding: 10 }}>
        //     <h5 style={{ color: "indigo", fontSize: 30 }}>{props.title}</h5>
        //     <div>{props.children}</div>
        // </div>
        <AdmonitionLayout icon={<IconInfo />} {...props} title={<AdmonitionLink title={props.title} />} className="alert alert--info">
            {props.children}
        </AdmonitionLayout>
    );
};

const ExampleAdmonition = (props) => {
    return (
        <AdmonitionLayout icon={<IconInfo />} {...props} title={<AdmonitionLink title={props.title} />} className="alert alert--success">
            {props.children}
        </AdmonitionLayout>
    );
};

const BoxAdmonition = (props) => {
    return (
        <AdmonitionLayout icon={<IconInfo />} {...props} title={<AdmonitionLink title={props.title} />} className="alert alert--warning">
            {props.children}
        </AdmonitionLayout>
    );
};

const AdmonitionTypes = {
    ...DefaultAdmonitionTypes,

    // Add all your custom admonition types here...
    // You can also override the default ones if you want
    problem: ProblemAdmonition,

    theorem: TheoremAdmonition,
    definition: DefinitionAdmonition,
    proposition: PropositionAdmonition,
    example: ExampleAdmonition,
    box: BoxAdmonition,
};

export default AdmonitionTypes;
