import styles from '../styles/Footer.module.scss';
import React from 'react';
import { MdEmail as Email } from 'react-icons/md';
import {
    FaFacebookF as Facebook,
    FaInstagram as Instagram,
    FaLinkedinIn as Linkedin,
    FaTwitter as Twitter,
    FaGithub as Github,
    FaMediumM as Medium,
} from 'react-icons/fa';

const iconProps = {
    color: 'white',
    size: 30,
    className: styles['footer__logo'],
};

const socials = [
    {
        icon: <Email {...iconProps} />,
        link: 'mailto:mcgillaicontact@gmail.com',
    },
    {
        icon: <Facebook {...iconProps} />,
        link: 'https://www.facebook.com/McGillAI/',
    },
    {
        icon: <Instagram {...iconProps} />,
        link: 'https://www.instagram.com/mcgillaisociety/',
    },
    {
        icon: <Linkedin {...iconProps} />,
        link: 'https://www.linkedin.com/company/mcgill-artificial-intelligence-society/',
    },
    {
        icon: <Twitter {...iconProps} />,
        link: 'https://twitter.com/mcgillaisociety',
    },
    {
        icon: <Github {...iconProps} />,
        link: 'https://github.com/McGillAISociety',
    },
    {
        icon: <Medium {...iconProps} />,
        link: 'https://medium.com/mcgill-artificial-intelligence-review',
    },
];

export default function Footer() {
    return (
        <footer className={`flex-center ${styles['footer']}`}>
            <div>
                <div className="flex-center">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
                <div className="flex-center">
                    <small>
                        © McGill Artificial Intelligence Society&nbsp;
                        {new Date().getFullYear()}
                    </small>
                </div>
            </div>
        </footer>
    );
}
