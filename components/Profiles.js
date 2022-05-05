import React from 'react';
import styles from '../styles/components/Profiles.module.scss';
import { FaLinkedinIn as LinkedIn } from 'react-icons/fa';
import Image from 'next/image';

/** 
profileData takes the following form:
[
    {
        photo: `/images/ourteam/2021-2022/yulu.png`,
        name: 'Yu Lu Liu',
        position: 'Co-President',
        bio: 'Yu Lu is a third year Stats and Comp Sci student interested in natural language processing and its applications. In her free time, she enjoys gardening and watching nature documentaries.',
        linkedin: 'https://www.linkedin.com/in/yu-lu-liu-5a66861a2/',
    }, ...
]
*/

export default function Profiles({ profilesData = [] }) {
    return (
        <div className={`flex-center ${styles['profiles-container']}`}>
            {profilesData.map((profileData, index) => (
                <div className={styles['profile']} key={index}>
                    <Image
                        src={profileData.photo}
                        alt={profileData.name}
                        width={200}
                        height={200}
                    />
                    <h2>{profileData.name}</h2>
                    <h3>{profileData.position}</h3>
                    <p>{profileData.bio}</p>
                    <a
                        href={profileData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedIn size={20} />
                    </a>
                </div>
            ))}
        </div>
    );
}
