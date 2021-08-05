import React from 'react';
import styled from '@emotion/styled';
import { HeadingUnderline } from '../commonstyles.js';
import { DATA } from '../execs/exec-profile';

const hostData = DATA.filter((exec) =>
    [
        'Kaustav Das Sharma',
        'Bonnie Li',
        'Cole Killian',
        'Himanshu Ranka',
    ].includes(exec.name)
);

const Container = styled('div')`
    padding-top: 30px;
    h2 {
        color: #cc0000;
        font-family: montserrat-bold;
        text-align: center;
        padding: 0;
        margin: 0;
    }
    h3 {
        color: white;
        font-family: montserrat-bold;
        font-size: 18px;
        text-align: center;
        padding: 5;
        margin: 0;
    }
`;

const HostsContainer = styled('div')`
    padding-top: 20px;
`;

const Image = styled('img')`
    height: 175px;
    width: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
`;

const Text = styled('p')`
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 16px;
`;

const ImageContainer = styled('div')`
    width: 33.3%;
    display: inline-block;
    vertical-align: top;
    padding: 20px;
    text-align: center;

    @media screen and (max-width: 900px) {
        width: 50%;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

const LinkedinButton = styled('a')`
    background: #cc0000;
    padding: 0.5em 0.5em;
    border-radius: 1.5em;
    box-sizing: border-box;
    text-decoration: none;
    color: white !important;
    transition: opacity 0.2s;
    text-decoration: none !important;

    :hover {
        opacity: 0.6;
    }
`;

export default function Hosts() {
    return (
        <Container>
            <HeadingUnderline>Meet The Hosts</HeadingUnderline>
            <HostsContainer>
                {hostData.map((data, index) => {
                    return (
                        <ImageContainer key={index}>
                            <Image src={data.photo} className="center" />
                            <h2>{data.name}</h2>
                            <h3>{data.position}</h3>
                            <Text>{data.bio}</Text>
                            <LinkedinButton
                                aria-label="Linkedin"
                                href={data.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-linkedin"
                            />
                        </ImageContainer>
                    );
                })}
            </HostsContainer>
        </Container>
    );
}
