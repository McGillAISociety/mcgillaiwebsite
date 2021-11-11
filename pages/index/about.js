import React from 'react';
import styled from '@emotion/styled';

import { SectionBase, SectionTextContent } from '../../components/commonstyles';

const Container = styled('div')`
    ${SectionBase({
        heightPx: 600,
    })};
    color: #ffffff;
    font-size: 48px;
    text-align: center;
`;

const Column = styled('div')`
    font-size: 32px;
    float: left;
    width: 33.33%;
    box-sizing: border-box;
    padding: 0 50px 0;

    @media screen and (max-width: 1100px) {
        padding-left: 8px;
        padding-right: 8px;
    }

    @media screen and (max-width: 967px) {
        width: 100%;
        padding: 0 10px 0;
    }
    > p {
        margin: 0px;
        padding: 0px;
        padding-bottom: 10px;
    }
`;

const Icon = styled('img')`
    padding: 20px;
`;

class About extends React.Component {
    render() {
        return (
            <Container className="home">
                About Us <br />
                <Column>
                    <Icon src="/images/home/assets/Lightbulb.svg" />
                    <p>Learn</p>
                    <SectionTextContent>
                        We aim to make AI more accessible by hosting events,
                        bootcamps, and workshops that give students an
                        opportunity to learn about AI in a peer-based,
                        supportive environment.
                    </SectionTextContent>
                </Column>
                <Column>
                    <Icon src="/images/home/assets/People.svg" />
                    <p>Foster Community</p>
                    <SectionTextContent>
                        We want to make learning AI fun and welcoming. Our
                        talks, bootcamps, and community building events give our
                        participants the opportunity to meet others interested
                        in AI.
                    </SectionTextContent>
                </Column>
                <Column>
                    <Icon src="/images/home/assets/Network.svg" />
                    <p>Connect</p>
                    <SectionTextContent>
                        Montreal is one of the world's leading AI hubs. Through
                        our hackathon, Company Crawl, and industry events, we
                        help connect McGill students with Montreal's AI
                        ecosystem.
                    </SectionTextContent>
                </Column>
            </Container>
        );
    }
}

export default About;
