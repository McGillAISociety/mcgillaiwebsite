const path = (event) => `/images/events/2025-2026/${event}.png`;

/**
 * Events should be organized in chronological order
 */

export default [
{
        photo: path('bootcamp25'),
        name: 'MAIS 202',
        datetime: 'September - December, 2025',
        location: 'Leacock 14',
        description: "Kickstart your AI journey with MAIS 202, our fast introductory course to Machine Learning! Whether you're a beginner or looking to deepen your core understanding of ML, this course is designed to equip you with the foundational knowledge and skills. Join us for an engaging semester filled with workshops, hands-on project, interactive lectures, and collaborative learning. Don't miss this opportunity to explore the exciting world of AI and connect with fellow enthusiasts!",
        link: 'https://mcgillai.com/mais-202',
        update: 'Applications for fall 2025 are closed and lectures have started. Stay tuned for winter 2026 applications in January!',

    },
    {
        photo: path('maishacks25'),
        name: 'MAIS Hacks 2025',
        datetime: 'Nov 1st & 2nd, 2025',
        location: 'Trottier Mezzanine',
        description: "🧠 One of Canada’s largest AI Hackathons is back! Join us for a weekend of collaboration, networking, workshops and activities for coders of all levels! Great ideas are created by bringing together people from varied perspectives. At MAIS Hacks, researchers, companies and students will work together to understand, collaborate, and innovate new solutions in the field of artificial intelligence.\nCome collaborate and make something extraordinary in 48 hours!",
    },
    {
        photo: path('learnathon25'),
        name: 'Learnathon 2025',
        datetime: 'January 30th, 2026',
        location: 'Mila - Quebec AI Institute',
        description: "Join some of the most curious students and acclaimed AI researchers in Montreal for an all-day conference! The McGill AI Society has organized a series of talks and events open to interested, curious, and ambitious students ranging from high school to the graduate level. Come learn about AI and meet other like-minded students!",

    },
    {
        photo: path('projectfair25'),
        name: 'Montreal AI Undergraduate Project Fair',
        datetime: 'Winter 2026 (Date TBA)',
        location: 'MILA - Quebec AI Institute',
        description: "Hosted by MAIS and UdeMAI, this groundbreaking event celebrates the brilliance of undergraduate AI minds! Whether you've worked on a project or are eager to dive into one, this is your chance to shine! Join us for a day of innovation, collaboration, and inspiration as students showcase their cutting-edge AI projects. 🌐💡",
    },
    {
        photo: path('mais25'),
        name: 'MAIS Exec Applications',
        datetime: '2025-2026 Academic Year',
        // location: 'EUS Common Room',
        description: "Applications for the 2025-2026 MAIS Executive Team are now open! If you're passionate about AI and eager to contribute to our vibrant community, we encourage you to apply. Join us in shaping the future of AI at McGill through exciting events, workshops, and initiatives. Don't miss this opportunity to make a meaningful impact and connect with like-minded individuals!",
        update: 'Applications are closed for the 2025-2026 academic year. Stay tuned for next year\'s applications in February 2026!',
    },

]