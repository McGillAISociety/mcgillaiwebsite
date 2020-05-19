import React from 'react'
import styled from '@emotion/styled'

import { SectionBase,
		 HeadingUnderline,
		 Question,
		 Answer} from '../commonstyles.js';

import Background from '../home/assets/background.jpg';
import Resources from './resources.js';

const Container = styled('div')`
  	background-image: url(${Background});
  	background-size: cover; /* or contain depending on what you want */
  	background-attachment: fixed;
  	background-position: center;
 	background-repeat: no-repeat;
  	padding-top: 125px;
  	padding-left: 70px;

  	@media only screen and (max-width: 767px) {
	    padding-left: 20px;
    }
`;

const MtlaiContainer = styled('div')`
	${SectionBase({
    heightPx: 600
  	})};
  	box-sizing: border-box;

		font-family: 'Montserrat-Bold';
		color: #FFFFFF;
		font-size: 48px;
		text-align: center;
`;
const MtlContainer = styled('div')`

`;

class Mtlai extends React.Component {
	render () {
		return (
			<MtlContainer>
			<Container>
				<MtlaiContainer>
					<HeadingUnderline className='content'>Montreal's AI Scene </HeadingUnderline>
					<div className = 'content--inner'>
					<p>McGill AI's Guide to MTL!</p>
					<Question>Hello!</Question>
					<Answer>
					The following is a list of different ways students can get involved with the AI and ML community in Montreal. <br/>
					For technical content to begin learning ML, please visit our MAIS 202 Course Notes page. While our team tried our best to capture as many opportunities as possible, if you feel this list is lacking a certain group of organization, please let us know at <a href="mailto:mcgillaicontact@gmail.com">mcgillaicontact@gmail.com</a>! <br/>
					Of course, the best way for you to stay updated with upcoming AI events at McGill and Montreal is by following us on Facebook and subscribing to our newsletter ;)
					</Answer>

					</div>
				</MtlaiContainer>
				</Container>
					<Resources></Resources>

			</MtlContainer>
		);
	}
}

export default Mtlai
