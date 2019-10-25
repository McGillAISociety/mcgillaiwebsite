import React from 'react';
import styled from '@emotion/styled';

import Slider from "react-slick";
import Image1 from './assets/gallery/1.jpg';
import Image2 from './assets/gallery/2.jpg';
import Image3 from './assets/gallery/3.jpg';
import Image4 from './assets/gallery/4.jpg';
import Image5 from './assets/gallery/5.jpg';
import Image6 from './assets/gallery/6.jpg';

const Container = styled('div')`
	text-align: center;
`;

const GalleryContainer = styled('div')`
	max-width: 600px;
	display: inline-block;
	@media screen and (max-width: 767px) {
		max-width: 500px;
	}
	
	@media screen and (max-width: 600px) {
		max-width: 400px;
	}

	`;

const Image = styled('img')`
	width: 600px;
	height: auto;
	margin-left: auto;
	margin-right: auto;
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

class Gallery extends React.Component {
	render() {
		const settings = {
	      autoplay: true,
	      autoplaySpeed: 2000,
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1
	    };
	    return (
	      <Container>
	      <GalleryContainer>
	        <Slider {...settings}>
	          <div>
	            <Image src={Image1} />
	          </div>
	          <div>
	            <Image src={Image2} />
	          </div>
	          <div>
	            <Image src={Image3} />
	          </div>
	          <div>
	            <Image src={Image4} />
	          </div>
	          <div>
	            <Image src={Image5} />
	          </div>
	          <div>
	            <Image src={Image6} />
	          </div>
	        </Slider>
	        </GalleryContainer>
	      </Container>
	    );
	}
		
}

export default Gallery;