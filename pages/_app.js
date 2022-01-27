import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/app.scss';
import MetaTags from '../components/MetaTags';
import { motion } from 'framer-motion';

// TODO: get images for paths!
const pagesData = {
    '/': {
        metaTitle: 'McGill Artificial Intelligence Society',
        metaDescription:
            'A hub for learning and community in the Montreal AI ecosystem',
        metaImagePath: '', //TODO
        title: '',
        subtitle: '',
    },
    '/ourteam': {
        metaTitle: 'McGill AI Society – Our Team',
        metaDescription: '',
        metaImagePath: '',
        title: 'Our Team',
        subtitle: 'Get to know our execs',
    },
    '/mais202': {
        metaTitle: 'MAIS 202 Machine Learning Bootcamp',
        metaDescription: 'By students, for students',
        metaImagePath: '',
        title: 'MAIS 202: Accelerated Introduction to Machine Learning',
        subtitle: 'By students, for students',
    },
    '/podcast': {
        metaTitle: 'The McGill AI Podcast',
        metaDescription:
            'Connnecting AI principles to their research disciplines',
        metaImagePath: '',
        title: 'The McGill AI Podcast',
        subtitle: 'Connnecting ML principles to their research disciplines',
    },
    '/mtlai': {
        metaTitle: 'McGill AI Society – Montreal AI Resources',
        metaDescription: "McGill AI's guide to the Montreal AI Scene",
        metaImagePath: '',
        title: 'Montreal AI Resources',
        subtitle: 'Our guide to the Montreal AI Scene',
    },
    '/faq': {
        metaTitle: 'McGill AI Society – FAQ',
        metaDescription: '',
        metaImagePath: '',
        title: 'Frequently Asked Questions',
        subtitle: '',
    },
};

function MAIS({ Component, pageProps, router }) {
    const route = router.route;
    let pageData = pagesData[router.route];

    if (!pageData) {
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
                route={route}
            />

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
                key={route}
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
