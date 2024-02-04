import React from 'react';
import Image from 'next/image';
import Accordion from '../components/Accordion';
import styles from '../styles/pages/faq.module.scss';


const GettingInvolvedFAQs = [
    {
        question: 'How can I get involved with McGill AI?',
        answer: 'We hold various events throughout the year, with our most prominent recurring events being <a href="https://maishacks.com/">MAIS Hacks</a>, the <a href="https://mcgillailearn.com/">Learnathon</a> and the <a href="https://mcgillai.com/mais202">MAIS 202 Bootcamp</a> offered in the Fall and Winter Semesters. Check out our social media to stay up to date with all of our events happening throughout the year as well as the Events page on the website! We also hold community events such as trivia, movie nights, workshops and more! We always strive to hold more community building events throughout the year. If you have any suggestions for us, please reach out to us via <a href="https://www.facebook.com/McGillAI/">Facebook</a> or send us an email at <a href="mailto:mcgillaicontact@gmail.com">mcgillaicontact@gmail.com</a>!',
    },
    {
        question: 'Can I still come to your events even if I have no experience with AI?',
        answer: 'Absolutely! We are a student club that strives to learn more about AI by building a community with similar goals—if anything, we’re also learning ourselves. For more about AI courses at McGill and their prerequisites, check out this <a href="https://medium.com/mcgill-artificial-intelligence-review/ai-courses-at-mcgill-d10215d65863">blog post</a> by one of our former co-presidents. For programming-oriented events, if you are new to programming, we highly recommend that you build a solid understanding of Python fundamentals.',
    },
    {
        question: 'I want to apply to be a MAIS Exec. When do applications open?',
        answer: 'We’re always excited to welcome new members to our executive team! Exec recruitment usually starts sometime in February. There’s also the possibility that exec positions open up at other times throughout the year. Make sure to stay up to date with our social media as that is where we’ll be posting recruitment updates!',
    },
];

const EventsFAQs = [
    {
        question: 'I missed the application deadline for one of your events. Do you accept late applications?',
        answer: 'No, we do not accept late applications. We have strict application deadlines to ensure that our team can review them in a timely manner, conduct interviews if necessary, and finalize attendance. If you have missed a deadline, <b> please do not contact us asking to reopen registration or consider your application as it is not fair to those who applied on time.</b> <br></br> That being said, for some events, there’s a possibility that the application deadline gets extended. If this is the case, we will make an announcement on our social media. If not, then there has not been an extension.',
    },
    {
        question: 'I submitted something incorrectly on my application, what do I do?',
        answer: 'If when filling out one of our applications, information has been incorrectly submitted, please reach out to us as soon as you can. Point out where the mistake is so we can amend the information. Please make sure to include your name, McGill email and student ID in your correspondence so we can effectively assist you. <b>Please do so before the application deadline.</b>',
    },
];

const SponsorFAQs = [
    {
        question: 'I have a startup that uses AI. Can one of your members point me in the right direction?',
        answer: 'We are a group of students who are still learning about AI and do not provide consulting services.',
    },
    {
        question: 'Our company is hiring interns - can you post our listing on your Facebook page?',
        answer: 'To be fair to our company sponsors, our Facebook page is reserved for them and our own events only. If you’d like to partner with us, please reach out to the VP External at <a href="mailto:external.mcgillai@mcgilleus.ca"> external.mcgillai@mcgilleus.ca.</a>',
    },
    {
        question: 'Can we submit a blurb to your biweekly newsletter?',
        answer: '<b>For McGill clubs:</b> Yes! Please fill out this <a href="https://forms.gle/b1PbLGHds1GQpgww8">form</a> or reach out to us at <a href="mailto:mcgillaicontact@gmail.com"> mcgillaicontact@gmail.com</a> and one of our execs will be in touch. <br></br> <b>For companies in Montreal and abroad:</b> Due to agreements with our sponsors, blurbs submitted by non-sponsors will be reviewed on a case by case basis. In the past, we have included blurbs from non-sponsors for networking events, research opportunities on campus (pertaining to AI), and the AI4Good summer lab.',
    },
    {
        question: 'Our club would like to collaborate with you, how do we get in touch?',
        answer: 'There are several ways to reach out to members of our team, depending on type of collaboration: <br></br> <b>General:</b> <a href="mailto:mcgillaicontact@gmail.com"> mcgillaicontact@gmail.com</a> <br> <b>Events:</b> <a href="mailto:events.mcgillai@mcgilleus.ca"> events.mcgillai@mcgilleus.ca</a>  <br> <b>Podcast:</b> <a href="mailto:podcast.mcgillai@mcgilleus.ca"> podcast.mcgillai@mcgilleus.ca</a> ',
    },
];

export default function FAQ() {
    return (
        <>
            <section>
                <p>Check out some of our most frequently asked questions. <b>Don’t see your question? Reach out to us via social media or send us an email.</b></p>
            </section>
            <section>
                <div className="flex-center">
                    <div className={styles['accordions']}>
                    <h3>Getting involved with MAIS</h3>
                        {GettingInvolvedFAQs.map((faq, index) => (
                            <Accordion key={index} label={faq.question}>
                                <small dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </Accordion>
                        ))}
                    </div>
                </div>
                <div className="flex-center">
                    <div className={styles['accordions']}>
                    <br></br>
                    <h3>MAIS Events</h3>
                        {EventsFAQs.map((faq, index) => (
                            <Accordion key={index} label={faq.question}>
                                <small dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </Accordion>
                        ))}
                    </div>
                </div>
                <div className="flex-center">
                    <div className={styles['accordions']}>
                    <br></br>
                    <h3>Clubs, Companies and Sponsors</h3>
                        {SponsorFAQs.map((faq, index) => (
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
