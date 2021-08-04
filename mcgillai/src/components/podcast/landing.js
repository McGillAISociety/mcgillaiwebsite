import React from 'react';
import styled from '@emotion/styled';

import { SectionBase, HeadingUnderline } from '../commonstyles.js';

const Subtitle = styled('div')`
    ${SectionBase({
        heightPx: 600,
    })};
    font-family: 'Montserrat-Bold';
    color: #ffffff;
    font-size: 25px;
    text-align: center;
`;

export default function Landing() {
    return (
        <>
            <HeadingUnderline className="content">
                McGill AI Podcast
            </HeadingUnderline>
            <Subtitle>
                Connnecting fundemantal AI/ML principles to their research
                disciplines
            </Subtitle>
        </>
    );
}
