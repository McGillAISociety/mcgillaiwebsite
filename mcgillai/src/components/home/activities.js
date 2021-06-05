import React from 'react';
import styled from '@emotion/styled';

import { ImageBackground } from '../commonstyles';

import Mais202 from './activities-img/mais202.jpg';
import ImplementAI from './activities-img/implementai.jpg';
import Workshops from './activities-img/workshops.jpg';
import WomenInAI from './activities-img/womeninai.jpg';
import ResearchTalks from './activities-img/researchtalks.jpg';
import CompanyCrawl from './activities-img/companycrawl.jpg';

const Container = styled('div')`
    margin: auto;
    position: relative;
    display: block;
    overflow: hidden;
    font-size: 30pt;
`;

const ImageGrid = styled('div')`
    font-size: 0;
`;

const ImageCell = styled('div')`
    display: inline-block;
    vertical-align: top;
    width: 33.33%;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &:after {
        content: '';
        display: block;
        padding-top: 100%;
    }

    &:hover .Background {
        -webkit-transform: scale(1.025);
        transform: scale(1.025);
    }

    &:hover .Bounds {
        opacity: 0.6;
    }

    &:hover .Text {
        opacity: 1;
    }

    @media screen and (max-width: 750px) {
        width: 50%;
    }
`;

const ImageBounds = styled('div')`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 500ms;
    background: ${(props) =>
        props.red
            ? 'linear-gradient(to bottom,#722D60, #A81245)'
            : 'linear-gradient(to bottom,#6E2F62, #003399)'};
`;

const ImageText = styled('div')`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    color: white;
    text-align: center;
    opacity: 0;
    transition: opacity 500ms;

    > h2 {
        font-family: 'Montserrat-Bold';
        font-size: 30px;
        margin: 20px 0px;

        @media screen and (max-width: 1150px) {
            margin-bottom: 10px;
            font-size: 26px;
        }

        @media screen and (max-width: 1000px) {
            font-size: 20px;
        }
        @media screen and (max-width: 767px) {
            font-size: 16px;
            margin-bottom: 5px;
        }
    }

    > h3 {
        font-family: 'Montserrat';
        font-size: 20px;
        @media screen and (max-width: 1150px) {
            font-size: 16px;
        }

        @media screen and (max-width: 767px) {
            margin-top: 0;
            font-size: 14px;
        }

        @media screen and (max-width: 575px) {
            font-size: 12px;
        }

        @media screen and (max-width: 350px) {
            font-size: 10px;
        }
    }

    @media screen and (max-width: 850px) {
        padding: 10px;
        padding-bottom: 5px;
    }
`;

class Activities extends React.Component {
    render() {
        return (
            <Container>
                <ImageGrid>
                    <ImageCell>
                        <ImageBackground
                            className="Background"
                            style={{ backgroundImage: `url(${Mais202})` }}
                        >
                            {' '}
                        </ImageBackground>
                        <ImageBounds
                            red={true}
                            className="Bounds"
                        ></ImageBounds>
                        <ImageText className="Text">
                            <h2>MAIS202 Bootcamp</h2>
                            <h3>
                                MAIS 202 is a ten-week bootcamp that teaches
                                lower year undergraduates ML fundamentals. With
                                over 60 bootcamp alumni, our Fall 2020 iteration
                                will welcome our fourth cohort of students.
                            </h3>
                        </ImageText>
                    </ImageCell>

                    <ImageCell>
                        <ImageBackground
                            className="Background"
                            style={{ backgroundImage: `url(${ImplementAI})` }}
                        >
                            {' '}
                        </ImageBackground>
                        <ImageBounds className="Bounds"></ImageBounds>
                        <ImageText className="Text">
                            <h2>MAIS Hacks</h2>
                            <h3>
                                Our annual hackathon brings together 150
                                students across Eastern Canada to design and
                                innovate modern AI solutions.
                            </h3>
                        </ImageText>
                    </ImageCell>

                    <ImageCell>
                        <ImageBackground
                            className="Background"
                            style={{ backgroundImage: `url(${CompanyCrawl})` }}
                        >
                            {' '}
                        </ImageBackground>
                        <ImageBounds className="Bounds"></ImageBounds>
                        <ImageText className="Text">
                            <h2>Company Crawl</h2>
                            <h3>
                                Each fall, we invite over 30 talented
                                individuals to tour some of the hottest AI
                                companies in Montreal, including Automat,
                                StrategiAI, Google, and Microsoft.{' '}
                            </h3>
                        </ImageText>
                    </ImageCell>

                    <ImageCell>
                        <ImageBackground
                            className="Background"
                            style={{ backgroundImage: `url(${Workshops})` }}
                        >
                            {' '}
                        </ImageBackground>
                        <ImageBounds
                            red={true}
                            className="Bounds"
                        ></ImageBounds>
                        <ImageText className="Text">
                            <h2>Workshops</h2>
                            <h3>
                                Our technical project managers provide workshops
                                each term teaching applied topics in artificial
                                intelligence and machine learning. Our 2019-2020
                                workshop series covered topics such as image
                                classification, OpenCV, and building a chatbot.
                            </h3>
                        </ImageText>
                    </ImageCell>

                    <ImageCell>
                        <ImageBackground
                            className="Background"
                            style={{ backgroundImage: `url(${WomenInAI})` }}
                        >
                            {' '}
                        </ImageBackground>
                        <ImageBounds className="Bounds"></ImageBounds>
                        <ImageText className="Text">
                            <h2>Women in AI Panel</h2>
                            <h3>
                                To celebrate International Women's Day, we
                                invited Joelle Pineau, Layla El Asri, Audrey
                                Durand, and Negar Rostamzadeh to talk about
                                their notable achievements and share their
                                career progression in AI.{' '}
                            </h3>
                        </ImageText>
                    </ImageCell>

                    <ImageCell>
                        <ImageBackground
                            className="Background"
                            style={{ backgroundImage: `url(${ResearchTalks})` }}
                        >
                            {' '}
                        </ImageBackground>
                        <ImageBounds
                            red={true}
                            className="Bounds"
                        ></ImageBounds>
                        <ImageText className="Text">
                            <h2>Research Talks</h2>
                            <h3>
                                A series of informal presentations for students
                                to engage with state-of-the-art research pursued
                                by academic and industry researchers in machine
                                learning.{' '}
                            </h3>
                        </ImageText>
                    </ImageCell>
                </ImageGrid>
            </Container>
        );
    }
}

export default Activities;
