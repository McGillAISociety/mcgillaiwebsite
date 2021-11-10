import React from 'react';
import styled from '@emotion/styled';

import Landing from './index/landing.js';
import About from './index/about.js';
import Stats from './index/stats.js';
import Activities from './index/activities.js';
import Schedule from './index/schedule.js';
import Sponsors from './index/sponsors.js';

const Container = styled('div')``;

class Home extends React.Component {
    render() {
        return (
            <Container>
                <div className="content" id="top">
                    <Landing></Landing>
                </div>
                <div className="content--inner">
                    <About></About>
                    <Stats></Stats>
                    <Activities></Activities>
                    <Schedule></Schedule>
                    <Sponsors></Sponsors>
                </div>
            </Container>
        );
    }
}

export default Home;
