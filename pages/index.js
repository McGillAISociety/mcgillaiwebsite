import React from 'react';
import styles from '../styles/Home.module.scss';
import MetaTags from '../components/MetaTags';

import styled from '@emotion/styled';

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

const activitiesImgDir = (img) => `/images/home/activities/${img}.jpg`;
const activitiesData = [
    {
        title: 'MAIS202 Bootcamp',
        img: activitiesImgDir('mais202'),
        description:
            'MAIS 202 is a ten-week bootcamp that teaches lower year undergraduates ML fundamentals. With over 60 bootcamp alumni, our Fall 2021 iteration will welcome our sixth cohort of students.',
    },
    {
        title: 'MAIS Hacks',
        img: activitiesImgDir('maishacks'),
        description:
            'Our annual hackathon brings together 150 students across Eastern Canada to design and innovate modern AI solutions.',
    },
    {
        title: 'Company Crawl',
        img: activitiesImgDir('companycrawl'),
        description:
            'Each fall, we invite over 30 talented individuals to tour some of the hottest AI companies in Montreal, including Automat, StrategiAI, Google, and Microsoft.',
    },
    {
        title: 'Workshops',
        img: activitiesImgDir('workshops'),
        description:
            'Our technical project managers provide workshops each term teaching applied topics in artificial intelligence and machine learning. Our 2019-2020 workshop series covered topics such as image classification, OpenCV, and building a chatbot.',
    },
    {
        title: 'Women in AI Panel',
        img: activitiesImgDir('womeninai'),
        description:
            "To celebrate International Women's Day, we invited Joelle Pineau, Layla El Asri, Audrey Durand, and Negar Rostamzadeh to talk about  their notable achievements and share their career progression in AI.",
    },
    {
        title: 'Research Talks',
        img: activitiesImgDir('researchtalks'),
        description:
            'A series of informal presentations for students to engage with state-of-the-art research pursued by academic and industry researchers in machine learning.',
    },
];

// TODO: find another location for the listserv signup, or just have it on the footer only
// Maybe have a "connect with us section on homepage"
function Home() {
    return (
        <>
            {/* Landing */}
            <div className={`section flex-center ${styles['landing']}`}>
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
            <div className={`section ${styles['about']}`}>
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

            {/* Stats */}
            <div className={`section flex-center ${styles['stats']}`}>
                <h2 className={styles['stats__title']}>
                    The McGill AI Community
                </h2>
                <img
                    className={styles['stats__img']}
                    src="/images/home/assets/grid.svg"
                    alt="MAIS Stats"
                />
            </div>

            {/* TODO: the images have this infuriating small empty space below them within the cell; figure out! */}
            {/* Activities */}
            <div className={`section ${styles['activities']}`}>
                {activitiesData.map((data, index) => (
                    <div className={styles['activities__cell']} key={index}>
                        <img
                            src={data.img}
                            alt={data.title}
                            className={styles['activities__background']}
                        />
                        <div
                            className={`${styles['activities__bounds']} 
                            ${
                                index % 2 === 0 &&
                                styles['activities__bounds--red']
                            }`}
                        />
                        <div
                            className={`flex-center ${styles['activities__text']}`}
                        >
                            <div>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Schedule />
            <Sponsors />
        </>
    );
}

export default Home;
