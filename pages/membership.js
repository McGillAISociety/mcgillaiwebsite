import React from 'react';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/pages/membership.module.scss';

export default function Membership() {
    return (
        <>
            <section>
                <section className="flex-center">
                <Carousel
                        autoPlay
                        infiniteLoop
                        stopOnHover={false}
                        showStatus={false}
                        showThumbs={false}
                        interval={1500}
                        className={styles['carousel']}
                    >
                        {['1', '2', '3'].map((number) => (
                            <Image
                                key={number}
                                src={`/images/membership/${number}.jpg`}
                                alt="MAIS 202"
                                width={800}
                                height={640}
                            />
                        ))}
                    </Carousel>
                </section>
                <h2>About</h2>
                <p>
                    MAIS hosts a variety of events throughout the year open to everyone regardless of previous experience or knowledge of AI. If you're looking to learn more about any category of AI, technical, legal/law, ethics, etc. then we'd love to see you at our future events. We're always looking to provide an inclusive and educational environment for all.  
                </p>
                <h3>Membership includes:</h3>
                <ul>
                    <li>
                        Monthly AI discussions, some hosted by Ph.D. students and professors
                    </li>
                    <li>
                        Biweekly workshops and events
                    </li>
                    <li>
                        Super fun socials (ice skating, bar night, escape room, lettuce eating competition...) 
                    </li>
                    <li>
                        Discord server where anyone can share about other AI-related events, ideas, networking opportunities, memes, socials, etc. 
                    </li>
                    <li>
                        An opportunity to write articles and opinion pieces for our blog
                    </li>
                    <li>
                        Merch!
                    </li>
                </ul>
                <h3>Member responsibilities:</h3>
                <ul>
                    <li>
                        Show up to three (3) events per semester
                    </li>
                </ul>
                
                <p>
                    Membership provides a great opportunity to meet other people in your field, get access to educational experiences to advance your studies, internships, or career, while also acting as an awesome bullet point for your CV!
                </p>
                <h3>Interested?</h3>
                <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSe5-xjSOaprt8BZBYtg6YyyTozG_8OPvYZaQ9ikFqQZerxn3Q/viewform">Apply here!</a></p>
            </section>
        </>
    );
}
