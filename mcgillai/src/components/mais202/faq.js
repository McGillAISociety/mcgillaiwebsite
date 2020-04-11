import React from 'react';
import styled from '@emotion/styled';

import { 
	HeadingUnderline,
	SectionBase,
	Question,
	Answer
 } from '../commonstyles.js';

const Container = styled('div')`
	${SectionBase};
	padding-left: 70px;

	@media only screen and (max-width: 767px) {
	    padding-left: 20px;
	    padding-right: 20px;
    }
`;

class FAQ extends React.Component {
	render() {
		return (
			<Container>
				<HeadingUnderline>MAIS202 FAQ </HeadingUnderline>
				<Question> I am a first year student interested in taking MAIS 202. What pre-requisites do I need for MAIS 202? </Question>
				<Answer>
					<ul>
						<li>Introductory Linear Algebra (MATH 133)</li>
						<li>Calculus (MATH 139-141/150)</li>
						<li>Basic Programming(COMP 202/204/208, ECSE 202 or prior experience)</li>
						<li>Multivariate Calculus (MATH 151/222/262)</li>
						<li>Optional but helpful: more advanced linear algebra (MATH 223/236/251/271), probability/stats (MATH 323/356, ECSE 205/305) </li>
					</ul>
					However, if you have not taken some of the aforementioned courses, don’t worry! What matters more is a positive attitude to learning and a passion for math, computer science, and AI, and are  able to demonstrate this to us in your application. 
				</Answer>

				<Question>What is the time commitment like for MAIS 202?</Question>
				<Answer>
					MAIS 202 participants will be expected to attend one two-hour lecture every week for eight weeks, complete five assignments, and fulfill project deliverables pertaining to their final project. More details regarding assignments and project deliverables can be found on our GitHub repo, but time commitment for the course can range from four to eight hours a week, depending on your familiarity with the material. 
				</Answer>

				<Question>How long does MAIS 202 run for?</Question>
				<Answer>
					Fall 2019 cohort: August 18, 2019 - September 10, 2019<br/>
					Winter 2020 cohort: January 14, 2020 - March 10, 2020
				</Answer>

				<Question>What is the selection process like?</Question>
				<Answer>
					All applicants will have to submit their solutions to a coding challenge, which will be provided on our Facebook page. Shortlisted applicants will then be invited to an interview with the academic lecturers and technical project managers.
				</Answer>

				<Question>Can I enroll in MAIS 202 if I am not a McGill Student?</Question>
				<Answer>
					Unfortunately, MAIS 202 will be reserved for McGill students only. Our workshops, research talks, and some other events (check specific Facebook event pages for more details!) will be open to the public! 
				</Answer>

				<Question>Will I receive credit for MAIS 202?</Question>
				<Answer>
					Not for the time being, unfortunately. However, we are working with the Faculty of Engineering to make MAIS 202 an accredited course in the near future.
				</Answer>

				<Question>I’m a third year student. Can I still enroll in MAIS 202?</Question>
				<Answer>
					As long as you have not taken COMP 424, COMP 551, or any other advanced courses related to AI, yes! However, please note that priority will be given to first and second year students.
				</Answer>

				<Question>Are there any fees associated with MAIS 202? </Question>
				<Answer>
					Not at all! The course is completely free of charge :)
				</Answer>

			</Container>
		);
	}
}

export default FAQ;