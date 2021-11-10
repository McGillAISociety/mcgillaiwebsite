import React from 'react';
import styled from '@emotion/styled';

const Container = styled('div')`
    margin: auto;
    position: relative;
    display: block;
    overflow: hidden;
    font-size: 30pt;
    padding-bottom: 50px;
    margin-left: -70px;
    margin-right: -20px;

    @media only screen and (max-width: 767px) {
        margin-left: -20px;
    }
`;

const ImageCell = styled('a')`
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
    opacity: 1;
    transition: opacity 500ms;
    background: ${(props) =>
        props.red
            ? 'linear-gradient(to bottom,#722D60, #A81245)'
            : 'linear-gradient(to bottom,#6E2F62, #003399)'};
`;

const ImageContent = styled('img')`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    opacity: 1;
    transition: opacity 500ms;
`;

export default function Links() {
    return (
        <Container>
            <ImageCell
                href="https://open.spotify.com/show/1k3AWxBYuGetrCjvZip8Ot"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
            >
                <ImageBounds red={true} className="Bounds"></ImageBounds>
                <ImageContent src="/images/podcast/spotify.png" alt="" />
            </ImageCell>
            <ImageCell
                href="https://podcasts.apple.com/us/podcast/mcgill-ai-podcast/id1583837131"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
            >
                <ImageBounds className="Bounds"></ImageBounds>
                <ImageContent src="/images/podcast/apple.png" alt="" />
            </ImageCell>
            <ImageCell
                href="https://www.youtube.com/channel/UCP12K3ISvfFHnZzc0p6Zj3g"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
            >
                <ImageBounds red={true} className="Bounds"></ImageBounds>
                <ImageContent src="/images/podcast/youtube.png" alt="" />
            </ImageCell>
        </Container>
    );
}
