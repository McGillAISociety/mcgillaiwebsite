import React from 'react';
import styles from '../styles/pages/index.module.scss';
import ContentGrid from '../components/ContentGrid';

const aboutImgDir = (img) => `/images/home/assets/${img}.svg`;
const aboutData = [
    {
        title: 'Learn',
        img: aboutImgDir('Lightbulb'),
        description:
            'We aim to make AI more accessible by hosting events, bootcamps, and workshops that give students an opportunity to learn about AI in a peer-based, supportive environment.',
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
        title: 'MAIS 202',
        img: activitiesImgDir('mais202'),
        description:
            'A ten-week bootcamp that teaches lower-year undergraduates ML fundamentals',
    },
    {
        title: 'MAIS Hacks',
        img: activitiesImgDir('maishacks'),
        description:
            'Our annual hackathon bringing together 150 students to innovate modern AI solutions',
    },
    {
        title: 'The McGill AI Podcast',
        img: activitiesImgDir('podcast'),
        description:
            'Connnecting ML principles to their research disciplines through interviews with professors and industry leaders',
    },
    {
        title: 'Workshops',
        img: activitiesImgDir('workshops'),
        description:
            'Our technical project managers give workshops on applied topics in machine learning. Our 2021-2022 series covered topics such as Python data science tools and ML model deployment',
    },
    {
        title: 'AI Ethics Panel',
        img: activitiesImgDir('aiethics'),
        description:
            'We hosted a panel on the ethical implications of AI systems with experts on the subject',
    },
    {
        title: 'Learnathon',
        img: activitiesImgDir('learnathon'),
        description: 'An AI research conference aimed at undergraduates',
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
        imgWidth: 400,
        img: sponsorImgDir('sama'),
    },
    {
        name: 'intact',
        url: 'https://careers.intactfc.com/intactinsurance/ca/en',
        imgWidth: 400,
        img: sponsorImgDir('Intactlab'),
    },
    {
        name: 'cae',
        url: 'https://www.cae.com/careers/',
        imgWidth: 250,
        img: sponsorImgDir('cae'),
    },
    {
        name: 'squarepoint',
        url: 'https://www.squarepoint-capital.com/',
        imgWidth: 200,
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
            <section className={`flex-center ${styles['landing']}`}>
                <img
                    src="/images/logo.png"
                    alt="MAIS Logo"
                    className={styles['landing__mais-logo']}
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
                        // TODO: style these entries into cards? (and also maybe the timeline entries?)
                        <div key={index} className={styles['about__entry']}>
                            <img src={data.img} alt={data.title} />
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className={styles['timeline']}>
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
            </section>

            {/* Stats */}
            <section className={`flex-center ${styles['stats']}`}>
                <h2 className={styles['stats__title']}>
                    The McGill AI Community
                </h2>
                <img
                    className={styles['stats__img']}
                    src="/images/home/assets/grid.svg"
                    alt="MAIS Stats"
                />
            </section>

            {/* Activities */}
            <section>
                <h2>Initiatives</h2>
                <ContentGrid content={activitiesData} />
            </section>

            {/* <Sponsors /> */}
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
                                <img
                                    src={sponsor.img}
                                    alt={`${sponsor.name} logo`}
                                    width={sponsor.imgWidth}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
