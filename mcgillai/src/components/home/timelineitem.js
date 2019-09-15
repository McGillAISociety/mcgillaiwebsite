import React from 'react'
import styled from '@emotion/styled'

const ItemContainer = styled('div')`
	display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    position: relative;
    margin: 10px 0;
    width: 50%;

    :nth-child(odd) {
    	align-self: flex-end;
		justify-content: flex-start;
		padding-left: 30px;
		padding-right: 0;
    }
`;
	


const ItemContent = styled('div')`
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 15px;
    position: relative;
    width: 400px;
    max-width: 70%;
    text-align: right;

    ::after {
    	content: ' ';
	    background-color: #fff;
	    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
	    position: absolute;
	    right: -7.5px;
	    top: calc(50% - 7.5px);
	    transform: rotate(45deg);
	    width: 15px;
	    height: 15px;
    }
`;

const TimelineItem = ({ data }) => (
	<ItemContainer>
		<ItemContent>
			<h2> {data.title} </h2>
			<time> {data.time} </time>
			<p> {data.place} </p>
		</ItemContent>
	</ItemContainer>
);

export default TimelineItem;