import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/meta/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/meta/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/meta/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/meta/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/meta/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta
                        name="keywords"
                        content="AI, ML, MAIS, McGill, artificial intelligence, machine learning, university, society, MAIS 202, MAIS Hacks, hackathon, bootcamp, deep learning, club, student, podcast, learnathon, ethics"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    <meta name="language" content="English" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
