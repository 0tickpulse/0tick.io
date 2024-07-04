import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";

import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeMathjax, { Options } from "rehype-mathjax/svg";
import { MATH_MACROS } from "./mathMacros";

const lightCodeTheme = themes.vsLight;
const darkCodeTheme = themes.vsDark;

const config = {
    title: "0tick.io",
    tagline: "My personal website",
    favicon: "img/favicon.ico",

    customFields: {
        mathJaxOptions: {
            loader: { load: ["[tex]/mathtools", "[tex]/cancel"] },
            tex: {
                tags: "ams",
                macros: MATH_MACROS,
                packages: { "[+]": ["autoload", "ams", "cancel", "mathtools", "html", "configmacros", "physics"] },
            },
            svg: {
                scale: 1.2,
            },
        } as Options,
    },

    // Set the production url of your site here
    url: "https://0tick.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",
    trailingSlash: false,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "0tickpulse", // Usually your GitHub org/user name.
    projectName: "0tick.io", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    markdown: {
        mermaid: true,
    },

    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
            type: "text/css",
            integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
            crossorigin: "anonymous",
        },
    ],

    plugins: ["docusaurus-plugin-sass"],
    themes: ["@docusaurus/theme-mermaid"],

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/0tickpulse/0tick.io/tree/main/",
                    routeBasePath: "/",
                    remarkPlugins: [remarkMath],
                    // rehypePlugins: [(options: Options) => rehypeKatex({
                    //     ...options,
                    //     trust: (context) => ['\\htmlId', '\\href'].includes(context.command),
                    //     strict: false,
                    //     macros: KATEX_MACROS
                    // })],
                    rehypePlugins: [
                        (options: Options) => {
                            config.customFields.mathJaxOptions = {
                                ...options,
                                ...config.customFields.mathJaxOptions,
                            };
                            return rehypeMathjax(config.customFields.mathJaxOptions);
                        },
                    ],
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/0tickpulse/0tick.io/tree/main/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.scss"),
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: "0tick.io",
            logo: {
                alt: "Logo",
                src: "img/logo.png",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "sidebarPortfolio",
                    position: "left",
                    label: "Portfolio",
                },
                {
                    type: "docSidebar",
                    sidebarId: "sidebarNotes",
                    position: "left",
                    label: "Notes",
                },
                {
                    type: "docSidebar",
                    sidebarId: "sidebarTools",
                    position: "left",
                    label: "Tools",
                },
                { to: "/blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/0tickpulse/0tick.io",
                    position: "right",
                    className: "header-github-link",
                    "aria-label": "GitHub repository",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} 0TickPulse. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    } satisfies Preset.ThemeConfig,
} satisfies Config;

export default config;
