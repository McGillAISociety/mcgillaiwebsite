import React from 'react';
import Head from 'next/head';

export default function MetaTags({ title, description, imagePath, route }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://mcgillai.com${route}`} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imagePath} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:url"
                content={`https://mcgillai.com${route}`}
            />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={imagePath} />
        </Head>
    );
}
