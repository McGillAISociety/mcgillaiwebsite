import React from 'react';
import styles from '../styles/components/ContentGrid.module.scss';
import Link from 'next/link';

// reusable component that dispays a list of content in squares with nice gradients
// if images are supplied, it displays the text on hover, if not the text is always displayed
// each content can have title, text, image, link (detect if external/internal)

export default function ContentGrid({ content }) {
    return (
        <>
            <center className="desktop-hide">
                <small>
                    <i>Tap for more!</i>
                </small>
            </center>
            <div className={styles['grid']}>
                {content.map((data, index) => {
                    const externalLink = data.href?.startsWith('http');

                    const cell = (
                        <div
                            className={`${styles['grid__cell']}
                                        ${
                                            data.href &&
                                            styles['grid__cell--link']
                                        }`}
                            onClick={() => {
                                if (!externalLink) return;
                                window.open(data.href);
                            }}
                            key={index}
                        >
                            {data.img && (
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className={styles['grid__background']}
                                />
                            )}
                            <div
                                className={`${styles['grid__bounds']} 
                                    ${
                                        index % 2 === 0 &&
                                        styles['grid__bounds--red']
                                    }
                                    ${
                                        data.img &&
                                        styles['grid__bounds--with-img']
                                    }
                                    `}
                            />
                            <div
                                className={`flex-center ${
                                    styles['grid__text']
                                } ${
                                    data.img && styles['grid__text--with-img']
                                }`}
                            >
                                <div>
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                    return data.href && !externalLink ? (
                        <Link key={index} href={data.href}>
                            {cell}
                        </Link>
                    ) : (
                        cell
                    );
                })}
            </div>
        </>
    );
}
