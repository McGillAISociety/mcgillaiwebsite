import React from 'react';
import styles from '../styles/Home.module.scss';

import styled from '@emotion/styled';

import About from './index/about.js';
import Stats from './index/stats.js';
import Activities from './index/activities.js';
import Schedule from './index/schedule.js';
import Sponsors from './index/sponsors.js';

// TODO: find another location for the listserv signup, or just have it on the footer only
// Maybe have a "connect with us section on homepage"
function Home() {
    return (
        <>
            <div className="content" id="top">
                <div className="flex-center">
                    <img
                        src="/images/logo.png"
                        alt="MAIS Logo"
                        className={styles['mais-logo']}
                    />
                    <div className={styles['main-title']}>
                        <span>MCGILL</span> ARTIFICIAL INTELLIGENCE{' '}
                        <span>SOCIETY</span>
                    </div>
                </div>
            </div>
            <div className="content--inner">
                <About />
                <Stats />
                <Activities />
                <Schedule />
                <Sponsors />
            </div>
        </>
    );
}

export default Home;
