import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

export const MAX_WIDTH = '1400px';

export const PrimaryFont = css`
  font-family: 'Helvetica Neue Bold Condensed', monospace;
  color: #FFFFFF;
`;

export const SecondaryFont = css`
	font-family: 'Montserrat', monospace;
	font-weight: 200;
	color: #FFFFFF;
`;

export const HeadingUnderline = styled('div')`
  font-family: 'Montserrat-Bold', monospace;
  font-size: 30px;
  color: #FFFFFF;
  display: inline;
  background: linear-gradient(to right,#722D60, #A81245);
  background-repeat: no-repeat;
  background-size: 85% 50%;
  background-position: 0% 80%;
  padding-left: 20px;
  padding-bottom: 10px;

`;

export const SectionBase = props => css`
  max-width: ${MAX_WIDTH};
  margin: auto;
  position: relative;
  display: block;

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  padding-bottom: 40px;

  overflow:auto; 

  :first-child {
    padding-top: 0;
  }

  background-repeat: no-repeat;
  background-size: contain;
  background-position: right top, right bottom;
  background-image: ${props.mobileBackgroundImage || 'none'};
`;

export const SectionTextContent = styled('div')`
  ${SecondaryFont};
  font-size: 18px;
  > p {
    margin-top: 0;
  }
`;

export const SectionLeftColumn = styled('div')`
  box-sizing: border-box;
  padding: 30px;
  @media screen and (min-width: 1260px) {
    max-width: 500px;

    ${props =>
      props.sticky &&
      css`
        > div:first-child {
          position: sticky;
          top: 120px;
        }
      `};
  }
`;

export const SectionRightColumn = styled('div')`
  flex-grow: 1;
  flex-basis: 0;
  padding-top: 20px;

  @media screen and (min-width: 640px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1260px) {
    padding-top: 0;
    padding-left: 40px;
  }
`;

export const LeftContentPadding = css`
  @media screen and (min-width: 640px) {
    padding-left: 20px;
  }
`;

const FlexProps = css`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1260px) {
    flex-direction: row;
  }
`;

export const SectionContent = styled('div')`
  ${LeftContentPadding};
  ${props => props.columns && FlexProps};
  margin-top: 25px;
`;


