import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/app.scss';

// TODO: animate in the navbar and the component (maybe later try to mimic the multiple section animations from old site)
// TODO: render MetaTags here with different props based on the route? If that doesnt work just render MetaTags differently in each page
// TODO: render the heading underline here with subtitle based on route-associated title and subtitle fields
function MAIS({ Component, pageProps }) {
    return (
        <>
            <NavBar />
            <div className="page">
                <Component {...pageProps} />
            </div>
            <Footer />
        </>
    );
}

export default MAIS;
