import React from 'react';
import styled from '@emotion/styled';

import Landing from './landing.js';
import About from './about.js';
import Stats from './stats.js';
import Activities from './activities.js';
import Schedule from './schedule.js';
import Sponsors from './sponsors.js';

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
