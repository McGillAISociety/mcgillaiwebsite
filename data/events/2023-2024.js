const path = (event) => `/images/events/2023-2024/${event}.png`;

/**
 * Events should be organized in chronological order
 */

export default [
    {
        photo: path('maishacks23'),
        name: 'MAIS Hacks 2023',
        datetime: 'Sep 30th - Oct 1st, 2023',
        description: "🧠 One of Canada’s largest AI Hackathons is back! Join us for a weekend of collaboration, networking, workshops and activities for coders of all levels! Great ideas are created by bringing together people from varied perspectives. At MAIS Hacks, researchers, companies and students will work together to understand, collaborate, and innovate new solutions in the field of artificial intelligence.\nCome collaborate and make something extraordinary in 24 hours!",
    },
    {
        photo: path('trivianight23'),
        name: 'AI Trivia Night',
        datetime: 'October 30th, 2023',
        description: "Get ready for an electrifying evening of knowledge and fun! To celebrate your hard work after midterm season, we are organizing an AI trivia night with MAIS! Put your AI expertise to the test, mingle with fellow AI enthusiasts and seize the chance to broaden your prowess in AI! 🦾❓🧠",
    },
    {
        photo: path('googlecareerpanel23'),
        name: 'Google Career Panel',
        datetime: 'November 9th, 2023',
        description: "We’re delighted to announce that we’ll be organizing a career panel with Google in November! Meet Google Engineers from the Montreal Office and learn about their journeys in tech, plus their advice for undergrad students. The panel will be followed by a Q&A session.",
    },
    {
        photo: path('beyondgrading'),
        name: 'Beyond Grading: Assessment in the Age of AI with TLS',
        datetime: 'November 22nd, 2023',
        description: "Join us on November 22nd for a thought-provoking panel discussion where we will delve into the rapidly evolving world of generative AI, explore what it is and what it isn’t, and share our reflections on the fears, hopes, and challenges of AI as it relates to teaching, learning, and assessment. Through this discussion, we aim to: Define generative AI and Large Language Models (LLMs), explore the impact of generative AI on teaching and learning, and analyze the ethical implications of generative AI on assessment. Panelists across the McGill community will be speaking, including MAIS' VP for Community Engagement, Meriem Mehri.",
    },
    {
        photo: path('towercompanycrawl'),
        name: 'MAIS Company Crawl: Tower Research',
        datetime: 'November 29th, 2023 from 1:00 PM - 2:15 PM',
        description: "Take a break from schoolwork and visit Tower Research Capital, the first stop in our 2023-24 Company Crawl! We'll be visiting the office on November 29th from 1:00 PM to 2:15 PM, have some snacks and chat with some technical members to learn more about the firm, what they do and get answers to any questions you may have!"
    },
    {
        photo: path('mtlundergradprojectfair'),
        name: 'Montreal AI Undergraduate Project Fair',
        datetime: 'March 1st, 2024',
        description: "Hosted by MAIS and UdeMAI, this groundbreaking event celebrates the brilliance of undergraduate AI minds! Whether you've worked on a project or are eager to dive into one, this is your chance to shine! Join us for a day of innovation, collaboration, and inspiration as students showcase their cutting-edge AI projects. 🌐💡",
    },
]