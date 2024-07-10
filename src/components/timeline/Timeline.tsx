import React from "react";
import styles from "./Timeline.module.scss";

export type TimelinePosition = "left" | "right" | "alternate" | "alternate-reverse";

export type TimelineProps = {
    position: TimelinePosition;
    events: TimelineEvent[];
};

export type TimelineEvent = {
    title: string;
    description: string;
    date?: string;
    image?: string;
    link?: string;
    linkText?: string;
};

const Timeline: React.FC<TimelineProps> = ({ position, events }) => {
    return (
        <div className={`${styles.timeline} ${styles[position]}`}>
            <div className={styles["timeline-line"]} />
            {events.map((event, index) => (
                <div
                    key={index}
                    className={`${styles["timeline-event"]} ${
                        position === "alternate" || position === "alternate-reverse" ? (index % 2 === 0 ? styles.left : styles.right) : styles[position]
                    }`}
                >
                    <div className={styles["timeline-dot"]} />
                    <div className={styles["timeline-content"]}>
                        {event.image && <img src={event.image} alt={event.title} />}
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        {event.date && <small>{event.date}</small>}
                        {event.link && (
                            <a href={event.link} target="_blank" rel="noopener noreferrer">
                                {event.linkText || "Learn More"}
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
