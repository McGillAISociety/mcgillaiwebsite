import React from 'react';
import Image from 'next/image';

// TODO: put the question/answers in an array of objects and use map() to render them

export default function FAQ() {
    return (
        <section>
            <h3>How can I get involved with McGill AI?</h3>
            <p>
                We’ll be holding various events throughout the year, some of our
                regular events being workshops, research talks, movie nights,
                and the MAIS 202 bootcamp. We’ll be working to hold more
                community building events this year -- if you have any
                suggestions for us, please feel free to drop us a line either
                via our{' '}
                <a href="https://www.facebook.com/McGillAI/" target="_blank">
                    Facebook page
                </a>{' '}
                or{' '}
                <a href="mailto:mcgillaicontact@gmail.com">
                    mcgillaicontact@gmail.com
                </a>
                !
            </p>

            <h3>
                I'm confused about the McGill AI Membership - Do I need to be a member to take part in MAIS202 or MAIS Hacks?
            </h3>
            <p>
                You do not need to be a member to take part in the MAIS202 bootcamp or our hackathon! The goal of membership is to get more people involved in the McGill AI community. However, if you would like to take part in our journal club, go to socials or have access to our community discord, you would need to apply for membership. If you are still confused about what is involved in each McGill AI initiative, you can use this flowchart as a reference:
            </p>
            <br></br>
            <p>
                <Image
                    src="/images/faq/flowchart.jpeg"
                    alt="flowchart"
                    height={484}
                    width={720}
                />
            </p>

            <h3>
                Can I still come to your events even if I have no experience
                with AI?
            </h3>
            <p>
                Absolutely. We are a student club that strives to learn more
                about AI by building a community with similar goals - if
                anything, we’re also learning ourselves. For more about AI
                courses at McGill and their pre-requisites, check out this{' '}
                <a
                    href="https://medium.com/mcgill-artificial-intelligence-review/ai-courses-at-mcgill-d10215d65863"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    blog post
                </a>{' '}
                by one of our former co-presidents. If you are new to programming, we would highly recommend that
                you build a solid understanding of Python fundamentals first.
            </p>

            <h3>
                I have a startup that uses AI. Can one of your members point me
                in the right direction?
            </h3>
            <p>
                We are a group of students who are still learning about AI and
                do not provide consulting services.
            </p>

            <h3>
                Our company is hiring interns - can you post our listing on your
                Facebook page?
            </h3>
            <p>
                To be fair to our company sponsors, our Facebook page is
                reserved for them and our own events only. If you'd like to
                partner with us, feel free to email{' '}
                <a href="mailto:external@mcgillai.com">external@mcgillai.com</a>
                .
            </p>

            <h3>Can we submit a blurb to your biweekly newsletter?</h3>
            <p>
                <strong>For McGill clubs:</strong> Yes! Please fill out this{' '}
                <a href="https://forms.gle/NfXYRL38WfWiapPr5" target="_blank">
                    form
                </a>{' '}
                or reach out to us at{' '}
                <a href="mailto:mcgillaicontact@gmail.com">
                    mcgillaicontact@gmail.com
                </a>{' '}
                and one of our execs will be in touch.
                <br></br>
                <strong>For companies in Montreal and abroad:</strong> Due to agreements with our
                sponsors, blurbs submitted by non-sponsors will be reviewed on a
                case by case basis. In the past, we have included blurbs from
                non-sponsors for networking events, research opportunities on
                campus (pertaining to AI), and the AI4Good summer lab.
            </p>

            <h3>
                Our club would like to collaborate with you on an event, how do
                we get in touch?
            </h3>
            <p>
                Reach out at{' '}
                <a href="mailto:mcgillaicontact@gmail.com">
                    mcgillaicontact@gmail.com
                </a>{' '}
                and a member of our exec team will be in touch!
            </p>
        </section>
    );
}
