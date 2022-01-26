import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/app.scss';
import MetaTags from '../components/MetaTags';
import { motion } from 'framer-motion';

// TODO: animate in the navbar?

// TODO: get images for paths!
const pagesData = {
    '/': {
        metaTitle: 'The McGill Artificial Intelligence Society',
        metaDescription: '', //TODO
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
        title: 'MAIS 202: accelerated introduction to machine learning',
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
    const pageData = pagesData[router.route];

    return (
        <>
            <MetaTags
                title={pageData.metaTitle}
                description={pageData.metaDescription}
                imagePath={pageData.metaImagePath}
                route={route}
            />
            <NavBar />

            {/* TODO: either animate in this heading underline, or include it within the motion.div */}
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
            {/* TODO: make a longer or more substantial animation? */}
            <motion.div
                layout
                key={route}
                initial="initial"
                animate="animate"
                variants={{
                    initial: {
                        opacity: 0,
                        y: 30,
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                    },
                }}
            >
                <Component {...pageProps} />
                <Footer />
            </motion.div>
        </>
    );
}

export default MAIS;
