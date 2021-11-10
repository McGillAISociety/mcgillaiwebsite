import React from 'react';
import styled from 'react-emotion';

const FAQItem = styled('div')``;

const FAQTitle = styled('h2')`
    ${TitleFont};
    font-weight: bold;
    font-size: 1.5em;
`;

const FAQText = styled('div')`
    ${SecondaryText};
    font-size: 1.25em;
`;

export default ({ title, children }) => (
    <FAQItem>
        <FAQTitle>{title}</FAQTitle>
        <FAQText>{children}</FAQText>
    </FAQItem>
);
