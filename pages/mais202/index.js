import React from 'react';
import styled from '@emotion/styled';

import Landing from './landing.js';
import About from './about.js';
//import Instructors from './instructors.js'
import Alumni from './alumni.js';
import FAQ from './faq.js';

const Container = styled('div')`
    padding-top: 100px;
`;

class Mais202 extends React.Component {
    render() {
        return (
            <Container>
                <div className="content">
                    <Landing></Landing>
                </div>
                <div className="content--inner">
                    <About></About>
                    {/* //<Instructors></Instructors> */}
                    {/* // <Alumni></Alumni> */}
                    <FAQ></FAQ>
                </div>
            </Container>
        );
    }
}

export default Mais202;
