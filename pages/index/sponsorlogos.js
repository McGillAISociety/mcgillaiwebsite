import React from 'react';
import styled from '@emotion/styled';

// import intact from './sponsors-img/Intactlab.png';
// import sama from './sponsors-img/sama.png';
// import cae from './sponsors-img/cae.png';
// import squarepoint from './sponsors-img/squarepoint.png';

const LogoRow = styled('div')`
    display: flex;
    padding-bottom: 15px;
    max-height: 108px;

    @media screen and (min-width: 480px) {
        padding-bottom: 25px;
    }

    @media screen and (min-width: 1024px) {
        padding-bottom: 30px;
    }

    :last-child {
        padding-bottom: 0;
    }
`;

const LogoWrapper = styled('a')`
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 10px;
    padding-top: 0;
`;

const LogoImage = styled('img')`
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
    -webkit-user-drag: none;
`;

const Logo = ({ alt, src, href }) => (
    <LogoWrapper href={href} target="_blank" rel="noopener">
        <LogoImage alt={alt} src={src} />
    </LogoWrapper>
);

export default () => (
    <React.Fragment>
        <LogoRow>
            <Logo
                alt="sama"
                src="/images/home/sponsors/sama.png"
                href="https://www.sama.com/careers"
            />
        </LogoRow>
        <LogoRow>
            <Logo
                alt="intactlab"
                src="/images/home/sponsors/Intactlab.png"
                href="https://careers.intact.ca/ca/en/"
            />
        </LogoRow>
        <LogoRow>
            <Logo
                alt="cae"
                src="/images/home/sponsors/cae.png"
                href="https://www.cae.com/careers/"
            />
            <Logo
                alt="squarepoint"
                src="/images/home/sponsors/squarepoint.png"
                href="https://www.squarepoint-capital.com/"
            />
        </LogoRow>
    </React.Fragment>
);
