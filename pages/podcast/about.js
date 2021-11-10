import React from 'react';
import {
    HeadingUnderline,
    Question,
    Answer,
} from '../../components/commonstyles.js';

export default function About() {
    return (
        <>
            <HeadingUnderline>About</HeadingUnderline>
            <Question>Origins</Question>
            <Answer>
                There are very few places in the world like Montreal and McGill
                which have such a concentration of talent in the field of AI/ML.
                MAIS primarily serves to build a community with a shared passion
                for the field, spreading knowledge and resources to help aid
                people trying to enter it. Therefore, a podcast would be the
                perfect platform to promote interest and reduce the barrier to
                entry which currently exists in the AI ecosystem. We hope to
                focus on promoting the achievements of underrepresented people
                within the field, promoting their research/work, give them a
                platform to share their experiences and allow others to use that
                information to break into the field while being more aware of
                the challenges and opportunities.
            </Answer>
            <Question>Vision/Goals</Question>
            <Answer>
                <ul>
                    <li>
                        Attract students from all backgrounds/disciplines
                        towards AI research.
                    </li>
                    <li>
                        Promote the research of McGill & MILA professors by
                        connecting fundamental AI/ML principles to their
                        research interests/disciplines.
                    </li>
                    <li>
                        Cover the current/potential applications of AI research
                        into technology and society’s daily lives.
                    </li>
                    <li>
                        Analyse the socioeconomic, geopolitical and ethical
                        concerns with AI research.
                    </li>
                    <li>
                        Destigmatize the field of AI and reduce barriers to
                        entry to all those interested/curious.
                    </li>
                </ul>
            </Answer>
        </>
    );
}
