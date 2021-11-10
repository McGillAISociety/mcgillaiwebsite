import React from 'react';
import styled from '@emotion/styled';

import {
    SectionBase,
    HeadingUnderline,
    Question,
    Answer,
} from '../../components/commonstyles.js';

import Resources from './resources.js';
import Resources2 from './resources2.js';
import Resources3 from './resources3.js';

const Container = styled('div')`
    background-image: url(../public/images/background.jpg);
    background-size: cover; /* or contain depending on what you want */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 125px;
    padding-left: 70px;

    @media only screen and (max-width: 767px) {
        padding-left: 20px;
    }
`;

const MtlaiContainer = styled('div')`
    ${SectionBase({
        heightPx: 600,
    })};
    box-sizing: border-box;

    font-family: 'Montserrat-Bold';
    color: #ffffff;
    font-size: 48px;
    text-align: center;
`;
const MtlContainer = styled('div')``;

class Mtlai extends React.Component {
    render() {
        return (
            <MtlContainer>
                <Container>
                    <HeadingUnderline className="content">
                        Montreal's AI Scene{' '}
                    </HeadingUnderline>
                    <MtlaiContainer>
                        <div className="content--inner">
                            <p>McGill AI's Guide to MTL's AI Scene!</p>
                            <Question>Hello!</Question>
                            <Answer>
                                The following is a list of different ways
                                students can get involved with the AI and ML
                                community in Montreal. <br />
                                For technical content to begin learning ML,
                                please visit our{' '}
                                <a href="/mais202">
                                    MAIS 202 Course Notes page
                                </a>
                                . While we tried our best to capture as many
                                opportunities as possible, if you feel this list
                                is lacking a certain group or organization,
                                please let us know at{' '}
                                <a href="mailto:mcgillaicontact@gmail.com">
                                    mcgillaicontact@gmail.com
                                </a>
                                ! <br />
                                Of course, the best way for you to stay updated
                                with upcoming AI events at McGill and Montreal
                                is by following us on{' '}
                                <a href="https://www.facebook.com/McGillAI">
                                    Facebook
                                </a>{' '}
                                and subscribing to our{' '}
                                <a
                                    rel="noopener noreferrer"
                                    href="https://forms.gle/L8HqJWJ2KSy3Cd6y5"
                                    target="_blank"
                                >
                                    newsletter
                                </a>{' '}
                                ;) <br />
                                <br />
                                <br />
                            </Answer>
                            <p> AI / ML Research </p>
                        </div>
                    </MtlaiContainer>
                </Container>
                <Resources></Resources>
                <Container>
                    <MtlaiContainer>
                        <p>AI Ethics, Society and Regulation </p>
                    </MtlaiContainer>
                </Container>
                <Resources3></Resources3>
                <Container>
                    <MtlaiContainer>
                        <p>AI x Other Fields</p>
                    </MtlaiContainer>
                </Container>
                <Resources2></Resources2>
            </MtlContainer>
        );
    }
}

export default Mtlai;
