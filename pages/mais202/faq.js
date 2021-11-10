import React from 'react';
import styled from '@emotion/styled';

import {
    HeadingUnderline,
    SectionBase,
    Question,
    Answer,
} from '../../components/commonstyles.js';

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
                <Question>
                    {' '}
                    I am a U0/U1 student interested in taking MAIS 202. What
                    pre-requisites do I need?
                </Question>
                <Answer>
                    <ul>
                        <li>Introductory Linear Algebra (MATH 133)</li>
                        <li>Calculus I (MATH 139-140/150)</li>
                        <li>Basic Programming (COMP 202/204/208, ECSE 202)</li>
                        <li>
                            Optional but helpful: Multivariate Calculus (MATH
                            151/222/262), more advanced linear algebra (MATH
                            223/236/251/271), probability/stats (MATH 323/356,
                            ECSE 205/305)
                        </li>
                    </ul>
                    If you have not taken some of the aforementioned courses,
                    don’t worry! What matters more is a positive attitude to
                    learning and a passion for math, computer science, and AI
                    demonstrated in your application.
                </Answer>

                <Question>
                    What is the time commitment like for MAIS 202?
                </Question>
                <Answer>
                    MAIS 202 participants will be expected to attend one
                    two-hour lecture every week for eight weeks, complete four
                    assignments, and fulfill bi-weekly project deliverables
                    pertaining to their final project. For more details
                    regarding assignments and project deliverables, see our{' '}
                    <a href="https://drive.google.com/file/d/10EoBsvygM6U5v-AVIHXs0MVm_xGXZ0HA/view?fbclid=IwAR3wC0q2r8ugqb2sVAGAMPNXXU9b0jU8a27wQ_9VIuoUXsHeRP8Gowr-CQ8">
                        2021/2022 Syllabus
                    </a>
                    . The time commitment for the course can range from four to
                    eight hours a week (~2-3 credit McGill course), depending on
                    your familiarity with the material.
                </Answer>

                {/* <Question>How long does MAIS 202 run for?</Question>
                <Answer>
                    Fall 2021 cohort:
                    <ul>
                        <li>Applications Open: 9th August - 8th September </li>
                        <li>
                            Final Project Fair: Late November/early December
                        </li>
                    </ul>
                </Answer> */}

                <Question>What is the selection process like?</Question>
                <Answer>
                    All applicants are required to complete a coding tutorial
                    and fill out an application form, both of which will be
                    provided on our Facebook page. Shortlisted applicants will
                    then be invited to an interview with the academic lecturers
                    and technical project managers. The applications for our
                    Fall 2021 cohort will open at the end of August.
                </Answer>

                <Question>
                    Can I enroll in MAIS 202 if I am not a McGill Student?
                </Question>
                <Answer>
                    Unfortunately, MAIS 202 will be reserved for McGill students
                    only. Our workshops, research talks, and some other events
                    (check specific Facebook event pages for more details!) are
                    open to the public.
                </Answer>

                <Question>Will I receive credit for MAIS 202?</Question>
                <Answer>
                    Students who complete MAIS 202 will have the bootcamp appear
                    on their Co-curricular record.
                </Answer>

                <Question>
                    I’m a third year student. Can I still enroll in MAIS 202?
                </Question>
                <Answer>
                    As long as you have not taken COMP 424, COMP 551, or any
                    other advanced courses related to AI, yes!
                </Answer>

                <Question>
                    Are there any fees associated with MAIS 202?{' '}
                </Question>
                <Answer>
                    Not at all! The course is completely free of charge :)
                </Answer>
            </Container>
        );
    }
}

export default FAQ;
