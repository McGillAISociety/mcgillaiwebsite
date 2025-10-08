import React from "react";
import Image from 'next/image';
import styles from '../styles/components/Events.module.scss'

/** 
eventData takes the following form:
[
    {
        photo: `/images/events/2023-2024/trivianight23.png`,
        name: 'AI Trivia Night',
        datetime: 'October 30th, 2023 from 5:30 PM - 7:00 PM',
        location: 'EDUC 211',
        description: 'Get ready for an electrifying event of knowledge...',
        update: 'Optional: Latest updates about the event' // This field is optional
    }, ...
]
*/

export default function Events({ eventsData = [] }) {
    return (
        <div className={`flex-center ${styles['event-container']}`}>
            {eventsData.map((eventData, index) => (
                <div className={styles['event']} key={index}>
                    <Image
                        src={eventData.photo}
                        alt={eventData.name}
                        width={600}
                        height={400}
                    />
                    <div className={`flex-start ${styles['event-details']}`}>
                        <h2>{eventData.name}</h2>
                        <h3>{eventData.datetime}</h3>
                        <h4>{eventData.location}</h4>
                        {eventData.update && (
                            <div className={styles['event-update']}>
                                <span className={styles['update-label']}>UPDATE:</span>
                                <span className={styles['update-text']}>{eventData.update}</span>
                            </div>
                        )}
                        <p>{eventData.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}