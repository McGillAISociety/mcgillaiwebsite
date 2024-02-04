import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Accordion from '../components/Accordion';
import styles from '../styles/pages/mais202.module.scss';
import styles2 from '../styles/pages/faq.module.scss';

const BootcampFAQs = [
    {
        question: 'I am a U0/U1 student interested in taking MAIS 202. What pre-requisites do I need?',
        answer: 'Note this does <b>NOT</b> include classes you are currently enrolled in. You <b>MUST</b> have completed the following: <br>• Linear Algebra (One of MATH 133/MATH 223 or equivalent) <br> • Calculus I (MATH 139/140/150 or equivalent) <br> • One object-oriented programming class (COMP 202 or equivalent) <br></br> <u>Optional but helpful:</u>  Multivariate Calculus (MATH 151/222/262), more advanced linear algebra (MATH 236/251/271), probability/stats (MATH 323/356, ECSE 205/305) <br></br> If you have not taken any of the above optional courses, don’t worry! What matters more is demonstrating a positive attitude, a willingness to learn, and a passion for math, computer science, and AI in your application.',
    },
    {
        question: 'What is the time commitment like for MAIS 202?',
        answer: 'MAIS 202 participants will be expected to attend one two-hour lecture every week for eight weeks, complete four assignments, and fulfill bi-weekly project deliverables pertaining to their final project. For more details regarding assignments and project deliverables, see our <a href="https://docs.google.com/document/d/1nLrA3Dt3J35puT1hJX8VW8LBsyilfBOXZ856knPjDuE/edit?usp=sharing">2023-2024 Syllabus</a>. The time commitment for the course can range from four to eight hours a week (approx. a 3-credit McGill course), depending on your familiarity with the material. Please consider this commitment when applying!',
    },
    {
        question: 'When do applications usually open?',
        answer: 'Note that applications for the Fall cohort usually open at the end of August, and applications for the Winter cohort usually open at the end of December. Make sure to stay up to date with our social media for any further updates or extensions. <b>We do NOT accept late applications.</b>',
    },
    {
        question: 'What is the application process like?',
        answer: 'Applications when open will be available on our website and social media. As part of the application, students must complete a coding exercise in Google Colab (Notebook and instructions provided in the application form). Shortlisted applicants will be invited to an interview where they will have to answer math questions as well as questions pertaining to their coding exercise. Selected bootcampees will be contacted via email to confirm their acceptance.',
    },
    {
        question: 'Can I enroll in MAIS 202 if I am not a McGill Student?',
        answer: 'Unfortunately, MAIS 202 is reserved for McGill students only. Our workshops, research talks, and other events (posted on our <a href="https://mcgillai.com/events/2023-2024"> Events</a> page and social media) are open to the public.',
    },
    {
        question: 'Will I receive credit for MAIS 202?',
        answer: 'Students who successfully complete the MAIS 202 Bootcamp will have their involvement officially recognized on their McGill Co-Curricular Record. Note that this is a bootcamp offered by the McGill AI Society, a student club. It is <b>NOT</b> an official course at McGill University.',
    },
    {
        question: 'I’m a third/fourth year student. Can I still apply to MAIS 202?',
        answer: 'As long as you have <b>NOT</b> taken one or more of COMP 424, COMP 551, ECSE 551, ECSE 552, or any other advanced course related to AI, yes! <br></br> Note that this bootcamp is intended for beginners and those with little to no experience with AI/ML. Any applicant who is deemed overqualified will be rejected.',
    },
    {
        question: 'Are there any fees associated with MAIS 202?',
        answer: 'Not at all! The course is completely free of charge :)',
    },
];

