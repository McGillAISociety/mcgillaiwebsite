import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/NavBar.module.scss';
import { HiExternalLink } from 'react-icons/hi';
import { useWindowWidth } from './util';
import { slide as BurgerMenu } from 'react-burger-menu';
import academicYearExecsMap from '../data/execs/academicYearExecsMap.js';
import academicYearEventsMap from '../data/events/academicYearEventsMap.js';
import { sameBasePath } from './util';
import { route } from 'next/dist/server/router.js';

const navOptions = [
    {
        title: 'Team',
        route: `/team/${academicYearExecsMap.get('currentAcademicYear')}`,
    },
    {
        title: 'Events',
        route: `/events/${academicYearEventsMap.get('currentAcademicYear')}`,
    },
    {
        title: 'MAIS 202',
        route: '/mais202',
    },
    {
        title: 'Podcast',
        route: '/podcast',
    },
    /*{
        title: 'Membership',
        route: '/membership',
    },*/
    {
        title: 'Resources',
        route: '/resources',
    },
    {
        title: 'FAQs',
        route: '/faq',
    },
    {
        title: 'MAIS Hacks',
        // route: 'https://maishacks.com/',
        route: 'https://mais-hacks.devpost.com',
        external: true,
    },
    {
        title: 'Learnathon',
        route: 'https://mcgillailearn.com/',
        external: true,
    },
];

function NavBar() {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const router = useRouter();
    const burgered = useWindowWidth(1300);

    // TODO: cleanup the classname structure maybe

    const homeActive = router.route === '/';
    const logo = (
        <Link exact href="/">
            <div
                className={`${styles['nav__item']}
                ${styles['nav__item--logo']} flex-center`}
            >
                <div
                    className={`${styles['nav__item--logo__bounds']}
                    ${
                        homeActive
                            ? styles['nav__item--logo__bounds--active']
                            : ''
                    }`}
                />
                <div
                    className={`${styles['nav__item--logo__img']}
                    ${
                        homeActive ? styles['nav__item--logo__img--active'] : ''
                    }`}
                >
                    <Image
                        width={50}
                        height={50}
                        priority
                        src="/images/logo.png"
                        alt="MAIS Logo"
                    />
                </div>
            </div>
        </Link>
    );

    const navLinks = navOptions.map((navOption, index) => {
        const props = {
            href: navOption.route,
            key: index,
        };
        const active = sameBasePath(router.route, navOption.route);
        const item = (
            <span
                className={`${styles['nav__item']}
                    ${styles['nav__item--text']}
                    ${active ? styles['nav__item--text--active'] : ''}`}
                onClick={() => {
                    if (!burgerOpen) return;
                    setBurgerOpen(false);
                }}
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

    return burgered ? (
        <nav className={styles['nav']}>
            {logo}
            <BurgerMenu
                width={250}
                right
                itemListElement="div"
                disableAutoFocus
                isOpen={burgerOpen}
                onStateChange={(state) => setBurgerOpen(state.isOpen)}
            >
                {navLinks}
            </BurgerMenu>
        </nav>
    ) : (
        <nav className={`${styles['nav']} flex-center`}>
            {logo} {navLinks}
        </nav>
    );
}

export default NavBar;
