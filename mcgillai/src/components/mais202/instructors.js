import React from 'react';
import styled from '@emotion/styled';

import { HeadingUnderline, SectionBase } from '../commonstyles.js';

const Container = styled('div')`
    ${SectionBase};
`;

class Instructors extends React.Component {
    render() {
        return (
            <Container>
                <HeadingUnderline>MEET YOUR INSTRUCTORS</HeadingUnderline>
            </Container>
        );
    }
}

export default Instructors;
