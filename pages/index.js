import React from 'react';
import styles from '../styles/pages/index.module.scss';
import ContentGrid from '../components/ContentGrid';
import Image from 'next/image';

const aboutImgDir = (img) => `/images/home/assets/${img}.svg`;
const aboutData = [
    {
        title: 'Learn',
        img: aboutImgDir('Lightbulb'),
        description:
            'We make AI more accessible by hosting bootcamps and workshops that give students the opportunity to learn about AI in a peer-based, supportive environment.',
    },
    {
        title: 'Foster Community',
        img: aboutImgDir('People'),
        description:
            'We want to make AI fun and welcoming. Our initiatives focus on giving participants the opportunity to meet others interested in AI.',
    },
    {
        title: 'Connect',
        img: aboutImgDir('Network'),
        description:
            "Montreal is one of the world's leading AI hubs. Through our hackathon, learnathon, and industry events, we help connect McGill students with Montreal's AI ecosystem.",
    },
];

const activitiesImgDir = (img) => `/images/home/activities/${img}.jpg`;
const activitiesData = [
    {
        title: 'MAIS 202',
        img: activitiesImgDir('mais202'),
        description:
            'Each semester, a cohort of 30 lower-year undergraduates are selected for a 10-week bootcamp on ML fundamentals.',
    },
    {
        title: 'MAIS Hacks',
        img: activitiesImgDir('maishacks'),
        description:
            "Canada's largest AI hackathon, hosted every fall, brings together 150 students to innovate modern AI solutions.",
    },
    {
        title: 'The McGill AI Podcast',
        img: activitiesImgDir('podcast'),
        description:
            'Connnecting ML principles to their research disciplines through interviews with professors and industry leaders.',
    },
    {
        title: 'Workshops',
        img: activitiesImgDir('workshops'),
        description:
            'Our technical project managers give workshops on applied topics in machine learning. Our 2021-2022 series covered topics such as Python data science tools and ML model deployment.',
    },
    {
        title: 'AI Ethics Panel',
        img: activitiesImgDir('aiethics'),
        description:
            'An interactive panel on the ethical implications of AI systems with experts on the subject.',
    },
    {
        title: 'Learnathon',
        img: activitiesImgDir('learnathon'),
        description:
            'A free undergraduate AI research conference. Hosted in the winter semester, this AI-filled day covers everything from workshops, talks, panels, and networking. Everyone from high schoolers to last-year undergrads will find something to love!',
    },
];

const timelineImgDir = (img) => `/images/home/schedule-icons/${img}.svg`;
const timelineData = [
    // {
    //     title: 'MAIS 202 Project Fair',
    //     time: 'December 2nd, 1-4 PM',
    //     img: timelineDataImg('mais202'),
    //     place: 'In person @ Trottier Mezzanine',
    // },
];

const sponsorImgDir = (img) => `/images/home/sponsors/${img}.png`;
const sponsorData = [
    {
        name: 'desjardins',
        url: 'https://www.desjardins.com/en/careers.html',
        imgWidth: 350,
        img: sponsorImgDir('desjardins'),
    },
    {
        name: 'isaac',
        url: 'https://www.isaacinstruments.com/careers/',
        imgWidth: 400,
        img: sponsorImgDir('isaac'),
    },
    {
        name: 'squarepoint',
        url: 'https://www.squarepoint-capital.com/',
        imgWidth: 350,
        img: sponsorImgDir('squarepoint'),
    },
];

function Home() {
    return (
        <>
            {/* Landing */}
            <section className={`flex-center ${styles['landing']}`}>
                <Image
                    src="/images/logo.png"
                    alt="MAIS Logo"
                    priority
                    width={350}
                    height={350}
                />
                <div className={styles['landing__main-title']}>
                    <span>MCGILL</span> ARTIFICIAL INTELLIGENCE{' '}
                    <span>SOCIETY</span>
                </div>
            </section>

            {/* About */}
            <section className={styles['about']}>
                <h2>About Us</h2>
                <div className="flex-center">
                    {aboutData.map((data, index) => (
                        <div key={index} className={styles['about__entry']}>
                            <div className={styles['about__entry__img']}>
                                <Image
                                    src={data.img}
                                    alt={data.title}
                                    priority
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            {/* 
            <section className={styles['timeline']}>
                <h2>Upcoming Events</h2>
                {timelineData.length ? (
                    <div className={styles['timeline__events']}>
                        {timelineData.map((data, index) => (
                            <></>
                            // TODO: when I re-wrote the website, I procrastinated re-implementing this timeline. So it's up to you to figure out how you want the the events to display!
                            // No matter the aesthetic, I definetly think that the timeline entries should be wrapped in links to the relevant facebook events (this wasn't the case before)
                        ))}
                    </div>
                ) : (
                    <p className={styles['timeline__no-event-message']}>
                        We do not have any upcoming events right now; check back
                        soon!
                    </p>
                )}
            </section>*/}

            {/* Stats */}
            <section className={`flex-center ${styles['stats']}`}>
                <h2 className={styles['stats__title']}>
                    The McGill AI Community
                </h2>
                <Image
                    src="/images/home/assets/grid-2023.svg"
                    alt="MAIS Stats"
                    width={930}
                    height={600}
                />
            </section>

            {/* Activities */}
            <section>
                <h2>Initiatives</h2>
                <ContentGrid content={activitiesData} />
            </section>

            {/* Sponsors */}
            <section>
                <h2>Sponsors</h2>
                <div className={`flex-center ${styles['sponsors']}`}>
                    <div className={styles['sponsors__text']}>
                        <p>
                            All club operations are funded by our generous
                            sponsors. Without their support, we would not be
                            able to be a major hub for learning and community in
                            the Montreal AI ecosystem.
                        </p>
                        <p>
                            As a McGill AI club sponsor, you will have access to
                            the CVs of our hundreds of event participants and
                            reach our over 2000 subscribers. If you are
                            interested in partnering with our club, please don’t
                            hesitate to reach out to&nbsp;
                            <a href="mailto:mcgillaicontact@gmail.com">
                                mcgillaicontact@gmail.com
                            </a>
                            !
                        </p>
                    </div>
                    <div className={`flex-center ${styles['sponsors__logos']}`}>
                        {sponsorData.map((sponsor, index) => (
                            <a
                                key={index}
                                href={sponsor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className={styles['sponsors__logos__img']}>
                                    <Image
                                        src={sponsor.img}
                                        alt={`${sponsor.name} logo`}
                                        width={sponsor.imgWidth}
                                        height="100%"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
