import React from "react";
import Image from 'next/image';
import styles from '../styles/pages/events.module.scss'

const eventsData = [
    {
        photo: '/images/event_testimage.png',
        name: 'Event #1',
        datetime: 'Event Date',
        description: 'Event #1 Description',
    },
    {
        photo: '/images/event_testimage.png',
        name: 'Event #2',
        datetime: 'Event Date',
        description: 'Event #2 Description',
    },
];

export default function Events() {
    return(
        <>
            <section>
                <p>Stay up to date with all of our events for the current academic year!</p>
                <div className={`flex-center ${styles['event-container']}`}>
                    {eventsData.map((event, index) => (
                        <div className={styles['event']} key={index}>
                            <Image
                                src={event.photo}
                                alt={event.name}
                                width={600}
                                height={400}
                            />
                            <div className={`flex-start ${styles['event-details']}`}>
                                <h2>{event.name}</h2>
                                <h3>{event.datetime}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>   
            </section>
        </>
    );
}