import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/components/NavBar.module.scss';
import { HiExternalLink } from 'react-icons/hi';

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
    const router = useRouter();

    // TODO: cleanup the classname structure maybe
    // TODO: do a background gradient for active links accross navbar? and animate globally between them?

    // TODO: don't display the logo as part of a flexbox, absolute position it instead
    // then wrap the navLinks in a div that 1) has a left-margin of the same width as the logo and 2) has className mobile-hide
    // desktop-hide the react-burger-menu burger and use a column flexbox to display navLinks in the menu

    const navLinks = navOptions.map((navOption, index) => {
        const props = {
            href: navOption.route,
            key: index,
        };
        const active = router.pathname === `/${navOption.route}`;
        const item = (
            <span
                className={`${styles['nav__item']}
                    ${styles['nav__item--text']}
                    ${active ? styles['nav__item--text--active'] : ''}`}
            >
                {navOption.title}
                {navOption.external && (
                    <HiExternalLink
                        className={styles['nav__item--icon']}
                        size={25}
                    />
                )}
            </span>
        );
        return navOption.external ? (
            <a {...props} target="_blank" rel="noopener noreferrer">
                {item}
            </a>
        ) : (
            <Link {...props}>{item}</Link>
        );
    });

    return (
        <nav className={`${styles['nav']} flex-center`}>
            <Link exact href="/">
                <div
                    className={`${styles['nav__item']}
                            ${styles['nav__item--logo']} flex-center`}
                >
                    <div
                        className={`${styles['nav__item--logo__bounds']}
                        ${
                            router.pathname === '/'
                                ? styles['nav__item--logo__bounds--active']
                                : ''
                        }`}
                    />
                    <img
                        className={`${styles['nav__item--logo__img']}
                        ${
                            router.pathname === '/'
                                ? styles['nav__item--logo__img--active']
                                : ''
                        }`}
                        src="/images/logo.png"
                        alt="MAIS Logo"
                    />
                </div>
            </Link>
            {navLinks}
        </nav>
    );
}

export default NavBar;
