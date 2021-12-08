import React from 'react';
import styles from '../styles/Home.module.scss';

import styled from '@emotion/styled';

import Stats from './index/stats.js';
import Activities from './index/activities.js';
import Schedule from './index/schedule.js';
import Sponsors from './index/sponsors.js';

const aboutImgDir = (img) => `/images/home/assets/${img}.svg`;
const aboutData = [
    {
        title: 'Learn',
        img: aboutImgDir('Lightbulb'),
        description:
            'We aim to make AI more accessible by hosting events, bootcamps, and workshops that give students an nopportunity to learn about AI in a peer-based, supportive environment.',
    },
    {
        title: 'Foster Community',
        img: aboutImgDir('People'),
        description:
            'We want to make learning AI fun and welcoming. Our talks, bootcamps, and community building events give our participants the opportunity to meet others interested in AI.',
    },
    {
        title: 'Connect',
        img: aboutImgDir('Network'),
        description:
            "Montreal is one of the world's leading AI hubs. Through our hackathon, Company Crawl, and industry events, we help connect McGill students with Montreal's AI ecosystem.",
    },
];

// TODO: find another location for the listserv signup, or just have it on the footer only
// Maybe have a "connect with us section on homepage"
function Home() {
    return (
        <>
            {/* Landing */}
            <div className={`flex-center ${styles['landing']}`}>
                <img
                    src="/images/logo.png"
                    alt="MAIS Logo"
                    className={styles['landing__mais-logo']}
                />
                <div className={styles['landing__main-title']}>
                    <span>MCGILL</span> ARTIFICIAL INTELLIGENCE{' '}
                    <span>SOCIETY</span>
                </div>
            </div>

            {/* About */}
            <div className={styles['about']}>
                <h2>About Us</h2>
                <div className="flex-center">
                    {aboutData.map((data, index) => (
                        <div key={index} className={styles['about__entry']}>
                            <img src={data.img} alt={data.title} />
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Stats />
            <Activities />
            <Schedule />
            <Sponsors />
        </>
    );
}

export default Home;
