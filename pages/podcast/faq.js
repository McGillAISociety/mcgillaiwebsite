import React from 'react';

import {
    HeadingUnderline,
    Question,
    Answer,
} from '../../components/commonstyles.js';

class FAQ extends React.Component {
    render() {
        return (
            <>
                <HeadingUnderline>FAQ</HeadingUnderline>
                <Question>
                    What does the structure of an episode look like?
                </Question>
                <Answer>
                    We will broadly be focusing on three ideas each episode:
                    <ul>
                        <li>
                            Getting to know the guest, their background, and the
                            history of the topics they are studying.
                        </li>
                        <li>
                            Looking at the theoretical concepts and frameworks
                            the guest’s research uses and the problems their
                            research is trying to solve.
                        </li>
                        <li>
                            Analyzing this information from an interdisciplinary
                            lens and trying to understand the socio political
                            and economical impact their research has, as well as
                            the ethical considerations that have gone into their
                            work.
                        </li>
                    </ul>
                </Answer>

                <Question>What schedule does the podcast operate on?</Question>
                <Answer>
                    We are looking to publish an episode biweekly starting mid
                    September.
                </Answer>
            </>
        );
    }
}

export default FAQ;
