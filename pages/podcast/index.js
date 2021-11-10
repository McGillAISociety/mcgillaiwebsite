import React from 'react';
import styled from '@emotion/styled';

import Landing from './landing.js';
import About from './about.js';
import Hosts from './hosts.js';
import FAQ from './faq.js';
import Links from './links.js';

const Container = styled('div')`
    padding-top: 100px;
    padding-left: 70px;
    padding-right: 20px;

    @media only screen and (max-width: 767px) {
        padding-left: 20px;
    }
`;

export default function Podcast() {
    return (
        <Container>
            <div className="content">
                <Landing />
            </div>
            <div className="content--inner">
                <Links />
                <About />
                <Hosts />
                <FAQ />
            </div>
        </Container>
    );
}
