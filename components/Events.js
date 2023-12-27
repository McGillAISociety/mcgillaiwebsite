import React from "react";
import Image from 'next/image';
import styles from '../styles/components/Events.module.scss'

/** 
eventData takes the following form:
[
    {
        photo: `/images/events/2023-2024/learnathon.png`,
        name: 'MAIS Learnathon 2024',
        datetime: 'January _, 2024, 2:00 PM - 5:00 PM'
        description: ''
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
                        <p>{eventData.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}