export default function MAIS202() {
    return (
        <>
            <section>
                <div className="flex-center">
                    {/* <SubscribeButton href="https://tiny.cc/mais202-w2020-app" target="_blank">APPLY NOW!</SubscribeButton> */}
                    <Carousel
                        autoPlay
                        infiniteLoop
                        stopOnHover={false}
                        showStatus={false}
                        showThumbs={false}
                        interval={4500}
                        className={styles['carousel']}
                    >
                        {['bootcamp2022', '1', '2', '3', '4', '5', '6'].map(
                            (number) => (
                                <Image
                                    key={number}
                                    src={`/images/mais202/gallery/${number}.jpg`}
                                    alt="MAIS 202"
                                    width={640}
                                    height={480}
                                />
                            )
                        )}
                    </Carousel>

                    <div className={`flex-center ${styles['stats']}`}>
                        {['1', '2', '3', '4'].map((number) => (
                            <div className={styles['stats__img']}>
                                <Image
                                    key={number}
                                    src={`/images/mais202/stats_${number}.svg`}
                                    alt="MAIS Statistic"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <section>
                <h2>Winter 2024 Applications now open!</h2>
                <p className={`${styles['center']}`}>
                    {' '}
                    Check out our{' '}
                    <a
                        href="https://fb.me/e/38KKiYK2h"
                        target="_blank"
                    >
                        Facebook page
                    </a>{' '}
                    for more details, or apply{' '}
                    <a
                        href="https://forms.gle/JWZFo1dPcE2JjaoJ6"
                        target="_blank"
                    >
                        here.
                    </a>{' '}
                </p>
            </section> */}
            <section>
                <h2>About</h2>
                <h3>How it started</h3>
                <p>
                    {' '}
                    To fill the lack of introductory AI courses for
                    undergraduate students, the McGill AI Society designed an
                    intensive, ten-week course with the sole intention of
                    equipping 30 young, talented undergraduates with the skills
                    required to land an AI position in industry.{' '}
                </p>
                <h3>How it works</h3>
                <p>
                    {' '}
                    The MAIS 202 bootcamp is an accelerated survey course which
                    aims to teach lower-year undergraduates the fundamentals of
                    machine learning. In addition to weekly lectures and
                    assignments, participants worked towards an individual or
                    team final project which was presented at the McGill AI
                    Project Fair.
                </p>
                <h3>Takeaways</h3>
                <p>
                    MAIS 202 provides students with both theoretical and
                    hands-on skills required for ML research and industry. Our
                    dedicated team of academic lecturers and technical project
                    managers offer real-time mentorship and feedback, as well as
                    opportunities to network with fellow ML enthusiasts!
                </p>
            </section>
            <section>
                <h2>Bootcamp FAQs</h2>
                <div className="flex-center">
                    <div className={styles2['accordions']}>
                        {BootcampFAQs.map((faq, index) => (
                            <Accordion key={index} label={faq.question}>
                                <small dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </Accordion>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

// Alumni profiles to be used later:
/*
export const alumniData = [
    {
        photo: '/alumni-img/f2019/agnes.jpg',
        name: 'Agnes Totschnig',
        bio: 'Agnes Totschnig is a first year Mathematics student. Besides puzzling over mathematical problems, she is passionate about computer science and theoretical physics. She enjoys hiking in her free time.',
        github: 'https://github.com/atotschnig/Who-s_the_Artist',
    },
    {
        photo: '/alumni-img/f2019/agnes.jpg',
        name: 'Alexander Blostein',
        bio: '',
        github: 'https://github.com/ablost33/Neural-Network-of-Artistic-Style',
    },
    {
        photo: '/alumni-img/f2019/angelica.jpg',
        name: 'Angelica Janevski',
        bio: 'Angelica is a second year computer science major. She likes data science, physics, and 8 hours of sleep.',
        github: 'https://github.com/angelicajanevski/MAIS202-CGAN',
    },
    {
        photo: '/alumni-img/f2019/benjamin.jpg',
        name: 'Benjamin Jiang',
        bio: 'Benjamin Jiang is a second-year Statistics and Computer Science student. In his free time, he likes to play sports.',
        github: 'https://github.com/jiangbenjamin/MAIS-202-Final-Project.git',
    },
    {
        photo: '/alumni-img/f2019/david.jpeg',
        name: 'David Holcer',
        bio: 'David Holcer is an 18 year-old, freshman student studying Mathematics and Computer Science at McGill University. David has pursued his passions throughout highschool, leading a Math Contest Club and participating in the 2015 and 2016 Canada Wide Science Fairs. His scientific research topics have included Kleiber’s Law, Benford’s Law, Nonlinear Optimization, Markov Chains, and Markov Clustering Algorithms for DNA Analysis.',
        github: 'https://github.com/davidholcer/All-The-News-Sentiment-Analysis',
    },
    {
        photo: '/alumni-img/f2019/deepak.jpg',
        name: 'Deepak Singh',
        bio: 'Deepak Singh is a U2 finance student switching into Computer Science. He is interested in FinTech, data science and natural language processing. In his free time, he does Calisthenics and Dragon Boat.',
        github: 'https://github.com/Deepok101/MAIS202_FINAL',
    },
    {
        photo: '/alumni-img/f2019/cole.jpg',
        name: 'Cole Killian',
        bio: "Watch out! Another Statistics and Comp Sci major coming through. His pastimes include finding ways to implement AI into entrepreneurial projects. You'll always find him down for a walk.",
        github: 'https://github.com/Ruborcalor/202mais',
    },
    {
        photo: '/alumni-img/f2019/gohar.jpg',
        name: 'Gohar Saqib Fazal',
        bio: 'Gohar is a 2nd-year electrical engineering student, who has a passion for technical design. He aspires to use machine learning along with his creative thinking skills to develop world-changing and revolutionizing technologies.',
        github: 'https://github.com/goharsaqibfazal/MAIS202_Sign_Language_Translator',
    },
    {
        photo: '/alumni-img/f2019/kelvin.jpg',
        name: 'Kelvin Jin-Yang',
        bio: 'Kelvin is a U3 finance major student. His area of interest lies at the intersection of finance and technology. Outside of the academic fields, he enjoys hiking and badminton.',
        github: 'https://github.com/kelvinjinyang/MAISFinalproject',
    },
    {
        photo: '/alumni-img/f2019/kusha.jpeg',
        name: 'Kusha Sareen',
        bio: 'Kusha is a first year student at McGill University studying Physiology and Mathematics. Although new to the world of AI, Kusha is passionate about learning new things and hopes to apply computer science principles to biology.',
        github: 'https://github.com/kushasareen/mais_final/tree/master',
    },
    {
        photo: '/alumni-img/f2019/lin.jpg',
        name: 'Lin Xiao Zheng',
        bio: 'Lin Xiao is a first year Computer Science student with a strong interest in Mathematics. She enjoys cooking in her free time.',
        github: 'https://github.com/zhenglinxiao/MAIS202_Final_Project',
    },
    {
        photo: '/alumni-img/f2019/michelle.jpg',
        name: 'Michelle Wang',
        bio: 'Michelle is a second year Neuroscience student. Her interests include applying machine learning to the field of neuroscience. She would also like to use knowledge about how the brain learns to help develop artificial intelligence algorithms.',
        github: 'https://github.com/michellewang/grapheme-to-phoneme',
    },
    {
        photo: '/alumni-img/f2019/nadiem.jpg',
        name: 'Nadiem Ahmed',
        bio: 'Nadiem is a third-year Mechanical Engineering student. He’s interested in the application of machine learning to solve business problems and for social good. In his free time, Nadiem likes to play and watch sports.',
        github: 'https://github.com/nadiem99/MAIS202finalproject',
    },
    {
        photo: '/alumni-img/f2019/steve.jpg',
        name: 'Stephen Fay',
        bio: 'Stephen is currently pursuing an undergraduate degree in Mathematics and Physics at McGill University. He enjoys reading, biking, walking, talking, sleeping, problem-solving, and coding. He grew up in Brussels (Belgium) and was a member of the souts et guides pluralistes throughout childhood (and briefly a scout-leader) before moving to Canada.',
        github: 'https://github.com/dcxSt/MAIS202---21cm-ionization-maps-of-the-universe',
    },
    {
        photo: '/alumni-img/f2019/tomer.jpg',
        name: 'Tomer Moran',
        bio: 'Tomer is a math undergrad who loves almost every subject in math, physics, computer science and AI, except for when he is asked to integrate ridiculous functions over ridiculous shapes in his (ridiculous) calculus class. Otherwise, he also likes ultimate frisbee and plays Overwatch in his free time.',
        github: 'https://github.com/Totom3/musical-intelligence',
    },
    {
        photo: '/alumni-img/f2019/xinrui.jpg',
        name: 'Xin Rui Li',
        bio: 'Xin Rui Li is a second-year Software Engineering student minoring in statistics. He’s interested in generative models in machine learning. In his free time, he especially enjoys playing basketball.',
        github: 'https://github.com/xinruili07/MusicGenreClassifier',
    },
    {
        photo: '/alumni-img/f2019/yulu.jpeg',
        name: 'Yu Lu Liu',
        bio: 'Yu Lu is a first-year Statistics and Computer Science student. She’s interested in many fields of machine learning such as sentiment analysis and computer vision. In her free time, she enjoys watching documentaries of deep-sea creatures and rereading her favorite novels.',
        github: 'https://github.com/YuLuLiu/Sarcasm_Detection.git',
    },
    {
        photo: '/alumni-img/f2019/zilong.jpg',
        name: 'Zilong Wang',
        bio: 'Zilong is a U1 Cognitive Science student in COMP stream. He is passionate about state-of-the-art technology and learning new languages, but his current dream is to become a music producer and Youtuber.',
        github: 'https://github.com/mobraine/MAIS-202-Final-Prediction-of-recidivism-model',
    },
];
*/
