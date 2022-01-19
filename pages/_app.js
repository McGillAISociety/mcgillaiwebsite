import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/app.scss';
import { motion } from 'framer-motion';

// TODO: animate in the navbar?
// TODO: animate in different page sections individually?
// TODO: render MetaTags here with different props based on the route? If that doesnt work just render MetaTags differently in each page
// TODO: render the heading underline here with subtitle based on route-associated title and subtitle fields
function MAIS({ Component, pageProps, router }) {
    return (
        <>
            <NavBar />
            <motion.div
                layout
                key={router.route}
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
                <div className="page">
                    <Component {...pageProps} />
                </div>
                <Footer />
            </motion.div>
        </>
    );
}

export default MAIS;
