import React from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import styles from '../../styles/pages/mais202.module.scss';

import About from './about.js';

import FAQ from './faq.js';

const Image = styled('img')`
    width: 600px;

    @media screen and (max-width: 767px) {
        width: 500px;
        height: auto;
    }
    @media screen and (max-width: 600px) {
        width: 400px;
        height: auto;
    }
    @media screen and (max-width: 490px) {
        display: none;
    }
`;

export default function MAIS202() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <h1>MAIS202</h1>
            <h3>ACCELERATED INTRODUCTION TO MACHINE LEARNING</h3>
            <p>2021-2022 Offerings: Fall 2021, Winter 2022</p>
            {/* <SubscribeButton href="https://tiny.cc/mais202-w2020-app" target="_blank">APPLY NOW!</SubscribeButton> */}
            <Slider {...settings}>
                <img src="/images/mais202/gallery/1.jpg" />

                <img src="/images/mais202/gallery/2.jpg" />

                <img src="/images/mais202/gallery/3.jpg" />

                <img src="/images/mais202/gallery/4.jpg" />

                <img src="/images/mais202/gallery/5.jpg" />

                <img src="/images/mais202/gallery/6.jpg" />
            </Slider>
            <div className="flex-center">
                {['1', '2', '3', '4'].map((number) => (
                    <img
                        index={number}
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
