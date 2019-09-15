import React from 'react';
import styled from '@emotion/styled';

import Slider from "react-slick";
import Image1 from './assets/gallery/1.JPG';
import Image2 from './assets/gallery/2.JPG';
import Image3 from './assets/gallery/3.JPG';
import Image4 from './assets/gallery/4.JPG';
import Image5 from './assets/gallery/5.JPG';
import Image6 from './assets/gallery/6.JPG';

const Container = styled('div')`
	max-width: 600px;
`;

const Image = styled('img')`
	width: 500px;
	height: auto;
	margin-left: auto;
	margin-right: auto;
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
	      </Container>
	    );
	}
		
}

export default Gallery;