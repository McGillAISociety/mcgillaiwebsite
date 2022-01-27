import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
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
                    <link rel="mask-icon" href="/meta/safari-pinned-tab.svg" />
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
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossorigin
                    />
                    {/* TODO: only pull in the font weights that I use, and/or only pull Roboto using next/head on the home page? */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
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
