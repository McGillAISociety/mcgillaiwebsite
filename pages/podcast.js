import React from 'react';
import styles from '../styles/pages/podcast.module.scss';
import Profiles from '../components/Profiles';

import academicYearExecsMap from '../data/execs/academicYearExecsMap';
const hostData = academicYearExecsMap
    .get(academicYearExecsMap.get('currentAcademicYear'))
    .filter((exec) => exec.position.toLowerCase().includes('podcast'));

export default function Podcast() {
    return (
        <>
            <section>
                <h2>Stream</h2>
                <div className="flex-center">
                    <iframe
                        title="Apple Podcasts"
                        className={styles['embeds__apple']}
                        src="https://embed.podcasts.apple.com/us/podcast/mcgill-ai-podcast/id1583837131?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark"
                        height="500px"
                        frameborder="0"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                        allow="autoplay *; encrypted-media *;"
                    />
                    <div className="flex-center">
                        <iframe
                            title="Spotify"
                            className={styles['embeds__spotify']}
                            src="https://open.spotify.com/embed/show/1k3AWxBYuGetrCjvZip8Ot?utm_source=generator&theme=0"
                            height="232"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        />
                        <iframe
                            className={styles['embeds__youtube']}
                            height="315"
                            src="https://www.youtube.com/embed/videoseries?list=PLxI2mURqdZYNjiA6cXMepfASyunlaP9Ah"
                            title="YouTube"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>
            <section>
                <h2>About</h2>
                <p>
                    There are very few places in the world like Montreal and
                    McGill which have such a concentration of talent in the
                    field of AI/ML. MAIS primarily serves to build a community
                    with a shared passion for the field, spreading knowledge and
                    resources to help aid people trying to enter the AI
                    ecosystem. Our podcast aims to promote the research and
                    share the experiences of people making remarkable
                    contributions to the development of AI across disciplines,
                    and to allow others to use that information to break into
                    the field while being more aware of the challenges and
                    opportunities. We hope to foster an accessible, holistic
                    resource to understand how AI is evolving and continuously
                    changing the world around us.
                </p>
                <h3>Vision and Goals</h3>
                <ul>
                    <li>
                        Build an accessible, holistic discussion platform and
                        interdisciplinary community around AI.
                    </li>
                    <li>
                        Cover the current and future research, applications, and
                        implications of AI.
                    </li>
                    <li>
                        Analyze the socioeconomic, geopolitical and ethical
                        concerns of AI.
                    </li>
                    <li>
                        Destigmatize the field of AI and reduce the barriers to
                        entry to all those interested/curious.
                    </li>
                </ul>
                <p>
                    Interested in collaborating for an episode or have
                    questions? Reach out to the podcast team at{' '}
                    <a href="podcast.mcgillai@mcgilleus.ca">
                        podcast.mcgillai@mcgilleus.ca
                    </a>
                    !
                </p>
            </section>

            <section>
                <h2>Meet The Hosts</h2>
                <Profiles profilesData={hostData} />
            </section>

            <section>
                <h2>FAQ</h2>
                <h3>What does the structure of an episode look like?</h3>
                <p>We will broadly be focusing on three ideas each episode:</p>
                <ul>
                    <li>
                        Getting to know the guest, their background, and the
                        history of the topics they are studying.
                    </li>
                    <li>
                        Looking at the theoretical concepts and frameworks the
                        guest’s research uses and the problems their research is
                        trying to solve.
                    </li>
                    <li>
                        Analyzing this information from an interdisciplinary
                        lens and trying to understand the socio political and
                        economical impact their research has, as well as the
                        ethical considerations that have gone into their work.
                    </li>
                </ul>
            </section>
        </>
    );
}
