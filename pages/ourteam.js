import React from 'react';
import Profiles from '../components/Profiles';

const path = (name) => `/images/ourteam/2021-2022/${name}.png`;

export const execData = [
    {
        photo: path('yulu'),
        name: 'Yu Lu Liu',
        position: 'Co-President',
        bio: 'Yu Lu is a third year Stats and Comp Sci student interested in natural language processing and its applications. In her free time, she enjoys gardening and watching nature documentaries.',
        linkedin: 'https://www.linkedin.com/in/yu-lu-liu-5a66861a2/',
    },
    {
        photo: path('parsa'),
        name: 'Parsa Yadollahi',
        position: 'Co-President',
        bio: "Parsa is a fourth and last year Computer Science student interested in software engineering and quantitative finance. A lover of Toronto and El-Drake, he embodies the spirit of Trottier's 3rd floor where he and his trademark biceps roam.",
        linkedin: 'https://www.linkedin.com/in/parsa-yadollahi/',
    },
    {
        photo: path('xinrui'),
        name: 'Xin Rui Li',
        position: 'VP External',
        bio: 'Xin Rui is a third year Computer Science student interested in Data Science, Computer Vision and Cybersecurity. He struggles balancing his free time between videogames and practicing martial arts.',
        linkedin: 'https://www.linkedin.com/in/xin-rui-li-17b03b134/',
    },
    {
        photo: path('maggie'),
        name: 'Maggie Xiong',
        position: 'VP Communications',
        bio: 'Maggie is a second year student majoring in Computer Science and Biology interested in the intersection between these two fields and their direct correlation to AI. In addition, she enjoys hiking, trying out the local foods, and personal writing.',
        linkedin: 'https://www.linkedin.com/in/maggieqxiong/',
    },
    {
        photo: path('josh'),
        name: 'Josh Katofsky',
        position: 'VP Communications',
        bio: 'Josh is a fourth year student majoring in Computer Science with minors in Political Science and Philosophy who’s still exploring AI but is particularly interested in social good applications. He loves to exercise, cook (send him vegetarian recipes!), and wander aimlessly around the Plateau.',
        linkedin: 'https://www.linkedin.com/in/josh-katofsky/',
    },
    {
        photo: path('maya'),
        name: 'Maya Scott-Lourenço',
        position: 'VP Events',
        bio: 'Maya is a fourth year Computer Science student trying to avoid heated gaming moments. Has an interest in the role AI can play in the creative process and always looking for anime/manga reccs. Dm her if you’re also a stationery fiend.',
        linkedin: 'https://www.linkedin.com/in/maya-s-l/',
    },
    {
        photo: path('zac'),
        name: 'Zac Bensemana',
        position: 'VP Events',
        bio: 'Zac is a 4th year Law Student with a minor in Computer science interested in the regulation and industrial application of AI. You can find him either watching TV or walking around outside with pals.',
        linkedin: 'https://www.linkedin.com/in/zachary-bensemana-49bb85188/',
    },
    {
        photo: path('ben'),
        name: 'Ben Segall',
        position: 'VP Finance',
        bio: 'Ben is a second year Cognitive Science student interested in anything related to thought and the brain, especially in the context of technology. He loves playing oboe and listening to music, as well as watching way too much anime in his free time.',
        linkedin: 'https://www.linkedin.com/in/benjamin-segall-a64a04187/ ',
    },
    {
        photo: path('zoe'),
        name: 'Zoe Wefers',
        position: 'Academic Lecturer',
        bio: 'Zoe is a U3 Math and Comp Sci student who is interested in machine learning theory and biomedical application for AI. In her freetime she enjoys swimming and playing board games.',
        linkedin: 'https://www.linkedin.com/in/zoe-wefers-977b981a5/',
    },
    {
        photo: path('mohamed'),
        name: 'Mohamed Mohamed ',
        position: 'Academic Lecturer',
        bio: 'Mohamed Mohamed is a fourth year software engineering student interested in the innovation that machine learning brings to the world. In his free time, he enjoys working out and watching lots and lots of anime.',
        linkedin: 'https://www.linkedin.com/in/mohamed-mohamed-13455719b/',
    },
    {
        photo: path('thomas'),
        name: 'Thomas Jiralerspong',
        position: 'Technical Project Manager',
        bio: 'Thomas is a second year Mathematics and Computer Science student interested in generating music using artificial intelligence and machine learning theory. In his free time, he likes to compose and spend time with his cats.',
        linkedin: 'https://www.linkedin.com/in/thomas-jiralerspong/',
    },
    {
        photo: path('sheheryar'),
        name: 'Sheheryar Parvaz',
        position: 'Technical Project Manager',
        bio: 'Sheheryar is a second year Mathematics and Computer Science student interested in machine learning theory and analysis. In his free time he enjoys reading and gaming.',
        linkedin: 'https://www.linkedin.com/in/sheryparv/',
    },
    {
        photo: path('cheng'),
        name: 'Cheng Chen',
        position: 'Technical Project Manager',
        bio: 'Cheng is in his final year of electrical engineering with a minor in software engineering. He is interested in efficient training of neural networks and neural networks compression. You can often find him shooting a basketball in the gym.',
        linkedin: 'https://www.linkedin.com/in/chengchenmcgill/',
    },
    {
        photo: path('simon'),
        name: 'Simon Berens',
        position: 'Technical Project Manager',
        bio: 'Simon is in his third year of computer science and is interested in the applications of deep learning to middle out compression. For fun, he likes to play spikeball, badminton, chess, and occasionally watch 30 episodes of a Netflix show in a day.',
        linkedin: 'https://www.linkedin.com/in/simonberens/ ',
    },
    {
        photo: path('kaustav'),
        name: 'Kaustav Das Sharma',
        position: 'Podcast Producer ',
        bio: 'Kaustav is in his final year of computer engineering and is enamoured with the prospect of a world where policy does not lag behind technological advancement. In his spare time, he likes reading The Economist, jamming to A$AP Rocky or Frank Ocean, and breaking @Cheng’s and @Youssef’s ankles.',
        linkedin: 'https://www.linkedin.com/in/kdassharma/',
    },
    {
        photo: path('bonnie'),
        name: 'Bonnie Li',
        position: 'Podcast Producer',
        bio: 'Bonnie is a maximum entropy reinforcement learning agent trying to figure out what she wants to do next. She is studying Math and CS, and likes running, hockey, basketball, and hopping around places.',
        linkedin: 'https://www.linkedin.com/in/bonniesjli/',
    },
    {
        photo: path('cole'),
        name: 'Cole Killian',
        position: 'Podcast Producer',
        bio: 'Cole Killian is a fellow Math and Comp Sci Student. Enjoys hiking, guitar, building full stack apps, and competitive programming. Aspiring blogger, ask me about org mode :)',
        linkedin: 'https://www.linkedin.com/in/colekillian/',
    },
    {
        photo: path('himanshu'),
        name: 'Himanshu Ranka',
        position: 'Podcast Producer',
        bio: 'Himanshu is a final year Computer Science student with a minor in Mathematics and is interested in the marriage of Machine learning and Psychology. He is very fond of cooking (also vegetarian) and loves playing basketball.',
        linkedin: 'https://www.linkedin.com/in/himanshu-ranka-635a02181/',
    },
    {
        photo: path('mohamedy'),
        name: 'Mohamed Youssef Bouaouina',
        position: 'Senior Advisor',
        bio: 'Mohamed Youssef is a last year electrical engineering student with a minor in software engineering. He is interested in cloud DevOps and data engineering. Despite not being very skilled at it, he lives and breathes basketball.',
        linkedin: 'https://www.linkedin.com/in/mohamedyoussefb/',
    },
    {
        photo: path('philip'),
        name: 'Philip Tam',
        position: 'Senior Advisor',
        bio: 'Philip Tam is a last year Computer Science student.',
        linkedin: 'https://www.linkedin.com/in/philiptamcode/',
    },
];

const Exec = () => (
    <>
        <Profiles profilesData={execData} />
    </>
);
export default Exec;
