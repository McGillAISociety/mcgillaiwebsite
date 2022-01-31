import React from 'react';
import ContentGrid from '../components/ContentGrid';

const research = [
    {
        title: 'MILA (Quebec Artificial Intelligence Institute)',
        description:
            'A community of machine learning researchers, many of whom are McGill or UdeM professors. They have research projects in numerous fundamental and applied areas of ML.',
        href: 'https://mila.quebec/en/',
    },
    {
        title: 'MILA Tea Talks',
        description:
            'Scientific keynote-like talks given at Mila on Friday mornings (10:30am EDT). Open to the public, but the vast majority of attendees are Mila students and professors, so the talks are aimed at that level of understanding.',
        href: 'https://sites.google.com/lisa.iro.umontreal.ca/tea-talks/home',
    },
    {
        title: 'Ivado (Institue for Data Valorization)',
        description:
            'IVADO aims to bring together industry professionals and academic researchers to develop cutting-edge expertise in data science, operational research and artificial intelligence.',
        href: 'https://ivado.ca/en/',
    },
    {
        title: 'McGill CIM (Centre for Intelligence Machines)',
        description:
            'An inter-departmental inter-faculty research group at McGill formed to promote research on intelligent systems. A handful of McGill labs that apply AI to different fields can be found on their website!',
        href: 'https://www.cim.mcgill.ca/',
    },
    {
        title: 'McGill Reasoning and Learning Lab',
        description:
            'This lab, co-directed by Professors Prakash Panangaden, Doina Precup, Joelle Pineau, and Jackie Chi Kit Cheung, studies probabilistic systems. Current areas of interest include Markov processes, reinforcement learning and computational linguistics.',
        href: 'http://rl.cs.mcgill.ca/index.html',
    },
    {
        title: 'AI4Good Lab',
        description:
            'Brings together a cohort of 30 women from across Canada for a mashup of AI lectures, workshops, and team projects. Instructors and mentors include university researchers, graduate students, and government/idustry practitioners.',
        href: 'https://www.ai4goodlab.com/',
    },
];

const ethicsSocietyRegulation = [
    {
        title: 'McGill Responsible Autonomy & Intelligent Systems Ethics (RAISE)',
        description:
            'Led by Prof. AJung Moon, the lab investigates human-robot interaction, roboethics, and AI ethics.',
        href: 'https://www.ajungmoon.com/',
    },
    {
        title: 'Reading Group on Design, Engineering, and Society (DES)',
        description:
            'A joint initiative by Professors Theodora Vardouli (Architecture) and AJung Moon (Electrical and Computer Engineering), aimed at fostering interdisciplinary conversations on social aspects of design and technology.',
        href: 'https://blogs.mcgill.ca/design-engineering-society/',
    },
    {
        title: 'Cyberjustice Lab',
        description:
            'The Cyberjustice Lab analyses the impact of technologies on justice and develops concrete technological tools that are adapted to the reality of the justice system.',
        href: 'https://www.cyberjustice.ca/en/',
    },
    {
        title: 'McGill AI and Law<',
        description:
            "Check this out if you're interested in the intersection between law and AI!",
        href: 'https://www.facebook.com/pages/category/School/McGill-AI-Law-492418731238015/',
    },
    {
        title: 'AI and Law Reading Group',
        description:
            'Speaker series organized by & at McGill in conjunction with the Cyberjustice Lab.',
        href: 'https://blogs.mcgill.ca/ai-law-mcgill/',
    },
    {
        title: 'Montreal AI Ethics Institute (MAIEI)',
        description:
            'MAIEI’s mission is to help define humanity’s place in a world increasingly characterized and driven by algorithms. They publish tangible and applied technical and policy research in the ethical, safe and inclusive development of AI.',
        href: 'https://montrealethics.ai/',
    },
];

const aiXother = [
    {
        title: 'CSCDS (Centre for Social and Cultural Data Science)',
        description:
            'A multi-disciplinary community of scholars who apply data science to research in the humanities and social sciences through training, networking and support.',
        href: 'https://www.mcgill.ca/cscds/',
    },
    {
        title: 'Network Dynamics Lab',
        description:
            'The Network Dynamics Lab is led by Prof. Derek Ruths and aims to measure and model large-scale human behavior, such as those found within social platforms, NYT bestsellers, human communities, political parties, and ancient civilizations.',
        href: 'https://www.mcgill.ca/cscds/',
    },
    {
        title: '.txtLAB @ McGill',
        description:
            '.txtLAB applies statistical and machine learning techniques to the study of culture, with a focus on cultural inequality.',
        href: 'https://txtlab.org/',
    },
    {
        title: 'demoTIP',
        description:
            'The DemoTIP laboratory applies state of the art research methods, including machine learning, to bring answers to empirical problems in political science.',
        href: 'http://www.aaronerlich.com/demotip-laborator',
    },
    {
        title: 'Policy and Data Science Summer Program',
        description:
            'THeld by CSCDS and the Max Bell School of Public Policy, the program trains students from non-technical backgrounds in data science. Students finish the program by applying their skills in a policy internship.',
        href: 'https://www.policyanddatascience.org/',
    },
    {
        title: 'McGill Neuro Tech',
        description:
            'A student-run design team that participates in the NeuroTechX Student Clubs Competition each year, having won each year. Projects usually involve ML applications in neurotechnology.',
        href: 'https://www.facebook.com/McGillNeurotech/',
    },
    {
        title: 'McGill Computational Biology and Artificial Intelligence Lab',
        description:
            'A cool opportunity for anyone keen on AI and life sciences!',
        href: 'http://www.ece.mcgill.ca/~aemad2/',
    },
];

// TODO: find a solution for the description overflow

export default function MTLAI() {
    return (
        <section>
            <p>
                The following is a list of different ways students can get
                involved with the AI and ML community in Montreal. While we
                tried our best to capture as many opportunities as possible, if
                you feel this list is lacking a certain group or organization,
                please let us know at&nbsp;
                <a href="mailto:mcgillaicontact@gmail.com">
                    mcgillaicontact@gmail.com
                </a>
                ! Of course, the best way for you to stay updated with upcoming
                AI events at McGill and Montreal is by following us on&nbsp;
                <a href="https://www.facebook.com/McGillAI">Facebook</a>
                &nbsp; and subscribing to our&nbsp;
                {/* TODO: replace form */}
                <a
                    rel="noopener noreferrer"
                    href="https://forms.gle/L8HqJWJ2KSy3Cd6y5"
                    target="_blank"
                >
                    newsletter
                </a>
                .
            </p>
            <section>
                <h2> AI/ML Research </h2>
                <ContentGrid content={research} />
            </section>
            {/* TODO: a section on AI-focused companies */}
            <section>
                <h2>AI Ethics, Society, and Regulation</h2>
                <ContentGrid content={ethicsSocietyRegulation} />
            </section>
            <section>
                <h2>AI x Other Fields</h2>
                <ContentGrid content={aiXother} />
            </section>
        </section>
    );
}
