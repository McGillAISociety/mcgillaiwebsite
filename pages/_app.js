import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/app.scss';
import MetaTags from '../components/MetaTags';
import { motion } from 'framer-motion';
import Image from 'next/image';

const metaImagePath = (img) => `/meta/page-previews/${img}.png`;

function MAIS({ Component, pageProps, router }) {
    const { route } = router;

    let pageData;

    switch (route) {
        case '/':
            pageData = {
                metaTitle: 'McGill Artificial Intelligence Society',
                metaDescription:
                    'A hub for learning and community in the Montreal AI ecosystem',
                metaImagePath: metaImagePath('mais'),
                title: '',
                subtitle: '',
                route: '/',
            };
            break;
        case '/team/[academicYear]':
            const { academicYear } = pageProps;
            pageData = {
                metaTitle: `${academicYear} Team | McGill AI Society`,
                metaDescription: `Get to know our incredible execs for the ${academicYear} academic year`,
                metaImagePath: '/images/ourteam/execs.jpeg',
                title: `Our ${academicYear} Team`,
                subtitle: `Get to know our incredible execs`,
                route: `/team/${academicYear}`,
            };
            break;
        case '/mais202':
            pageData = {
                metaTitle: 'MAIS 202 | McGill AI Society',
                metaDescription: 'By students, for students',
                metaImagePath: metaImagePath('mais202'),
                title: 'MAIS 202: Accelerated Introduction to Machine Learning',
                subtitle: 'By students, for students',
                route: '/mais202',
            };
            break;
        case '/podcast':
            pageData = {
                metaTitle: 'Podcast | McGill AI Society',
                metaDescription:
                    'Connnecting AI principles to their research disciplines',
                metaImagePath: metaImagePath('podcast'),
                title: 'The McGill AI Podcast',
                subtitle:
                    'Connnecting ML principles to their research disciplines',
                route: '/podcast',
            };
            break;
        /*case '/membership':
            pageData = {
                metaTitle: 'Membership | McGill AI Society',
                metaDescription: "Expanding our community",
                metaImagePath: metaImagePath('mais'),
                title: 'McGill AI Membership',
                subtitle: 'Expanding our community',
                route: '/membership',
            };
            break;*/
        case '/resources':
            pageData = {
                metaTitle: 'Resources | McGill AI Society',
                metaDescription: "McGill AI's guide to the Montreal AI Scene",
                metaImagePath: metaImagePath('mais'),
                title: 'Montreal AI Resources',
                subtitle: 'Our guide to the Montreal AI Scene',
                route: '/resources',
            };
            break;
        case '/faq':
            pageData = {
                metaTitle: 'FAQ | McGill AI Society',
                metaDescription: '',
                metaImagePath: metaImagePath('mais'),
                title: 'Frequently Asked Questions',
                subtitle: '',
                route: '/faq',
            };
            break;
        default:
            pageData = {
                metaTitle: 'Page Not Found',
            };
    }

    return (
        <>
            <MetaTags
                title={pageData.metaTitle}
                description={pageData.metaDescription}
                imagePath={pageData.metaImagePath}
                route={pageData.route}
            />

            <div id="background">
                <Image
                    priority
                    alt="background"
                    src="/images/background.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            {/* TODO: find a way to have the navbar slide down from the top (couldn't get to work yet) */}
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.3,
                }}
            >
                <NavBar />
            </motion.div>

            {/* TODO: transition the opacity to 0 on exit (couldn't get to work yet) */}
            <motion.div
                layout
                key={pageData.title}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                <div className="page-header">
                    {pageData.title !== '' && (
                        <h1 className="page-header__title">{pageData.title}</h1>
                    )}
                    {pageData.subtitle !== '' && (
                        <h3 className="page-header__subtitle">
                            {pageData.subtitle}
                        </h3>
                    )}
                </div>
            </motion.div>

            <motion.div
                layout
                key={pageData.route}
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                // TODO: longer animation w/ duration while keeping the bounce-y ness? (couldn't get to work yet)
                transition={{
                    delay: 0.3,
                }}
            >
                <Component {...pageProps} />
                <Footer />
            </motion.div>
        </>
    );
}

export default MAIS;
