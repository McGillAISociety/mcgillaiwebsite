import React from 'react';
import styled from '@emotion/styled';

const Container = styled('div')`
    background-image: url(../public/images/background.jpg);
    background-size: cover; /* or contain depending on what you want */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Heading = styled('div')`
    font-size: 64px;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
`;

// TODO: rewrite and include home link

class NotFound extends React.Component {
    render() {
        return (
            <Container>
                <Heading>404 Not Found</Heading>
            </Container>
        );
    }
}

export default NotFound;
