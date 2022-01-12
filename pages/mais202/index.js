import React from 'react';
import styled from '@emotion/styled';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from '../../styles/pages/mais202.module.scss';

import About from './about.js';

import FAQ from './faq.js';

export default function MAIS202() {
    return (
        <>
            <h1>MAIS202</h1>
            <div className="flex-center">
                <div>
                    <h3>ACCELERATED INTRODUCTION TO MACHINE LEARNING</h3>
                    <p>2021-2022 Offerings: Fall 2021, Winter 2022</p>
                </div>
                {/* <SubscribeButton href="https://tiny.cc/mais202-w2020-app" target="_blank">APPLY NOW!</SubscribeButton> */}
                <Carousel
                    autoPlay
                    infiniteLoop
                    stopOnHover={false}
                    showStatus={false}
                    showThumbs={false}
                    interval={1500}
                    className={styles['carousel']}
                >
                    {['1', '2', '3', '4', '5', '6'].map((number) => (
                        <img
                            key={number}
                            src={`/images/mais202/gallery/${number}.jpg`}
                            alt="MAIS"
                            className={styles['carousel__img']}
                        />
                    ))}
                </Carousel>
            </div>
            <div className="flex-center">
                {['1', '2', '3', '4'].map((number) => (
                    <img
                        key={number}
                        src={`/images/mais202/stats_${number}.svg`}
                        alt="MAIS Statistic"
                        className={styles['stat-img']}
                    />
                ))}
            </div>
            <About></About>
            <FAQ></FAQ>
        </>
    );
}
