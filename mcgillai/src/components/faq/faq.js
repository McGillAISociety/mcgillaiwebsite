import React from 'react'
import styled from '@emotion/styled'

import { SectionBase,
		 HeadingUnderline,
		 Question,
		 Answer } from '../commonstyles.js';

import Background from '../home/assets/background.jpg';

const Container = styled('div')`
  	background-image: url(${Background});
  	background-size: cover; /* or contain depending on what you want */
  	background-attachment: fixed;
  	background-position: center;
 	background-repeat: no-repeat;
  	padding-top: 60px;
`;

const FAQContainer = styled('div')`
	${SectionBase({
    heightPx: 600
  	})};
  	box-sizing: border-box;
`;

class Faq extends React.Component {
	render () {
		return (
			<Container>
				<FAQContainer>
					<HeadingUnderline>General FAQ </HeadingUnderline>
					<Question>How can I get involved with McGill AI? </Question>
					<Answer>
						We’ll be holding various events throughout the year, some of our regular events being workshops, research talks, movie nights, and the MAIS 202 bootcamp. We’ll be working to hold more community building events this year -- if you have any suggestions for us, please feel free to drop us a line either via our Facebook page or mcgillaicontact@gmail.com!
					</Answer>

					<Question>Can I still come to your events even if I have no experience with AI?</Question>
					<Answer>
						Absolutely. We are a student club that strives to learn more about AI by building a community with similar goals - if anything, we’re also learning ourselves.  For more about AI courses at McGill and their pre-requisites, check out this <a href="https://medium.com/mcgill-artificial-intelligence-review/ai-courses-at-mcgill-d10215d65863" target="_blank" >blog post</a> by one of our former co-presidents.
						<br /> <br />If you are new to programming, we would highly recommend that you build a solid understanding of Python fundamentals first. 
					</Answer>

					<Question>I have a startup that uses AI. Can one of your members point me in the right direction?</Question>
					<Answer>
						We are a group of students who are still learning about AI and do not provide consulting services. 
					</Answer>

					<Question>Our company is hiring interns - can you post our listing on your Facebook page?</Question>
					<Answer>
						To be fair to our company sponsors, our Facebook page is reserved for them and our own events only.
					</Answer>

					<Question>Can we submit a blurb to your biweekly newsletter?</Question>
					<Answer>
						For McGill clubs: Yes! Please fill out our blurb form here and one of our execs will be in touch. 
						<br/>For companies in Montreal and abroad: Due to agreements with our sponsors, blurbs submitted by non-sponsors will be reviewed on a case by case basis. In the past, we have included blurbs from non-sponsors for networking events, research opportunities on campus (pertaining to AI), and the AI for Good summer lab. 
					</Answer>

					<Question>Our club would like to collaborate with you on an event, how do we get in touch?</Question>
					<Answer>
						Fill out this form here and a member of our exec team will be in touch! 
					</Answer>

				</FAQContainer>
			</Container>
		);
	}
}

export default Faq