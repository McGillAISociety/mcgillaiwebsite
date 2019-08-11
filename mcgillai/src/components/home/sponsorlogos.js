import React from 'react';
import styled from '@emotion/styled';

import NationalBankLogo from './sponsors-img/nationalbank.png';
import CaeLogo from './sponsors-img/cae.png';
import CoveoLogo from './sponsors-img/coveo.png';
import HatchLogo from './sponsors-img/hatch.png';
import SamasourceLogo from './sponsors-img/samasource.png';
import wrnchLogo from './sponsors-img/wrnch.png';
import EricssonLogo from './sponsors-img/ericsson.png';

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
        alt="NationalBank"
        src={NationalBankLogo}
        href="https://jobs.nbc.ca/students-internships"
      />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Cae"
        src={CaeLogo}
        href="https://www.cae.com/careers/job-categories/students-and-new-graduates/"
      />
      <Logo
        alt="Coveo"
        src={CoveoLogo}
        href="https://www.coveo.com/en/company/careers"
      />
      <Logo
        alt="Hatch"
        src={HatchLogo}
        href="https://jobs.hatch.com/go/Student-&-New-Graduate-Jobs/2565100/"
      />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Samasource"
        src={SamasourceLogo}
        href="https://www.samasource.com/careers"
      />
      <Logo alt="wrnch" src={wrnchLogo} href="https://wrnch.ai/careers/" />
      <Logo
        alt="Ericsson"
        src={EricssonLogo}
        href="https://www.ericsson.com/en/careers/student-young-professionals/internships"
      />
    </LogoRow>
  </React.Fragment>
);
