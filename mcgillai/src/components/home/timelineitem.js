import React from 'react'
import styled from '@emotion/styled'

import { 
	PrimaryFont, 
	SecondaryFont
	} from '../commonstyles'

const ItemContainer = styled('div')`
	display: flex;
    justify-content: flex-end;
    padding-right: 70px;
    position: relative;
    margin: 10px 0;
    width: 50%;

    &:nth-child(odd) {
    	align-self: flex-end;
		justify-content: flex-start;
		padding-left: 70px;
		padding-right: 0;
    }

    &:nth-child(odd) .Text {
    	text-align: left;
    	align-items: flex-start;

    	@media only screen and (max-width: 767px) {
    		padding: 15px 10px;
	        text-align: center;
	        align-items: center;
    	}
    }

    &:nth-child(odd) .Text::after {
    right: auto;
    left: -10px;
	}

	&:nth-child(odd) .Image {
		right: auto;
    	left: -36px;

    	@media only screen and (max-width: 767px) {
    		padding: 15px 10px;
	        text-align: center;
	        align-items: center;
    	}
	}
`;

const ItemContent = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
    position: relative;
    width: 400px;
    max-width: 80%;
    text-align: right;


    ::after {
    	content: ' ';
	    background-color: #FFFFFF;
	    position: absolute;
	    right: -10px;
	    top: calc(50% - 30px);
	    transform: rotate(45deg);
	    width: 10px;
	    height: 10px;

        @media only screen and (max-width: 767px) {
            visibility: hidden;
        }

    }

    @media only screen and (max-width: 1023px) {
    	max-width: 100%;
    }

    @media only screen and (max-width: 767px) {
    	padding: 15px 10px;
        text-align: center;
        align-items: center;
    }
`;

const Title = styled('h2')`
	font-family: 'Montserrat-Bold';
	font-size: 28px;
	color: #FFFFFF;
	margin-bottom: 0px;
	@media only screen and (max-width: 767px) {
	    font-size: 24px;
    }
    @media screen and (max-width: 350px) {
            font-size: 18px;
    }
`;

const Description = styled('div')`
	font-family: 'Montserrat';
	font-size: 24px;
	color: #FFFFFF;
	> p {
		margin-top: 0px;
		@media only screen and (max-width: 767px) {
	    	font-size: 14px;
    	}
	}
	
`;

const Icon = styled('img')`
    position: absolute;
    top: calc(25% - 2px);
    right: -36px;
    width: 80px;
    height: auto;
    z-index: 100;
`;

const TimelineItem = ({ data }) => (
	<ItemContainer>
		<ItemContent className='Text'>
			<Title> {data.title} </Title>
			<Description>
				<p> {data.time} <br/> {data.place} </p>
			</Description>
		</ItemContent>
		<Icon className='Image' src = {data.category}/>
	</ItemContainer>
);

export default TimelineItem;