import React from 'react';
import styled from '@emotion/styled';

import { SectionBase } from '../commonstyles';

import { TimelineData } from './timelinedata.js';

import TimelineItem from './timelineitem.js';

const Container = styled('div')`
    ${SectionBase};
`;

const TimelineContainer = styled('div')`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 40px 0;

    ::after {
        background: linear-gradient(to bottom, #be073a, #003366);
        content: '';
        position: absolute;
        left: calc(50% - 2px);
        width: 16px;
        height: 100%;
    }
`;

const Title = styled('div')`
    font-family: 'Montserrat-Bold';
    color: #ffffff;
    text-align: center;
    font-size: 36pt;
`;

const Schedule = () =>
    TimelineData.length > 0 && (
        <Container>
            <Title>Upcoming Events</Title>
            <TimelineContainer>
                {TimelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </TimelineContainer>
        </Container>
    );

export default Schedule;
