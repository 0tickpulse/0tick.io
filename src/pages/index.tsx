import React, { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import { FaDiscord, FaGithub } from "react-icons/fa6";
import styles from "./index.module.scss";

type PortfolioItemProps = {
    title: string;
    description: string;
    image?: React.ImgHTMLAttributes<HTMLImageElement>;
    imageOverride?: ReactNode;
    link?: string;
    linkText?: string;
};
function PortfolioItem({ title, description, image, imageOverride, link, linkText = "Learn more" }: PortfolioItemProps) {
    return (
        <div className={`card ${styles["scrollable-item"]}`}>
            {(image || imageOverride) && <div className="card__image">{imageOverride || <img height={300} {...image} />}</div>}
            <div className="card__header">
                <h3>{title}</h3>
            </div>
            <div className="card__body">
                <p>{description}</p>
            </div>
            {link && (
                <div className="card__footer">
                    <Link className="button button--secondary button--lg" to={link}>
                        {linkText}
                    </Link>
                </div>
            )}
        </div>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    const [shrunk, setShrunk] = useState(false);
    const [iconGlow, setIconGlow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShrunk(true);
            setIconGlow(true);
        }, 500);
    });

    return (
        <Layout title={`Hello from ${siteConfig.title}`} description="My own personal website. Contains portfolio, blog, notes, and tools!">
            <div className={styles.container}>
                <div className={`${styles.title} ${shrunk ? styles.shrunk : ""} ${iconGlow ? styles.glow : ""}`}>
                    <img src="/img/logo.png" alt="0tick.io logo" />
                    <h1>Hi, I'm 0TickPulse.</h1>
                    I'm a student, and this is my personal website.
                    <div className={styles.socials}>
                        {/* <a href="https://github.com/0tickpulse" className="header-github-link"></a>
                        <a href="" className="header-discord-link"></a>
                        <a href=""></a> */}
                        <a href="https://discord.com/users/546349864527855636">
                            <FaDiscord size={35} />
                        </a>
                        <a href="https://github.com/0tickpulse">
                            <FaGithub size={35} />
                        </a>
                    </div>
                </div>
                <div className={styles.row}>
                    <h2>Stuff I've worked on</h2>
                    <div className={styles.items}>
                        <PortfolioItem
                            title="Megizen"
                            description="Interop between the ModelEngine and Denizen plugins for Minecraft."
                            link="https://github.com/0tickpulse/megizen"
                            image={{ src: "/img/megizen.png", alt: "Model of a mob" }}
                        />
                        <PortfolioItem
                            title="TickMC"
                            description="My own Minecraft server, still in development."
                            link="https://tick-mc.net/"
                            image={{ src: "/img/tickmc.png", alt: "TickMC logo" }}
                        />
                        <PortfolioItem
                            title="Mythic Analyzer"
                            description="Language analysis and LSP for MythicMobs configurations."
                            link="https://github.com/0tickpulse/mythic-analyzer"
                            imageOverride={
                                <ThemedImage
                                    sources={{
                                        dark: "/img/mythic_white.png",
                                        light: "/img/mythic.png",
                                    }}
                                    height={300}
                                />
                            }
                        />
                        <PortfolioItem
                            title="Lines of Code"
                            description="A Rust CLI tool to recursively count lines of code in a directory."
                            link="https://github.com/0tickpulse/lines-of-code"
                            image={{
                                src: "/img/linesofcode_on_mythicanalyzer.png",
                                alt: "Lines of code command performed on the mythic-analyzer repo",
                            }}
                        />
                        <PortfolioItem
                            title="Coupon Simulator"
                            description="A simulation of the coupon collector's problem."
                            link="https://github.com/0tickpulse/coupon-simulator"
                            image={{
                                src: "/img/linesofcode_on_mythicanalyzer.png",
                                alt: "Lines of code command performed on the mythic-analyzer repo",
                            }}
                        />
                    </div>
                </div>
            </div>
            <main></main>
        </Layout>
    );
}
