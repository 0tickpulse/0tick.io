import { themes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const lightCodeTheme = themes.vsLight;
const darkCodeTheme = themes.vsDark;

const config = {
    title: "0tick.io",
    tagline: "My personal website",
    favicon: "img/favicon.ico",

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
        mermaid: true
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
                    rehypePlugins: [rehypeKatex],
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
