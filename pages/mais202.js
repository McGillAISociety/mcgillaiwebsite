import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/pages/mais202.module.scss';

export default function MAIS202() {
    return (
        <>
            <div className="section">
                <div className="flex-center">
                    {/* <SubscribeButton href="https://tiny.cc/mais202-w2020-app" target="_blank">APPLY NOW!</SubscribeButton> */}
                    <Carousel
                        autoPlay
                        infiniteLoop
                        stopOnHover={false}
                        showStatus={false}
                        showThumbs={false}
                        interval={1500}
                        className={styles['carousel']}
                    >
                        {['1', '2', '3', '4', '5', '6'].map((number) => (
                            <img
                                key={number}
                                src={`/images/mais202/gallery/${number}.jpg`}
                                alt="MAIS"
                                className={styles['carousel__img']}
                            />
                        ))}
                    </Carousel>

                    <div className="flex-center">
                        {['1', '2', '3', '4'].map((number) => (
                            <img
                                key={number}
                                src={`/images/mais202/stats_${number}.svg`}
                                alt="MAIS Statistic"
                                className={styles['stat-img']}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="section">
                <h2>About The Bootcamp</h2>
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
            </div>
            <div className="section">
                <h2>FAQ</h2>
                <h3>
                    {' '}
                    I am a U0/U1 student interested in taking MAIS 202. What
                    pre-requisites do I need?
                </h3>

                <ul>
                    <li>Introductory Linear Algebra (MATH 133)</li>
                    <li>Calculus I (MATH 139-140/150)</li>
                    <li>Basic Programming (COMP 202/204/208, ECSE 202)</li>
                    <li>
                        Optional but helpful: Multivariate Calculus (MATH
                        151/222/262), more advanced linear algebra (MATH
                        223/236/251/271), probability/stats (MATH 323/356, ECSE
                        205/305)
                    </li>
                </ul>
                <p>
                    If you have not taken some of the aforementioned courses,
                    don’t worry! What matters more is a positive attitude to
                    learning and a passion for math, computer science, and AI
                    demonstrated in your application.
                </p>

                <h3>What is the time commitment like for MAIS 202?</h3>
                <p>
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
                </p>

                {/* <h3>How long does MAIS 202 run for?</h3>
                <p>
                    Fall 2021 cohort:
                    <ul>
                        <li>Applications Open: 9th August - 8th September </li>
                        <li>
                            Final Project Fair: Late November/early December
                        </li>
                    </ul>
                </p> */}

                <h3>What is the selection process like?</h3>
                <p>
                    All applicants are required to complete a coding tutorial
                    and fill out an application form, both of which will be
                    provided on our Facebook page. Shortlisted applicants will
                    then be invited to an interview with the academic lecturers
                    and technical project managers. The applications for our
                    Fall 2021 cohort will open at the end of August.
                </p>

                <h3>Can I enroll in MAIS 202 if I am not a McGill Student?</h3>
                <p>
                    Unfortunately, MAIS 202 will be reserved for McGill students
                    only. Our workshops, research talks, and some other events
                    (check specific Facebook event pages for more details!) are
                    open to the public.
                </p>

                <h3>Will I receive credit for MAIS 202?</h3>
                <p>
                    Students who complete MAIS 202 will have the bootcamp appear
                    on their Co-curricular record.
                </p>

                <h3>
                    I’m a third year student. Can I still enroll in MAIS 202?
                </h3>
                <p>
                    As long as you have not taken COMP 424, COMP 551, or any
                    other advanced courses related to AI, yes!
                </p>

                <h3>Are there any fees associated with MAIS 202? </h3>
                <p>Not at all! The course is completely free of charge :)</p>
            </div>
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
