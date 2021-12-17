import React from 'react';
import { useState } from 'react';
import NavLink from './NavLink';
import styles from '../styles/NavBar.module.scss';
import { HiExternalLink } from 'react-icons/hi';

// TODO: hover styling
// TODO: mobile nav!

const navOptions = [
    {
        title: 'Team',
        route: 'ourteam',
    },
    {
        title: 'MAIS 202',
        route: 'mais202',
    },
    {
        title: 'Podcast',
        route: 'podcast',
    },
    {
        title: 'Resources',
        route: 'mtlai',
    },
    {
        title: 'FAQ',
        route: 'faq',
    },
    {
        title: 'MAIS Hacks',
        route: 'https://maishacks.com/',
        external: true,
    },
    {
        title: 'Learnathon',
        route: 'https://mcgillailearn.com/',
        external: true,
    },
];

function NavBar() {
    const [expanded, setExpanded] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <nav className={`${styles['nav']} flex-center`}>
            <NavLink exact href="/">
                <img
                    src="/images/logo.png"
                    alt="MAIS Logo"
                    className={`${styles['nav__item']} ${styles['nav__item--logo']}`}
                />
            </NavLink>
            {/* TODO: decide if I'm going to wrap these in their own div or not */}
            <div>
                {navOptions.map((navOption, index) => {
                    const props = {
                        href: navOption.route,
                        key: index,
                    };
                    const item = (
                        <span
                            className={`${styles['nav__item']} ${styles['nav__item--text']}`}
                        >
                            {navOption.title}
                            {navOption.external && (
                                <HiExternalLink
                                    className={styles['nav__item--icon']}
                                    size={25}
                                    color="lightgray"
                                />
                            )}
                        </span>
                    );
                    return navOption.external ? (
                        <a {...props} target="_blank" rel="noopener noreferrer">
                            {item}
                        </a>
                    ) : (
                        // TODO: add active styling
                        <NavLink {...props}>{item}</NavLink>
                    );
                })}
            </div>
        </nav>
    );
}

export default NavBar;
