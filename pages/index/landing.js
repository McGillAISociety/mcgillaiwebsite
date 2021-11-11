import React from 'react';
import styled from '@emotion/styled';

import { SectionBase, SubscribeButton } from '../../components/commonstyles';

// import Logo from './assets/logo.svg';

const Container = styled('div')`
    ${SectionBase};
    display: block;
`;

const Column = styled('div')`
    font-size: 32px;
    float: left;
    width: 50%;
    max-height: 600px;
    box-sizing: border-box;
    padding: 0px 30px;
    margin-bottom: 40px;

    @media screen and (max-width: 1260px) {
        width: 100%;
    }
    > p {
        margin: 0px;
        padding: 0px;
    }
`;

const Icon = styled('img')`
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    padding-top: 75px;
    display: block;
    max-height: 500px;
`;

const Title = styled('h1')`
    font-weight: 900;
    font-size: 60pt;
    background: -webkit-linear-gradient(#cc0033, #663366);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-left: 80px;
    padding-top: 80px;
    margin-bottom: 30px;

    @media screen and (max-width: 1260px) {
        display: none;
    }
`;

const DesktopButtonContainer = styled('div')`
    display: table;
    margin-left: 80px;
`;

const MobileButtonContainer = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const DesktopSubscribeButton = styled('a')`
    ${SubscribeButton};
    @media screen and (max-width: 1260px) {
        display: none;
    }
`;

const MobileSubscribeButton = styled('a')`
    ${SubscribeButton};
    @media screen and (min-width: 1260px) {
        display: none;
    }
    margin-top: 30px;
`;

class Landing extends React.Component {
    render() {
        return (
            <Container>
                <Column>
                    <Title>
                        {' '}
                        MCGILL <br /> ARTIFICIAL <br /> INTELLIGENCE <br />{' '}
                        SOCIETY{' '}
                    </Title>
                    <DesktopButtonContainer>
                        <DesktopSubscribeButton
                            href="https://forms.gle/BLaS18JzspRyYthW8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            BECOME A SUBSCRIBER
                        </DesktopSubscribeButton>
                    </DesktopButtonContainer>
                </Column>
                <Column>
                    <Icon src="/images/logo.png" />
                    <MobileButtonContainer>
                        <MobileSubscribeButton
                            href="https://forms.gle/BLaS18JzspRyYthW8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            BECOME A SUBSCRIBER
                        </MobileSubscribeButton>
                    </MobileButtonContainer>
                </Column>
            </Container>
        );
    }
}

export default Landing;
