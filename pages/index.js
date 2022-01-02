import React from 'react';
import styles from '../styles/home.module.scss';
// import MetaTags from '../components/MetaTags';

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
        name: 'sama',
        url: 'https://www.sama.com/careers',
        imgWidth: 300,
        img: sponsorImgDir('sama'),
    },
    {
        name: 'intact',
        url: 'https://careers.intactfc.com/intactinsurance/ca/en',
        imgWidth: 300,
        img: sponsorImgDir('Intactlab'),
    },
    {
        name: 'cae',
        url: 'https://www.cae.com/careers/',
        imgWidth: 200,
        img: sponsorImgDir('cae'),
    },
    {
        name: 'squarepoint',
        url: 'https://www.squarepoint-capital.com/',
        imgWidth: 150,
        img: sponsorImgDir('squarepoint'),
    },
];

// TODO: find another location for the listserv signup, or just have it on the footer only
// Maybe have a "connect with us" section on homepage?
// Maybe have a form that auto signs up to mailing list?
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
                        // TODO: style these entries into cards (and also maybe the timeline entries?)
                        <div key={index} className={styles['about__entry']}>
                            <img src={data.img} alt={data.title} />
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Timeline */}
            <div className={`section ${styles['timeline']}`}>
                <h2>Upcoming Events</h2>
                {timelineData.length ? (
                    <div className={styles['timeline__events']}>
                        {timelineData.map((data, index) => (
                            <></>
                            // TODO: rewrite this!
                        ))}
                    </div>
                ) : (
                    <p className={styles['timeline__no-event-message']}>
                        We do not have any upcoming events right now; check back
                        soon!
                    </p>
                )}
            </div>

            {/* Stats */}
            <div className={`section flex-center ${styles['stats']}`}>
                <h2 className={styles['stats__title']}>
                    The McGill AI Community
                </h2>
                {/* TODO: this is overflowing the screen on mobile! */}
                <img
                    className={styles['stats__img']}
                    src="/images/home/assets/grid.svg"
                    alt="MAIS Stats"
                />
            </div>

            {/* Activities */}
            <div className="section">
                <h2>Our Initiatives</h2>
                <center className="desktop-hide">
                    <small>
                        <i>Tap images for more!</i>
                    </small>
                </center>
                <div className={styles['activities']}>
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
            </div>

            {/* <Sponsors /> */}

            <div className="section">
                <h2>Sponsors</h2>
                <div className={`flex-center ${styles['sponsors']}`}>
                    <div className={styles['sponsors__text']}>
                        <p>
                            All club operations are funded by our generous
                            sponsors. Without their support, we would not be
                            able to do what we do, or be what we are today: a
                            major hub for learning and community in the Montreal
                            AI ecosystem.
                        </p>
                        <p>
                            As a McGill AI club sponsor, you will have access to
                            the resumes of our hackathon participants, hold
                            interviews during the hackathon, and gain access to
                            a platform of over 2000 talented and committed
                            students.
                        </p>
                        <p>
                            If you are interested in partnering with our club,
                            please don’t hesitate to reach out to&nbsp;
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
                                <img
                                    src={sponsor.img}
                                    alt={`${sponsor.name} logo`}
                                    width={sponsor.imgWidth}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
