const path = (event) => `/images/events/2022-2023/${event}.png`;

/**
 * Events should be organized in chronological order
 */

export default [
    {
        photo: path('pythonfordatascience'),
        name: 'Python for Data Science',
        datetime: 'August 22nd, 2022',
        location: 'Virtual',
        description: "This workshop will bring you up to speed with all the coding skills needed to apply to and excel in the MAIS 202 bootcamp and the upcoming MAIS Hacks in October! We will cover everything from using common libraries for data analytics and data-wrangling, to simple plotting and modeling!",
    },
    {
        photo: path('membershipkickofffall22'),
        name: 'MAIS Membership Fall 2022 Kickoff',
        datetime: 'September 28th, 2022 at 6:30 PM',
        location: 'EUS Common Room',
        description: "Get hyped, because our first member meeting is Wednesday September 28th at 6:30pm in the EUS common room! We will be discussing our upcoming events/goals for the membership, and will also be playing some chill games in smaller groups to get to know each other :) There will be free food and drinks. We hope to see you there!",
    },
    {
        photo: path('maishacks22'),
        name: 'MAIS Hacks 2022',
        datetime: 'October 1st-2nd, 2022',
        description: "Canada’s largest AI Hackathon is back! Join us for a weekend of collaboration, networking, workshops and activities for coders of all levels!",
    },
    {
        photo: path('davidrolnick'),
        name: 'Journal Club with David Rolnick',
        datetime: 'October 19th, 2022',
        location: 'EngMd 276',
        description: "Hear from David Rolnick about how we can use AI to help lower carbon emissions and fight climate change. Meeting will be in EngMd 276!",
    },
    {
        photo: path('ethicsinaipanel'),
        name: 'Ethics in AI',
        datetime: 'November 16th, 2022 at 6:30 PM',
        location: 'McConnell Engineering Building, Room 204',
        description: "Algorithms are ingrained into every part of our day to day lives, but have you ever stopped to wonder about how these algorithms affect our lives? Are you concerned about how AI is used in policing, cancer diagnostics, immigration and employment? Are you concerned about the ethics and social impacts surrounding the fast-growing field of AI? Come join us on November 16th where AI ethics experts will discuss their experience on navigating these ambiguous topics and provide insight! In addition to our panelists sharing their experiences, there will also be some time reserved at the end to casually chat with the different researchers.",
    },
    {
        photo: path('kaleemsiddiqi'),
        name: 'Journal Club with Kaleem Siddiqi',
        datetime: 'November 23rd, 2022',
        description: "Kaleem Siddiqi is coming to speak about Ultrastructure Imaging to Understand Brain Cells and Biological Tissue this Wednesday November 23rd. We will be closing it once we reach max capacity so make sure to register ASAP if you'd like to attend!",
    },
    {
        photo: path('howtogetaninternship'),
        name: 'How to get an Internship',
        datetime: 'January 16th, 2023 from 6:00 PM - 7:30 PM',
        location: 'Trottier 0070',
        description: "Are you looking to do your first internship in data science or machine learning, but don't know where to start? Come to McGill AI Society's 'How to get an Internship' workshop on January 25th, where we will teach you all tips and tricks. You'll have the opportunity to ask questions from five panelists who have done data science, ML, and software engineering internships during their undergrad!",
    },
    {
        photo: path('membershipkickoffwinter23'),
        name: 'MAIS Membership Winter 2023 Kickoff',
        datetime: 'February 2nd, 2023 at 6:30 PM',
        description: "We're having a general meeting Thursday, February 2nd at 6:30pm to kick off membership for the winter semester! We'll discuss a bit about upcoming MAIS events, play some games, and then the rest will be an opportunity for everyone to bond 🫶 Food will of course be provided, make sure to sign up ASAP :)",
    },
    {
        photo: path('downtownyulcompanycrawl'),
        name: 'Downtown YUL Company Crawl',
        datetime: 'February 23rd, 2023',
        location: 'McGill Downtown Campus (Meeting Place)',
        description: "Prepare your CVs and come visit some of the coolest companies in Downtown Montreal on the McGill AI Company Crawl! We will walk through the city and visit some of the offices of companies currently seeking Computer Science & Software Engineering interns. Each stop will include a short presentation and a speed networking session.",
    },
    {
        photo: path('learnathon23'),
        name: 'McGill AI Learnathon',
        datetime: 'March 18th, 2023',
        location: 'Virtual',
        description: "Join some of the most curious students and acclaimed AI researchers in Montreal for an all-day virtual conference! The McGill AI Society has organized a series of talks and events open to interested, curious, and ambitious students ranging from high school to the graduate level, completely free of charge. Come learn about AI and meet other like-minded students! By registering, you'll have access to ALL of our events throughout the day.",
    },
]